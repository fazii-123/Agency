import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Project.css";

import web1 from "../assets/web/web1.jpg";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";

const Project = () => {
  const projects = [
    {
      title: "Corporate Website",
      description:
        "A sleek and responsive corporate website that enhances brand credibility and digital presence.",
      image: project1,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A complete online shopping solution with real-time inventory, secure payments, and intuitive UX.",
      image: project2,
    },
    {
      title: "Mobile App Design",
      description:
        "Crafted a cross-platform mobile app with a focus on performance, UI clarity, and user engagement.",
      image: project3,
    },
    {
      title: "SEO & Marketing Dashboard",
      description:
        "Developed an analytics-driven dashboard to track campaign performance and boost search visibility.",
      image: project4,
    },
    {
      title: "Brand Identity Design",
      description:
        "Delivered a cohesive brand identity package including logo, typography, and visual language.",
      image: project5,
    },
    {
      title: "Portfolio Showcase",
      description:
        "Created a dynamic and visually engaging portfolio website for a creative agency.",
      image: project6,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [projects.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  return (
    <div className="projects-page">
      <section
        className="project-hero"
        style={{
          backgroundImage: `url(${web1})`,
        }}
      >
        <div className="overlay1">
          <h1>Our Projects</h1>
          <p>
            Explore our diverse range of projects that showcase innovation,
            precision, and creative excellence. We design, develop, and deliver
            solutions that help brands grow and stand out in the digital world.
          </p>
        </div>
      </section>

      <section className="projects-carousel">
        <h2 className="carousel-title">Featured Works</h2>
        <p className="carousel-subtitle">
          A glimpse into the projects that define our creativity and craftsmanship.
        </p>

        <div className="carousel-container">
          {projects.map((project, index) => {
            const position = (index - current + projects.length) % projects.length;
            let className = "carousel-card";

            if (position === 0) className += " active";
            else if (position === 1) className += " right";
            else if (position === projects.length - 1) className += " left";
            else className += " hidden";

            return (
              <div key={index} className={className}>
                <img src={project.image} alt={project.title} />
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to="/contact" className="explore-btn">
                    Let’s Work Together →
                  </Link>
                </div>
              </div>
            );
          })}

          <button className="nav-btn left-btn" onClick={prevSlide}>
            ❮
          </button>
          <button className="nav-btn right-btn" onClick={nextSlide}>
            ❯
          </button>
        </div>
      </section>

      <section className="about-simple">
        <h2 style={{ color: "white" }}>Let’s Build Something Great</h2>
        <p>
          Have an idea or project in mind? Let’s collaborate to turn your vision
          into a digital masterpiece.
        </p>
        <Link to="/contact" className="work-btn-simple">
          Get in Touch →
        </Link>
      </section>
    </div>
  );
};

export default Project;
