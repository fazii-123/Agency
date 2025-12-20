import React from "react";
import "../styles/UserExperience.css";
import { Link } from "react-router-dom";
import web1 from "../assets/web/web1.jpg";
import uxResearch from "../assets/userexperience/ux-research.jpg";
import wireframe from "../assets/userexperience/wireframe.jpg";
import usability from "../assets/userexperience/usability.jpg";
import interaction from "../assets/userexperience/interaction.jpg";
import prototype from "../assets/userexperience/prototype.jpg";
import accessibility from "../assets/userexperience/accessibility.jpg";

const UserExperience = () => {
  const uxProjects = [
    {
      title: "UX Research & Strategy",
      description:
        "Conducted in-depth user interviews, surveys, and usability tests to identify key pain points and design data-driven solutions.",
      image: uxResearch,
    },
    {
      title: "Wireframing & Information Architecture",
      description:
        "Developed clear user flows and low-fidelity wireframes that optimize navigation and enhance task completion efficiency.",
      image: wireframe,
    },
    {
      title: "Usability Testing",
      description:
        "Ran moderated usability sessions and A/B tests to validate design hypotheses and improve product satisfaction.",
      image: usability,
    },
    {
      title: "Interaction Design",
      description:
        "Designed intuitive interactions and micro-animations that enhance user engagement while maintaining accessibility.",
      image: interaction,
    },
    {
      title: "High-Fidelity Prototyping",
      description:
        "Created interactive Figma prototypes to visualize end-to-end experiences and gather early stakeholder feedback.",
      image: prototype,
    },
    {
      title: "Accessibility Design",
      description:
        "Implemented inclusive design principles ensuring usability for all users, including those with disabilities.",
      image: accessibility,
    },
  ];

  return (
    <>
      <section
        className="ux-hero"
        style={{
          backgroundImage: `url(${web1})`,
        }}
      >
        <div className="ux-overlay">
          <h1>User Experience </h1>
          <p>
            Designing meaningful, intuitive, and accessible digital experiences
            that prioritize users at every stage of interaction.
          </p>
          <Link to="/contact" className="ux-hero-btn">
            Collaborate With Us →
          </Link>
        </div>
      </section>

      <section className="ux-section">
        <h2>Our Expertise</h2>
        <p className="ux-subtitle">
          From research to interaction design, every pixel and process is driven
          by empathy and purpose.
        </p>

        <div className="ux-grid">
          {uxProjects.map((project, index) => (
            <div className="ux-card" key={index}>
              <div className="ux-img-container">
                <img src={project.image} alt={project.title} />
                <div className="ux-hover">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link to="/contact" className="ux-btn">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ux-cta">
        <h2>Let’s Create Better Experiences Together</h2>
        <p>
          Partner with us to design user journeys that are intuitive, engaging,
          and built for impact.
        </p>
        <Link to="/contact" className="ux-cta-btn">
           Let’s Work Together →
        </Link>
      </section>
    </>
  );
};

export default UserExperience;
