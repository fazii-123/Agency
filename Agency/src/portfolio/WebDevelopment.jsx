import React from "react";
import "../styles/WebDevelopment.css";
import { Link } from "react-router-dom";
import web1 from "../assets/web/web1.jpg";
import web2 from "../assets/web/web2.jpg";
import web3 from "../assets/web/web3.jpg";
import web4 from "../assets/web/web4.jpg";
import web5 from "../assets/web/web5.jpg";
import web6 from "../assets/web/web6.jpg";
import web7 from "../assets/web/web7.jpg";
import web8 from "../assets/web/web8.jpg";
import web9 from "../assets/web/web9.jpg";

const WebDevelopment = () => {
  const webProjects = [
    {
      title: "Corporate Business Website",
      description:
        "A responsive and SEO-optimized website for a financial firm, designed to build credibility and drive engagement.",
      image: web1,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Developed a secure and scalable online store with product filtering, smart search, and real-time inventory management.",
      image: web2,
    },
    {
      title: "Creative Agency Portfolio",
      description:
        "Built an animated, visually dynamic agency website showcasing client success stories and case studies.",
      image: web3, 
    },
    {
      title: "Tech Startup Landing Page",
      description:
        "Designed a modern landing page optimized for conversions, featuring smooth scroll, CTA sections, and micro-interactions.",
      image: web4,
    },
    {
      title: "Education Portal",
      description:
        "Built an interactive web app for online courses with student dashboards, progress tracking, and responsive UI.",
      image: web5,
    },
    {
      title: "Restaurant Website",
      description:
        "A deliciously modern food website with menu integration, online reservations, and immersive visuals.",
      image: web6,
    },
    {
      title: "Healthcare Web Portal",
      description:
        "Developed a patient-friendly medical website with appointment scheduling, doctor profiles, and accessibility focus.",
      image: web7,
    },
    {
      title: "Personal Portfolio",
      description:
        "Designed a minimalist developer portfolio showcasing skills, projects, and contact information with fluid animations.",
      image: web8,
    },
    {
      title: "Real Estate Platform",
      description:
        "Created a property listing platform with advanced filters, 3D virtual tours, and integrated Google Maps support.",
      image: web9,
    },
  ];

  return (
    <>
      <section
        className="webdev-hero"
        style={{
          backgroundImage: `url(${web1})`,
        }}
      >
        <div className="webdev-overlay">
          <h1>Web Development</h1>
          <p>
            Explore our professional web projects — designed with precision,
            performance, and creativity to help brands grow digitally.
          </p>
           <Link to="/contact" className="web-hero-btn">
            Collaborate With Us →
          </Link>
        </div>
      </section>
      <section className="webdev-section">
        <h2>Our Expertise</h2>
        <p className="section-subtitle">
          A showcase of innovation, design, and high-performing web solutions.
        </p>

        <div className="webdev-grid">
          {webProjects.map((project, index) => (
            <div className="webdev-card" key={index}>
              <div className="webdev-img-container">
                <img src={project.image} alt={project.title} />
                <div className="webdev-hover">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to="/contact" className="webdev-btn">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="webdev-cta">
        <h2>Have a Web Project in Mind?</h2>
        <p>
          Let’s turn your ideas into a stunning online experience that performs
          and inspires.
        </p>
        <Link to="/contact" className="webdev-cta-btn">
          Let’s Work Together →
        </Link>
      </section>
    </>
  );
};

export default WebDevelopment;
