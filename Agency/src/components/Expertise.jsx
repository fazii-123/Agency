import React, { useState } from "react";
import "../styles/Expertise.css";
import carImage from "../assets/carImage.jpg";
import { Link } from "react-router-dom";

const expertiseData = [
  {
    id: 3,
    title: "Low-Code Development",
    tags: ["STRATEGY", "BRANDING", "UX"],
    description:
      "Accelerate business transformation with low-code solutions built for speed, scalability, and flexibility — without compromising custom experience or quality.",
    image: carImage,
  },
  {
    id: 4,
    title: "E-Commerce Design",
    tags: ["UI", "PRODUCT", "BRANDING"],
    description:
      "Building elegant, conversion-focused online stores that blend performance with captivating design and brand storytelling.",
    image: carImage,
  },
  {
    id: 5,
    title: "UI/UX Design",
    tags: ["DESIGN", "RESEARCH", "STRATEGY"],
    description:
      "Crafting intuitive interfaces and seamless user experiences through research-driven design that balances aesthetics, usability, and brand consistency.",
    image: carImage,
  },
  {
    id: 6,
    title: "Digital Branding",
    tags: ["IDENTITY", "STRATEGY", "CONTENT"],
    description:
      "Building strong digital identities — from logos to storytelling — that connect emotionally with audiences and create long-lasting brand value.",
    image: carImage,
  },
];

const ExpertiseItem = ({ data, isOpen, onToggle }) => {
  return (
    <div className={`expertise-item ${isOpen ? "active" : ""}`}>
      <div className="expertise-header" onClick={() => onToggle(data.id)}>
        <div className="expertise-main-info">
          <h4 className="expertise-title">{data.title}</h4>
          <div className="expertise-tags">
            {data.tags.map((tag) => (
              <span key={tag} className="expertise-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <button className="see-more-button">
          <span className="plus-icon">{isOpen ? '−' : '+'}</span>
        </button>
      </div>

      <div className={`expertise-details-wrapper ${isOpen ? "open" : ""}`}>
        <div className="expertise-details-content">
          <div className="expertise-left">
            <p className="expertise-description">{data.description}</p>
            {isOpen && (
              <Link to="/contact" className="work-together-btn">
                Let’s Work Together
              </Link>
            )}
          </div>
          <div className="expertise-image-card">
            <img
              src={data.image}
              alt={data.title}
              className="expertise-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Expertise = () => {
  const [openItemId, setOpenItemId] = useState(null);
  const handleToggle = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className="expertise-section">
      <div className="expertise-intro">
        <span className="expertise-label">OUR EXPERTISE</span>
        <h2 className="expertise-heading">
          From strategy to design to execution — we craft digital products that
          grow brands and delight users.
        </h2>
      </div>

      <div className="expertise-list">
        {expertiseData.map((item) => (
          <ExpertiseItem
            key={item.id}
            data={item}
            isOpen={item.id === openItemId}
            onToggle={handleToggle}
          />
        ))}
      </div>

      <div className="talk-section">
        <Link to="/contact" className="talk-btn">
          + LET’S TALK
        </Link>
      </div>
    </section>
  );
};

export default Expertise;
