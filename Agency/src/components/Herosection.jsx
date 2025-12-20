import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HeroSection.css";
import heroBg from "../assets/herobgr.jpg";
import Header from "./Header";

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="hero-section"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <Header />
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>
          An independent digital <br /> design studio based in Lahore.
        </h1>

        <Link to="/project" className="hero-btn">
          <span className="plus">+</span> OUR WORKS
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
