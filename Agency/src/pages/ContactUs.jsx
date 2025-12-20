import React, { useEffect } from "react";
import "../styles/ContactUs.css";
import web1 from "../assets/web/web1.jpg";
import Contact1 from "../components/Contact1";

const ContactUs = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Contact Us - Your Agency Name";
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Get in touch with our team for any inquiries or project discussions.";
    
    // Cleanup function to reset the title when component unmounts
    return () => {
      document.title = "Your Agency Name";
    };
  }, []);

  return (
    <div className="contact-page">
      {/* Hero Section - Matching Project Page Style */}
      <section 
        className="contact-hero"
        style={{
          backgroundImage: `url(${web1})`
        }}
      >
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Get in touch with us to discuss your project and how we can help bring your ideas to life.
          Our team is ready to provide expert guidance and solutions tailored to your needs.</p>
        </div>
      </section>
      
      {/* Main Contact Section */}
      <main className="contact-main">
        <div className="container">
          <Contact1 />
        </div>
      </main>
    </div>
  );
};

export default ContactUs;