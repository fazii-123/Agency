import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "../styles/FeedbackSection.css";
import agencyImage from "../assets/agency.jpg";

const FeedbackSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Cristian M. Durant",
      title: "Founder",
      feedback:
        "Their tool has transformed the way we approach business analytics. Fast, reliable, and incredibly intuitive.",
      avatar: "https://via.placeholder.com/120",
    },
    {
      id: 2,
      name: "Nicolas K. Gillington",
      title: "UI Designer",
      feedback:
        "The interface design is clean and modern — I love how simple it is to collaborate with the team now.",
      avatar: "https://via.placeholder.com/120",
    },
    {
      id: 3,
      name: "Marco L. Caldwell",
      title: "Head of Marketing",
      feedback:
        "Since integrating their product, our marketing efficiency has increased dramatically. Highly recommend!",
      avatar: "https://via.placeholder.com/120",
    },
  ];

  const StarRating = ({ rating }) => (
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "star filled" : "star empty"}>
          ★
        </span>
      ))}
    </div>
  );

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="feedback-section" ref={ref}>
      <motion.div
        className="feedback-intro"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="feedback-label">USER FEEDBACK</p>
        <h1 className="feedback-heading">
          Voices that inspire our journey forward
        </h1>
        <p className="feedback-description">
          We’ve helped brands grow, innovate, and connect. Here’s what our
          clients say about partnering with us.
        </p>
        <motion.button
          className="get-quote-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GET A QUOTE
          <span className="quote-icon">→</span>
        </motion.button>
        <motion.div
          className="feedback-image-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img src={agencyImage} alt="Agency" className="feedback-agency-image" />
        </motion.div>
      </motion.div>

      <motion.div
        className="feedback-grid"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="feedback-card"
            variants={itemVariants}
          >
            <StarRating rating={5} />
            <p className="feedback-text">"{testimonial.feedback}"</p>
            <div className="feedback-person">
              <div>
                <p className="feedback-name">{testimonial.name}</p>
                <p className="feedback-role">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeedbackSection;
