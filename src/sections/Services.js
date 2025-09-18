import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCode, FaPaintBrush, FaMobileAlt, FaGamepad,FaBrain, FaCloud } from "react-icons/fa";
import "../styles/Services.css";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [showCards, setShowCards] = useState(false);

  const services = [
    { icon: <FaCode />, title: "Web Development", desc: "Modern, scalable websites with latest tech." },
    { icon: <FaPaintBrush />, title: "UI/UX Design", desc: "Beautiful and user-friendly designs." },
    { icon: <FaMobileAlt />, title: "App Development", desc: "Cross-platform mobile applications." },
    { icon: <FaGamepad />, title: "Game Development", desc: "Scalable multiplayer backends and real-time synchronization."},
    { icon: <FaBrain />, title: "AI/ML Services", desc: "Intelligent solutions powered by AI and machine learning." },
    { icon: <FaCloud />, title:"Cloud Services", desc: "Reliable cloud solutions for your business." }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const scrolled = Math.min(Math.max(windowHeight - rect.top, 0), windowHeight);
      const progress = scrolled / windowHeight;

      setProgress(progress);

      if (progress >= 1) {
        setShowCards(true);
      } else {
        setShowCards(false);
      }
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Navigate = useNavigate()

  return (
    <section ref={sectionRef} id="services" className="services-section">
      <div className="services-sticky">
        <Container>
          <h2
            className={`services-heading-card ${progress >= 1 ? "grown" : ""}`}
            style={{ opacity: progress, transform: `scale(${0.8 + progress * 0.2})` }}
          >
            Our Services
          </h2>

            <Row className={`services-cards ${showCards ? "show" : ""}`}>
              {services.map((service, index) => (
                <Col lg={4} md={6} sm={12} className="mb-4" key={index}>
                  <div className="service-tile text-dark" style={{ transitionDelay: `${index * 0.2}s`, cursor: showCards ? "pointer" : "default" }} onClick={() => Navigate(`/services/${service.title.toLowerCase().replace(/ /g, "-")}`)}>
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </div>
                </Col>
              ))}
            </Row>
        </Container>
      </div>
    </section>
  );
};

export default Services;
