import React from "react";
import "../styles/DigitalMarketing.css";
import { Link } from "react-router-dom";
import web1 from "../assets/web/web1.jpg";
import seoImg from "../assets/digitalmarketing/seo.jpg";
import socialImg from "../assets/digitalmarketing/social.jpg";
import ppcImg from "../assets/digitalmarketing/ppc.jpg";
import contentImg from "../assets/digitalmarketing/content.jpg";
import emailImg from "../assets/digitalmarketing/email.jpg";
import influencerImg from "../assets/digitalmarketing/influencer.jpg";
const DigitalMarketing = () => {
  const services = [
    {
      title: "SEO Optimization",
      description:
        "Boost your online visibility and attract organic traffic through keyword research, technical SEO, and link building.",
      image: seoImg,
    },
    {
      title: "Social Media Marketing",
      description:
        "Grow your brand presence through creative storytelling and targeted ad campaigns on all major social platforms.",
      image: socialImg,
    },
    {
      title: "Pay-Per-Click Advertising",
      description:
        "Launch high-performing Google Ads and Meta Ads campaigns that drive instant traffic and maximize ROI.",
      image: ppcImg,
    },
    {
      title: "Content Marketing",
      description:
        "Develop blogs, videos, and case studies that connect emotionally with your audience and build brand authority.",
      image: contentImg,
    },
    {
      title: "Email Marketing",
      description:
        "Engage subscribers with automated campaigns and personalized messages that convert leads into loyal customers.",
      image: emailImg,
    },
    {
      title: "Influencer Marketing",
      description:
        "Collaborate with niche influencers to amplify your brand message and reach the right audience authentically.",
      image: influencerImg,
    },
  ];

  return (
    <>
      <section
        className="digital-hero"
        style={{
          backgroundImage: `url(${web1})`, 
        }}
      >
        <div className="digital-overlay">
          <h1>Digital Marketing</h1>
          <p>
            Empowering brands with strategic marketing, creative content, and
            data-driven campaigns that deliver real results.
          </p>
           <Link to="/contact" className="digital-hero-btn">
            Collaborate With Us →
          </Link>
        </div>
      </section>

      <section className="digital-section">
        <h2>Our Expertise</h2>
        <p className="section-subtitle">
          We combine creativity, strategy, and analytics to craft impactful
          marketing campaigns.
        </p>

        <div className="digital-grid">
          {services.map((service, index) => (
            <div className="digital-card" key={index}>
              <div className="digital-img-container">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="digital-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/contact" className="digital-btn">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


      <section className="digital-cta">
        <h2>Ready to Grow Your Business?</h2>
        <p>
          Let’s collaborate to design intelligent marketing strategies that
          inspire engagement and deliver measurable growth.
        </p>
        <Link to="/contact" className="digital-cta-btn">
          Let’s Work Together →
        </Link>
      </section>
    </>
  );
};

export default DigitalMarketing;
