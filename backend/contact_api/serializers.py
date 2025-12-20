from rest_framework import serializers
from .models import ContactSubmission

class ContactSubmissionSerializer(serializers.ModelSerializer):
    service_display = serializers.CharField(source='get_service_display', read_only=True)

    class Meta:
        model = ContactSubmission
        fields = ['id', 'name', 'email', 'phone', 'service', 'service_display', 'message', 'created_at', 'is_read', 'status']
