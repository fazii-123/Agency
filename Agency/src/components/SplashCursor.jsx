import React, { useEffect, useRef } from "react";
import "../styles/SplashCursor.css";

const SplashCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const particles = [];

    const mouse = { x: 0, y: 0, isMoving: false };

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(2, 6);
        this.color = `hsl(${Math.random() * 360}, 100%, 60%)`;
        this.velocityX = random(-2, 2);
        this.velocityY = random(-2, 2);
        this.life = 1;
      }

      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.size *= 0.95;
        this.life -= 0.02;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 15;
        ctx.fill();
      }
    }

    function animate() {
      
      ctx.fillStyle = "rgba(0, 0, 0, 0)"; 
      ctx.clearRect(0, 0, w, h);

      if (mouse.isMoving) {
        for (let i = 0; i < 5; i++) {
          particles.push(new Particle(mouse.x, mouse.y));
        }
      }

      particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.life <= 0 || p.size <= 0.1) {
          particles.splice(i, 1);
        }
      });

      requestAnimationFrame(animate);
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.isMoving = true;
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="splash-cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "100%",
        height: "100%",
        zIndex: 9999,
      }}
    ></canvas>
  );
};

export default SplashCursor;
