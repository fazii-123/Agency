import React from "react";
import "../styles/SEOOptimization.css";
import { Link } from "react-router-dom";
import web1 from "../assets/web/web1.jpg";
import keywordImg from "../assets/seo/keyword.jpg";
import onpageImg from "../assets/seo/onpage.jpg";
import offpageImg from "../assets/seo/offpage.jpg";
import technicalImg from "../assets/seo/technical.jpg";
import analyticsImg from "../assets/seo/analytics.jpg";
import contentImg from "../assets/seo/content.jpg";

const SEOOptimization = () => {
  const services = [
    {
      title: "Keyword Research",
      description:
        "Identify high-value keywords that drive targeted traffic and improve search engine visibility.",
      image: keywordImg,
    },
    {
      title: "On-Page SEO",
      description:
        "Optimize website structure, meta tags, headings, and content for better search engine ranking.",
      image: onpageImg,
    },
    {
      title: "Off-Page SEO",
      description:
        "Build quality backlinks, manage social signals, and enhance brand authority across the web.",
      image: offpageImg,
    },
    {
      title: "Technical SEO",
      description:
        "Improve website performance, speed, and crawlability to meet Google’s technical standards.",
      image: technicalImg,
    },
    {
      title: "Analytics & Reporting",
      description:
        "Track traffic, conversions, and rankings to measure performance and refine SEO strategies.",
      image: analyticsImg,
    },
    {
      title: "Content Optimization",
      description:
        "Create SEO-friendly content that engages users and improves your website’s relevance and authority.",
      image: contentImg,
    },
  ];

  return (
    <>
      <section
        className="seo-hero"
        style={{
          backgroundImage: `url(${web1})`,
        }}
      >
        <div className="seo-overlay">
          <h1>SEO Optimization</h1>
          <p>
            Boost your online presence with data-driven SEO strategies that increase visibility, traffic, and conversions.
          </p>
          <Link to="/contact" className="seo-hero-btn">
            Collaborate With Us →
          </Link>
        </div>
      </section>

      <section className="seo-section">
        <h2>Our Expertise</h2>
        <p className="section-subtitle">
          We combine technical SEO, content strategy, and analytics to help your website rank higher and attract qualified traffic.
        </p>

        <div className="seo-grid">
          {services.map((service, index) => (
            <div className="seo-card" key={index}>
              <div className="seo-img-container">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="seo-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/contact" className="seo-btn">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="seo-cta">
        <h2>Ready to Improve Your Rankings?</h2>
        <p>
          Let’s implement powerful SEO strategies that grow your online visibility, drive traffic, and generate leads.
        </p>
        <Link to="/contact" className="seo-cta-btn">
          Let’s Work Together →
        </Link>
      </section>
    </>
  );
};

export default SEOOptimization;
