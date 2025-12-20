import React, { useEffect, useRef } from "react";

import largeWork from "../assets/about4.jpg";
import work2 from "../assets/work2.jpg";
import work3 from "../assets/work3.jpg";
import about2 from "../assets/about4.jpg";
import "../styles/Home.css";
import HeroSection from "./Herosection";
import Expertise from "./Expertise";
import Contact1 from "./Contact1";
import FeedbackSection from "./FeedbackSection";
import PricingSection from "./PricingSection";
import Team from "./Team";
import { Link } from "react-router-dom";

const Home = () => {
  const textWrapperRef = useRef(null);
  const aboutInfoRef = useRef(null);
  const imageLeftRef = useRef(null);
  const imageRightRef = useRef(null);
  const worksHeaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    [
      textWrapperRef,
      aboutInfoRef,
      imageLeftRef,
      imageRightRef,
      worksHeaderRef,
    ].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleProjectClick = () => {
    console.log("Navigating to /project page...");
  };

  const handleMoreWorksClick = () => {
    console.log("Navigating to /works page...");
  };

  return (
    <div className="home">
      <HeroSection />

      <section className="about-info-section">
        <div className="about-info-row slide-from-left" ref={aboutInfoRef}>
          <div className="info-column">
            <h3 className="info-title">Our mission</h3>
            <p className="info-text">
              We build bold identities that speak your story — visually and
              verbally. From websites to packaging, we craft experiences that
              blend beauty and function seamlessly.
            </p>
          </div>
          <div className="info-column">
            <h3 className="info-title">Our vision</h3>
            <p className="info-text">
              We envision a world where brands connect emotionally through
              design. Every detail matters — from layout to motion, every pixel
              tells your story.
            </p>
          </div>
          <div className="info-column">
            <h3 className="info-title">Get rewards</h3>
            <ul className="reward-list">
              <li>
                <span className="reward-name">Awwwards</span> –{" "}
                <span className="reward-desc">Design Agency of the Year</span>
              </li>
              <li>
                <span className="reward-name">Dribbble</span> –{" "}
                <span className="reward-desc">Top #01 Designer</span>
              </li>
              <li>
                <span className="reward-name">Google Inc.</span> –{" "}
                <span className="reward-desc">Website of the Day</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="selected-works-section">
        <div
          className="works-header-wrapper slide-from-left"
          ref={worksHeaderRef}
        >
          <h2 className="works-title">Selected</h2>
          <p className="works-subtitle">creative works</p>
        </div>

        <div className="works-row single-center">
          <SelectedWorkCard
            src={largeWork}
            title="Avenue Studio Creative Direction"
            tags={["BRANDING", "PRODUCT", "UX"]}
          />
        </div>

        <div className="works-row two-columns">
          <SelectedWorkCard
            src={work2}
            title="Nova Agency Product Design"
            tags={["DESIGN", "STRATEGY", "UI/UX"]}
          />
          <SelectedWorkCard
            src={work3}
            title="Luna Brand Identity Concept"
            tags={["IDENTITY", "BRANDING", "CREATIVE"]}
          />
        </div>

        <div className="works-row single-center">
          <SelectedWorkCard
            src={about2}
            title="Galaxy Brand Visual Identity"
            tags={["VISUAL", "CREATIVE", "BRANDING"]}
          />
        </div>

        <div className="more-works-container">
          <Link
            to="/contact"
            className="more-works-btn"
            onClick={handleMoreWorksClick}
          >
            <span className="plus-icon">+</span> MORE WORKS
          </Link>
        </div>
      </section>
      <Expertise />
      <Contact1 />
      <FeedbackSection />
      <PricingSection />
      {/* <Team /> */}
    </div>
  );
};

const ImageCard = ({ src, alt, handleProjectClick }) => (
  <div className="image-wrapper">
    <img src={src} alt={alt} />
    <div className="hover-overlay">
      <Link
        to="/project"
        className="project-button"
        onClick={handleProjectClick}
      >
        + PROJECT
      </Link>
    </div>
  </div>
);

const SelectedWorkCard = ({ src, title, tags, handleProjectClick }) => (
  <div className="selected-work-card">
    <img src={src} alt={title} className="work-image" />

    <div className="work-details-overlay">
      <div className="work-details-content">
        <h4 className="work-title">{title}</h4>
        <div className="work-tags">
          {tags.map((tag) => (
            <span key={tag} className="work-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Link
        to="/project"
        className="work-arrow-button"
        onClick={handleProjectClick}
      >
        <span className="arrow-icon">&rarr;</span>
      </Link>
    </div>
  </div>
);

export default Home;
