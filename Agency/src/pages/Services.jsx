import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Services.css";

import web1 from "../assets/web/web1.jpg";
import webDesignImg from "../assets/web-development.jpg";
import marketingImg from "../assets/digital-marketing.jpg";
import userExpImg from "../assets/user-experience.jpg";
import uiuxImg from "../assets/uiux.jpg";
import seoImg from "../assets/seo.jpg";
import appDevImg from "../assets/app-development.jpg";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We create visually stunning, responsive websites that bring your vision to life.",
      image: webDesignImg,
      link: "/portfolio/web-development",
    },
    {
      title: "App Development",
      description:
        "We design and build modern mobile apps that deliver smooth performance.",
      image: appDevImg,
      link: "/portfolio/app-development",
    },
    {
      title: "Digital Marketing",
      description:
        "Boost your visibility with our data-driven marketing strategies.",
      image: marketingImg,
      link: "/portfolio/digital-marketing",
    },
    {
      title: "UI / UX Design",
      description:
        "We design sleek, user-friendly interfaces for unforgettable experiences.",
      image: uiuxImg,
      link: "/portfolio/ui-ux",
    },
    {
      title: "SEO Optimization",
      description:
        "Maximize organic reach with our expert SEO optimization techniques.",
      image: seoImg,
      link: "/portfolio/seo",
    },
    {
      title: "User Experience",
      description:
        "Crafting smooth navigation and engaging interactions for your users.",
      image: userExpImg,
      link: "/portfolio/user-experience",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [services.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  return (
    <div className="services-page">
      <section
        className="services-hero"
        style={{
          backgroundImage: `url(${web1})`,
        }}
      >
        <div className="overlay">
          <h1>Our Services</h1>
          <p>
           Explore our diverse range of projects that showcase innovation, precision, and creative excellence. We design, develop, and deliver solutions that help brands grow and stand out in the digital world.
          </p>
        </div>
      </section>

      <section className="services-carousel">
        <h2 className="carousel-title">Our Professional Services</h2>
        <p className="carousel-subtitle">
          Explore how we craft innovative, high-performing digital solutions.
        </p>

        <div className="carousel-container">
          {services.map((service, index) => {
            const position = (index - current + services.length) % services.length;
            let className = "carousel-card";

            if (position === 0) className += " active";
            else if (position === 1) className += " right";
            else if (position === services.length - 1) className += " left";
            else className += " hidden";

            return (
              <div key={index} className={className}>
                <img src={service.image} alt={service.title} />
                <div className="card-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.link} className="explore-btn">
                    Explore →
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
        <h2 id="simple">Let’s Work Together</h2>
        <p>
          Ready to start your project or have questions? We’re here to help bring
          your ideas to life.
        </p>
        <Link to="/Contact" className="work-btn-simple">
          Get in Touch →
        </Link>
      </section>
    </div>
  );
};

export default Services;
