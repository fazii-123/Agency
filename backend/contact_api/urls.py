from django.urls import path
from .views import ContactSubmissionView, ContactSubmissionDetailView, DashboardStatsView, LoginView, LogoutView, ValidateSessionView

urlpatterns = [
    path('contact/', ContactSubmissionView.as_view(), name='contact-submission'),
    path('contact/<int:pk>/', ContactSubmissionDetailView.as_view(), name='contact-submission-detail'),
    path('stats/', DashboardStatsView.as_view(), name='dashboard-stats'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('validate-session/', ValidateSessionView.as_view(), name='validate-session'),
]
