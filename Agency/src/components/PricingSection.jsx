import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/PricingSection.css";
import { FaUsers, FaCheckCircle, FaHandshake, FaUserTie } from "react-icons/fa";

// Custom hook for animated counting
const useCountUp = (end, duration = 2000, decimals = 0, inView) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!inView || hasAnimated) return;
    
    setHasAnimated(true);
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        setCount(parseFloat((end * progress).toFixed(decimals)));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, decimals, inView, hasAnimated]);

  return count;
};

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Animated counters
  const satisfiedClients = useCountUp(3460, 2500, 0, isInView);
  const successfulOrders = useCountUp(2870, 2500, 0, isInView);
  const brandsJoined = useCountUp(180, 2000, 0, isInView);
  const marketingExperts = useCountUp(85, 2000, 0, isInView);

  return (
    <section className="pricing-section" ref={ref}>
      <div className="pricing-container">
        <motion.div 
          className="achievement-content"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="achievement-label">ACHIEVEMENT</span>
          <h1 className="achievement-heading">
            Some Number Of Our Achievement
          </h1>
          <p className="achievement-description">
            We take pride in delivering outstanding results for our clients. Our 
            commitment to excellence is reflected in the milestones we've reached 
            and the success stories we've created.
          </p>
          <Link to="/contact">
            <motion.button 
              className="get-started-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
        </motion.div>

        <motion.div 
          className="achievement-grid"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="achievement-card card-peach"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="card-icon">
              <FaUsers />
            </div>
            <h2 className="card-number">{Math.floor(satisfiedClients).toLocaleString()}<span className="plus-sign">+</span></h2>
            <p className="card-label">Satisfied Clients</p>
          </motion.div>

          <motion.div 
            className="achievement-card card-purple"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="card-icon">
              <FaCheckCircle />
            </div>
            <h2 className="card-number">{Math.floor(successfulOrders).toLocaleString()}<span className="plus-sign">+</span></h2>
            <p className="card-label">Successful Order</p>
          </motion.div>

          <motion.div 
            className="achievement-card card-purple"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="card-icon">
              <FaHandshake />
            </div>
            <h2 className="card-number">{Math.floor(brandsJoined)}<span className="plus-sign">+</span></h2>
            <p className="card-label">Brands Joined</p>
          </motion.div>

          <motion.div 
            className="achievement-card card-peach"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="card-icon">
              <FaUserTie />
            </div>
            <h2 className="card-number">{Math.floor(marketingExperts)}<span className="plus-sign">+</span></h2>
            <p className="card-label">Marketing Experts</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
