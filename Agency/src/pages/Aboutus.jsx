import React from "react";
import "../styles/AboutUs.css";
import web1 from "../assets/web/web1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";

const AboutUs = () => {
  const coreValues = [
    {
      title: "Innovation",
      desc: "We embrace change and use creative thinking to deliver future-ready solutions.",
    },
    {
      title: "Integrity",
      desc: "We value transparency and honesty, ensuring every partnership is built on trust.",
    },
    {
      title: "Excellence",
      desc: "We set high standards and go above and beyond to exceed expectations.",
    },
    {
      title: "Collaboration",
      desc: "We believe teamwork and shared vision are the foundation of success.",
    },
    {
      title: "Customer Focus",
      desc: "Our clients are at the heart of everything we do — their goals become ours.",
    },
    {
      title: "Sustainability",
      desc: "We strive to create long-term, meaningful solutions that make a positive difference.",
    },
  ];

  return (
    <div className="aboutus">
      <section
        className="about-hero"
        style={{
          backgroundImage: `url(${web1})`,
        }}
      >
        <div className="overlay1">
          <h1>About Our Agency</h1>
          <p>
            We are a creative digital agency helping brands innovate, grow, and
            succeed in the modern world through design, technology, and
            strategy.
          </p>
        </div>
      </section>

      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          Founded with passion and purpose, our agency brings together
          designers, developers, and strategists who share one mission — to
          craft digital experiences that inspire, engage, and drive results.
        </p>

        <div className="image-grid">
          <div className="image-card">
            <img src={about2} alt="Our Team" />
            <button className="glassy-btn">+ TEAM</button>
          </div>
          <div className="image-card">
            <img src={about3} alt="Our Mission" />
            <button className="glassy-btn">+ MISSION</button>
          </div>
        </div>
      </section>

      <section className="core-values">
        <h2>Why Choose US?</h2>
        <div>
          <p className="choose">
            Choosing the right partner for your brand’s growth is everything —
            here’s why businesses trust us:
          </p>
        </div>
        <div className="values-grid">
          <div className="values-left">
            {coreValues.slice(0, 3).map((value, index) => (
              <div className="value-card" key={index}>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>

          <div className="values-center">
            <p>
              We don’t just build websites — we build <b>digital identities</b>{" "}
              that inspire confidence and spark engagement. Our approach
              combines storytelling, design thinking, and data-driven strategy
              to deliver experiences that resonate deeply with audiences. From
              branding to web development, digital marketing to automation, we
              ensure that every element aligns perfectly with your business
              goals. Our creative process is rooted in <b>collaboration</b> and{" "}
              <b>clarity</b>. We listen, plan, design, and execute with
              precision — keeping our clients at the center of every decision.
              With a dedicated team of designers, developers, strategists, and
              marketers, we turn challenges into opportunities and ideas into
              digital success stories.At the heart of our agency lies a belief
              in <b>continuous growth</b> and <b>innovation</b>. We embrace
              emerging technologies and evolving trends to stay ahead of the
              curve. Every project we take on is an opportunity to push
              boundaries, elevate brands, and redefine possibilities.
            </p>
          </div>
          <div className="values-right">
            {coreValues.slice(3, 6).map((value, index) => (
              <div className="value-card" key={index}>
                <h3>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
