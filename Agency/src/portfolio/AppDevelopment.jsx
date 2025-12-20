import React from "react";
import "../styles/AppDevelopment.css";
import { Link } from "react-router-dom";
import web1 from "../assets/web/web1.jpg";
import iosImg from "../assets/app/ios.jpg";
import androidImg from "../assets/app/android.jpg";
import flutterImg from "../assets/app/flutter.jpg";
import uiuxImg from "../assets/app/uiux.jpg";
import testingImg from "../assets/app/testing.jpg";
import maintenanceImg from "../assets/app/maintenance.jpg";
import Header from "../components/Header";

const AppDevelopment = () => {
  const services = [
    {
      title: "iOS App Development",
      description:
        "Crafting high-performance, feature-rich iOS applications using Swift and SwiftUI for iPhone, iPad, and Apple Watch.",
      image: iosImg,
    },
    {
      title: "Android App Development",
      description:
        "Building secure and scalable Android apps with clean architecture, optimized for performance and user engagement.",
      image: androidImg,
    },
    {
      title: "Cross-Platform Apps (Flutter & React Native)",
      description:
        "Delivering seamless experiences across iOS and Android with cost-effective, single-codebase mobile app solutions.",
      image: flutterImg,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive interfaces with human-centered design principles to ensure flawless user experiences.",
      image: uiuxImg,
    },
    {
      title: "App Testing & SQA",
      description:
        "Ensuring stability, security, and top performance through rigorous manual and automated testing processes.",
      image: testingImg,
    },
    {
      title: "App Maintenance & Support",
      description:
        "Providing continuous app optimization, updates, and monitoring to keep your app running smoothly 24/7.",
      image: maintenanceImg,
    },
  ];

  return (
    <>
    <Header />
      <section
        className="app-hero"
        style={{
          backgroundImage: `url(${web1})`,
        }}
      >
        <div className="app-overlay">
          <h1>App Development</h1>
          <p>
            Transforming ideas into powerful, user-centric mobile applications that drive engagement and innovation.
          </p>
          <Link to="/contact" className="app-hero-btn">
            Collaborate With Us →
          </Link>
        </div>
      </section>

      <section className="app-section">
        <h2>Our Expertise</h2>
        <p className="section-subtitle">
          From concept to deployment, we build mobile apps that elevate your brand and enhance user experience.
        </p>

        <div className="app-grid">
          {services.map((service, index) => (
            <div className="app-card" key={index}>
              <div className="app-img-container">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="app-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/contact" className="app-btn">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="app-cta">
        <h2>Ready to Build Your Dream App?</h2>
        <p>
          Let’s bring your vision to life with innovative mobile solutions that make an impact.
        </p>
        <Link to="/contact" className="app-cta-btn">
          Let’s Work Together →
        </Link>
      </section>
    </>
  );
};

export default AppDevelopment;
