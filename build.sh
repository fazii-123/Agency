#!/bin/bash
# Vercel Build Script

# 1. Build the React Frontend
echo "Building Frontend..."
cd Agency
npm install
npm run build
cd ..

# 2. Setup Python environment and run Django tasks
echo "Setting up Python & Backend..."
pip install -r requirements.txt
cd backend
python manage.py collectstatic --noinput
python manage.py migrate
