import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaEnvelope, FaPhoneAlt, FaChevronRight, FaWhatsapp } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-top">
            {/* Left Column */}
            <div className="footer-column brand-column">
                <div className="footer-logo">
                    <h2><span>LA</span>DigitalAgency</h2>
                </div>
                <div className="footer-divider-small"></div>
                
                <div className="contact-info">
                    <div className="contact-item">
                        <FaEnvelope className="contact-icon" />
                        <span>ladigitalagency72@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <FaPhoneAlt className="contact-icon" />
                        <span>+92 312 0613119</span>
                    </div>
                </div>
            </div>

            {/* Middle Column 1 */}
            <div className="footer-column links-column">
                <h3>Other Pages</h3>
                <ul>
                    <li><FaChevronRight className="link-icon" /> <Link to="/" onClick={scrollToTop}>Home</Link></li>
                    <li><FaChevronRight className="link-icon" /> <Link to="/About" onClick={scrollToTop}>About Us</Link></li>
                    <li><FaChevronRight className="link-icon" /> <Link to="/Services" onClick={scrollToTop}>Services</Link></li>
                    <li><FaChevronRight className="link-icon" /> <Link to="/Project" onClick={scrollToTop}>Projects</Link></li>
                    <li><FaChevronRight className="link-icon" /> <Link to="/Contact" onClick={scrollToTop}>Contact</Link></li>
                </ul>
            </div>

            {/* Middle Column 2 */}
            <div className="footer-column links-column">
                <h3>Quick Links</h3>
                <ul>
                    <li><FaChevronRight className="link-icon" />Privacy Policy</li>
                    <li><FaChevronRight className="link-icon" />Term Of Service</li>
                    <li><FaChevronRight className="link-icon" />Disclaimer</li>
                    <li><FaChevronRight className="link-icon" />Credits</li>
                    <li><FaChevronRight className="link-icon" />FAQ</li>
                </ul>
            </div>

            {/* Right Column */}
            <div className="footer-column newsletter-column">
                <h3>Newsletter</h3>
                <div className="newsletter-box">
                    <input type="email" placeholder="Your Email Address" />
                    <button>Subscribe</button>
                </div>
                <p className="newsletter-text">Get the latest news & updates</p>
                <div className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=61574728847861" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                    <a href="https://www.instagram.com/la_digitalagency/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href="https://www.linkedin.com/company/la-digital-agency/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                </div>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="copyright">
                <p>Copyright © 2024 All rights reserved LA Digital Agency</p>
            </div>
        </div>

        <a href="https://wa.me/923120613119" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
        </a>

      </div>
    </footer>
  );
};

export default Footer;
