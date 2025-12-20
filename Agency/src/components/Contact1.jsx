import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Contact1.css';

const Contact1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'web',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await axios.post('/api/contact/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        setIsSubmitted(true);
        // Auto-hide the success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'web',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMsg = error.response?.data?.message || 'Failed to send message. Please try again.';
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="contact-content-wrapper">
        <div className="contact-text-area">
          <span className="contact-label">GET IN TOUCH</span>
          <h2 className="contact-heading">
            Tell us about your project—whether it's a website, SEO, or marketing.
          </h2>

          <div className="contact-details">
            <div className="contact-col">
              <h4 className="detail-title">TALK TO US</h4>
              <p className="detail-info">Work and general</p>
              <p className="detail-info">inquiries</p>
              <p className="detail-info">+92 312 0613119</p>
            </div>
            
            <div className="contact-col">
              <h4 className="detail-title">POST ADDRESS</h4>
              <p className="detail-info">Model Town, Lahore</p>
           
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <h3 className="form-header">Have a project in mind?</h3>
          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="YOUR NAME"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="BUSINESS EMAIL"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="PHONE NUMBER"
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
              <div className="form-group">
                <select
                  name="service"
                  className={`form-select ${errors.service ? 'error' : ''}`}
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="web">Website Development</option>
                  <option value="app">App Development</option>
                  <option value="design">Graphic Design</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="seo">SEO Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                className={`form-textarea ${errors.message ? 'error' : ''}`}
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <div className="form-actions">
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
              {isSubmitted && (
                <div className="form-success-message">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact1;