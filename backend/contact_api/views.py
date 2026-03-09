import logging
from rest_framework import generics, views, status, permissions
from rest_framework.response import Response
from rest_framework.authentication import SessionAuthentication
from django.db.models import Count, Q
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .models import ContactSubmission
from .serializers import ContactSubmissionSerializer

logger = logging.getLogger('contact_api')

# Custom authentication class to allow session auth without CSRF checks
class CsrfExemptSessionAuthentication(SessionAuthentication):
    def enforce_csrf(self, request):
        return

@method_decorator(csrf_exempt, name='dispatch')
class LoginView(views.APIView):
    permission_classes = [permissions.AllowAny]
    authentication_classes = []

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response(
                {'error': 'Username and password are required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        user = authenticate(request, username=username, password=password)

        if user is not None:
            if user.is_superuser or user.is_staff:
                login(request, user)
                logger.info(f"Admin login successful: {username}")
                return Response(
                    {'message': 'Login successful', 'user': username},
                    status=status.HTTP_200_OK
                )
            else:
                logger.warning(f"Unauthorized login attempt by non-admin user: {username}")
                return Response(
                    {'error': 'Unauthorized access. Admin privileges required.'},
                    status=status.HTTP_403_FORBIDDEN
                )
        else:
            logger.warning(f"Failed login attempt for username: {username}")
            return Response(
                {'error': 'Invalid credentials'},
                status=status.HTTP_401_UNAUTHORIZED
            )

@method_decorator(csrf_exempt, name='dispatch')
class LogoutView(views.APIView):
    authentication_classes = []

    def post(self, request):
        logout(request)
        return Response({'message': 'Logged out successfully'}, status=status.HTTP_200_OK)

class ValidateSessionView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [CsrfExemptSessionAuthentication]

    def get(self, request):
        return Response({
            'authenticated': True,
            'user': request.user.username
        }, status=status.HTTP_200_OK)

@method_decorator(csrf_exempt, name='dispatch')
class ContactSubmissionView(generics.ListCreateAPIView):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer
    authentication_classes = [CsrfExemptSessionAuthentication]

    def get_permissions(self):
        if self.request.method == 'POST':
            return [permissions.AllowAny()]
        return [permissions.IsAuthenticated()]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            logger.info(f"New contact submission from: {request.data.get('email', 'unknown')}")
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        logger.warning(f"Invalid contact form submission: {serializer.errors}")
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@method_decorator(csrf_exempt, name='dispatch')
class ContactSubmissionDetailView(generics.RetrieveUpdateAPIView):
    queryset = ContactSubmission.objects.all()
    serializer_class = ContactSubmissionSerializer
    authentication_classes = [CsrfExemptSessionAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        # Auto mark as read when admin views a submission
        if not instance.is_read:
            instance.is_read = True
            instance.save(update_fields=['is_read'])
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

class DashboardStatsView(views.APIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [CsrfExemptSessionAuthentication]

    def get(self, request):
        try:
            from django.utils import timezone
            from datetime import timedelta

            # Basic counts
            total_submissions = ContactSubmission.objects.count()
            unread_count = ContactSubmission.objects.filter(is_read=False).count()
            read_count = ContactSubmission.objects.filter(is_read=True).count()

            # Service distribution with display names
            service_distribution = ContactSubmission.objects.values('service').annotate(
                count=Count('service')
            )
            service_map = dict(ContactSubmission._meta.get_field('service').choices)

            service_data = [
                {
                    'name': service_map.get(item['service'], item['service']),
                    'value': item['count']
                }
                for item in service_distribution
            ]

            # Time-based analytics (last 30 days)
            now = timezone.now()
            thirty_days_ago = now - timedelta(days=30)
            last_month_submissions = ContactSubmission.objects.filter(
                created_at__gte=thirty_days_ago
            ).count()

            # Calculate percentage change
            previous_month_count = total_submissions - last_month_submissions
            if previous_month_count > 0:
                percentage_change = (
                    (last_month_submissions - previous_month_count) / previous_month_count
                ) * 100
            else:
                percentage_change = 100.0 if last_month_submissions > 0 else 0.0

            # Monthly trend data (last 7 months)
            monthly_data = []
            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

            for i in range(6, -1, -1):
                date = now - timedelta(days=i * 30)
                month_start = date.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
                next_month = (month_start + timedelta(days=32)).replace(day=1)

                count = ContactSubmission.objects.filter(
                    created_at__gte=month_start,
                    created_at__lt=next_month
                ).count()

                monthly_data.append({
                    'name': months[month_start.month - 1],
                    'uv': round(count * 1.2, 1),
                    'pv': count,
                    'amt': round(count * 0.8, 1)
                })

            # Top services
            top_services = ContactSubmission.objects.values('service').annotate(
                count=Count('service')
            ).order_by('-count')[:3]

            top_services_data = [
                {
                    'service': service_map.get(item['service'], item['service']),
                    'count': item['count']
                }
                for item in top_services
            ]

            # Recent activity (last 24 hours)
            yesterday = now - timedelta(days=1)
            recent_submissions = ContactSubmission.objects.filter(
                created_at__gte=yesterday
            ).count()

            # Status counts — FIX: 'new' is the default; no NULL values expected
            new_count = ContactSubmission.objects.filter(status='new').count()
            in_progress_count = ContactSubmission.objects.filter(status='in-progress').count()
            contacted_count = ContactSubmission.objects.filter(status='contacted').count()
            resolved_count = ContactSubmission.objects.filter(status='resolved').count()

            return Response({
                'total': total_submissions,
                'unread_count': unread_count,
                'read_count': read_count,
                'last_month_count': last_month_submissions,
                'percentage_change': round(percentage_change, 1),
                'recent_24h': recent_submissions,
                'service_distribution': service_data,
                'monthly_trend': monthly_data,
                'top_services': top_services_data,
                'new_count': new_count,
                'in_progress_count': in_progress_count,
                'contacted_count': contacted_count,
                'resolved_count': resolved_count,
                'status': 'success'
            })

        except Exception as e:
            logger.error(f"DashboardStatsView error: {str(e)}", exc_info=True)
            return Response({
                'error': str(e),
                'status': 'error'
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
