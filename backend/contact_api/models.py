from django.db import models

SERVICE_CHOICES = [
    ('web', 'Website Development'),
    ('app', 'App Development'),
    ('design', 'Graphic Design'),
    ('marketing', 'Digital Marketing'),
    ('seo', 'SEO Services'),
    ('other', 'Other'),
]

STATUS_CHOICES = [
    ('new', 'New'),
    ('in-progress', 'In-Progress'),
    ('contacted', 'Contacted'),
    ('resolved', 'Resolved'),
]

class ContactSubmission(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    service = models.CharField(max_length=20, choices=SERVICE_CHOICES)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='new')

    def __str__(self):
        return f"{self.name} - {self.get_service_display()}"

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Contact Submission'
        verbose_name_plural = 'Contact Submissions'
