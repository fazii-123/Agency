import React from "react";
import "../styles/UIUXPortfolio.css";
import { Link } from "react-router-dom";
import web1 from "../assets/web/web1.jpg";
import researchImg from "../assets/uiux/research.jpg";
import wireframeImg from "../assets/uiux/wireframe.jpg";
import prototypeImg from "../assets/uiux/prototype.jpg";
import testingImg from "../assets/uiux/testing.jpg";
import designSystemImg from "../assets/uiux/designsystem.jpg";
import accessibilityImg from "../assets/uiux/accessibility.jpg";

const UIUXPortfolio = () => {
  const services = [
    {
      title: "User Research & Analysis",
      description:
        "We deeply understand user behaviors, motivations, and pain points to create human-centered digital experiences.",
      image: researchImg,
    },
    {
      title: "Wireframing & UX Strategy",
      description:
        "Translate ideas into intuitive wireframes and user flows that ensure seamless interaction and usability.",
      image: wireframeImg,
    },
    {
      title: "Prototyping & Interaction Design",
      description:
        "Build high-fidelity prototypes that bring designs to life, allowing stakeholders to visualize the final experience.",
      image: prototypeImg,
    },
    {
      title: "Usability Testing",
      description:
        "Conduct detailed testing sessions to identify UX challenges and refine interfaces for optimal performance.",
      image: testingImg,
    },
    {
      title: "Design Systems & UI Libraries",
      description:
        "Create scalable design systems and component libraries to ensure consistency and development efficiency.",
      image: designSystemImg,
    },
    {
      title: "Accessibility & Inclusive Design",
      description:
        "Design interfaces that are accessible to everyone, ensuring a smooth experience for users of all abilities.",
      image: accessibilityImg,
    },
  ];

  return (
    <>
      <section
        className="uiux-hero"
        style={{
          backgroundImage: `url(${web1})`,
        }}
      >
        <div className="uiux-overlay">
          <h1>UI/UX Design </h1>
          <p>
            Crafting meaningful user experiences through empathy, innovation, and
            design excellence. Every pixel has a purpose.
          </p>
          <Link to="/contact" className="uiux-hero-btn">
            Collaborate With Us →
          </Link>
        </div>
      </section>

      <section className="uiux-section">
        <h2>Our Expertise</h2>
        <p className="section-subtitle">
          We blend creativity with usability to design interfaces that engage,
          inspire, and convert.
        </p>

        <div className="uiux-grid">
          {services.map((service, index) => (
            <div className="uiux-card" key={index}>
              <div className="uiux-img-container">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="uiux-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/contact" className="uiux-btn">
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="uiux-cta">
        <h2>Let’s Design Something Exceptional</h2>
        <p>
          Partner with us to create designs that connect emotionally and function
          beautifully across every platform.
        </p>
        <Link to="/contact" className="uiux-cta-btn">
          Let’s Work Together →
        </Link>
      </section>
    </>
  );
};

export default UIUXPortfolio;
