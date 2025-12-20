import React from "react";
import "../styles/Team.css";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import member1 from "../assets/member1.jpg";
import member2 from "../assets/member2.jpg";
import member3 from "../assets/member3.jpg";
import member4 from "../assets/member4.jpg";
import member5 from "../assets/member5.jpg";
import member6 from "../assets/member6.jpg";
import logo from "../assets/logo1.png";
import { Link } from "react-router-dom";

const teamMembers = [
  { id: 1, name: "SHEHROZ ALI", role: "FOUNDER & CEO", img: member1 },
  { id: 2, name: "MUHAMMAD NOMAN", role: "PROJECT MANAGER", img: member2 },
  { id: 3, name: "ABDULLAH", role: "FULL STACK DEVELOPER", img: member3 },
  { id: 4, name: "MUQADAM ", role: "UI/UX DESIGNER", img: member4 },
  { id: 5, name: "SAIF AWAN", role: "GRAPHIC DESIGNER", img: member5 },
  { id: 6, name: "CHAUDARY ADIL", role: "DIGITAL MARKETING SPECIALIST", img: member6 },

];

const Team = () => {
  return (
    <>
      <section className="team-section">
          <div className="team-intro">
            <span className="team-label">OUR AVENGERS</span>
            <h2 className="team-heading">Meet Our Creative Minds</h2>
            <p className="team-description">
              Passionate innovators who blend design, development, and strategy to
              build digital experiences that truly make a mark.
            </p>
          </div>

        {/* Team Grid - 3 columns */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div className="team-card" key={member.id}>
              <div className="member-image-wrapper">
                <img
                  src={member.img}
                  alt={member.name}
                  className="member-image"
                />
                <div className="member-overlay">
                  <div className="member-socials">
                    <a href="#" className="social-icon">
                      <FaLinkedinIn />
                    </a>
                    <a href="#" className="social-icon">
                      <FaTwitter />
                    </a>
                      <a href="#" className="social-icon">
                      <FaInstagram />
                    </a>
                    <a href="#" className="social-icon">
                      <FaFacebookF />
                    </a>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="join-us-container">
          <Link to="/contact" className="join-us-button">
            <FiPlus className="join-icon" />
            <span>JOIN WITH US</span>
          </Link>
        </div>
      </section>

      <section className="scroll-section">
      <div className="scroll-track">
        <div className="scroll-content">
          <span>LA-DIGITAL-AGENCY</span>
          <img src={logo} alt="logo" className="scroll-logo" />
          <span>QUALITY PRODUCT</span>
          <img src={logo} alt="logo" className="scroll-logo" />
          <span>INNOVATIVE SOLUTION</span>
          <img src={logo} alt="logo" className="scroll-logo" />
          <span>QUALITY DESIGN</span>
          <img src={logo} alt="logo" className="scroll-logo" />
        </div>

        <div className="scroll-content">
          <span>LA-DIGITAL-AGENCY</span>
          <img src={logo} alt="logo" className="scroll-logo" />
          <span>QUALITY PRODUCT</span>
          <img src={logo} alt="logo" className="scroll-logo" />
          <span>INNOVATIVE SOLUTION</span>
          <img src={logo} alt="logo" className="scroll-logo" />
          <span>QUALITY DESIGN</span>
          <img src={logo} alt="logo" className="scroll-logo" />
        </div>
      </div>
    </section>
    </>
  );
};

export default Team;

