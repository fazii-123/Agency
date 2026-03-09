import sys
import os

# Add the backend/ directory to Python path so Django can be imported
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

# Tell Django which settings module to use
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

# Create the WSGI application — Vercel calls this as a serverless function
from django.core.wsgi import get_wsgi_application
app = get_wsgi_application()
