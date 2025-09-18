import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/Hero.css"
import { useNavigate } from "react-router-dom";
import heroImage from '../assets/hero-bg.jpg'; // Assuming you have a hero image in assets

const Hero = () => {

  const navigate = useNavigate()
  return (
    <section
      id="hero"
      className="d-flex align-items-center hero-section"
      style={{ minHeight: "100vh", background: `url(${heroImage}) center/cover no-repeat` }}
    >
      <Container className="text-center text-white" data-aos="fade-up">
        <h1 className="display-3 fw-bold">Burj Tech Consultancy</h1>
        <p className="lead mt-3">
          Empowering businesses with technology-driven solutions for the future.
        </p>
        <Button variant="primary" onClick={() => navigate("/contact")} size="lg" className="mt-4">
          Get Started
        </Button>
      </Container>
    </section>
  );
};

export default Hero;
