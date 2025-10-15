import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import "aos/dist/aos.css";
import "../styles/GameDevelopment.css";
import gameDevHero from '../assets/game.png';

// Game Development Process
const developmentProcess = [
  { 
    id: 1, 
    title: "Concept & Design", 
    desc: "We transform your game idea into a detailed design document with mechanics, story, and visual direction.",
    icon: "🎮"
  },
  { 
    id: 2, 
    title: "Prototyping", 
    desc: "Rapid prototyping to test core gameplay mechanics and validate the fun factor before full production.",
    icon: "🔄"
  },
  { 
    id: 3, 
    title: "Art Production", 
    desc: "Creating stunning visuals, characters, environments, and animations that bring your game world to life.",
    icon: "🎨"
  },
  { 
    id: 4, 
    title: "Development", 
    desc: "Building the game with clean, optimized code using industry-standard engines and frameworks.",
    icon: "💻"
  },
  { 
    id: 5, 
    title: "Testing & QA", 
    desc: "Comprehensive testing across devices to ensure smooth performance and bug-free gameplay.",
    icon: "🧪"
  },
  { 
    id: 6, 
    title: "Launch & Support", 
    desc: "Deployment to platforms and ongoing support with updates, content expansions, and community management.",
    icon: "🚀"
  }
];

// Development Technologies
const technologies = [
  { 
    category: "Game Engines", 
    techs: [
      { name: "Unity", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" },
      { name: "Unreal Engine", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg" },
      { name: "Godot", logo: "https://godotengine.org/assets/press/icon_color.png" },
      { name: "Cocos2d", logo: "https://styles.redditmedia.com/t5_2surg/styles/communityIcon_dhzqc3gzhuo31.png" }
    ] 
  },
  { 
    category: "Programming", 
    techs: [
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" }
    ] 
  }
];

// Game Types
const gameTypes = [
  {
    title: "Mobile Games",
    desc: "Engaging games designed for iOS and Android with touch-friendly controls and monetization strategies.",
    icon: "📱",
    features: ["Free-to-play models", "In-app purchases", "Ad integration", "Social features"]
  },
  {
    title: "PC & Console Games",
    desc: "Immersive experiences for PC, PlayStation, Xbox, and Nintendo platforms with high-end graphics.",
    icon: "🎯",
    features: ["High-fidelity graphics", "Controller support", "Achievement systems", "Online multiplayer"]
  },
  {
    title: "AR/VR Games",
    desc: "Cutting-edge augmented and virtual reality experiences that blend digital and physical worlds.",
    icon: "👓",
    features: ["Immersive environments", "Motion controls", "3D spatial audio", "Room-scale experiences"]
  },
  {
    title: "Web Games",
    desc: "Browser-based games that run instantly without downloads, perfect for casual and social gaming.",
    icon: "🌐",
    features: ["Instant play", "Cross-platform", "Social integration", "Progressive Web App support"]
  }
];

// Game Services
const gameServices = [
  {
    title: "Game Design",
    desc: "Crafting compelling gameplay mechanics, narratives, and balanced progression systems.",
    icon: "✏️"
  },
  {
    title: "2D/3D Art",
    desc: "Creating stunning visuals from concept art to final assets, animations, and VFX.",
    icon: "🖌️"
  },
  {
    title: "Multiplayer Networking",
    desc: "Building seamless online experiences with matchmaking, leaderboards, and real-time sync.",
    icon: "🌐"
  },
  {
    title: "Porting & Optimization",
    desc: "Adapting games for different platforms with performance optimization for various hardware.",
    icon: "⚡"
  }
];

const GameDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Game Development Services - Burj Tech Consultancy</title>
        <meta name="description" content="Develop immersive games for mobile, PC, console, AR/VR, and web using Unity, Unreal Engine, and more. Full lifecycle services from concept, prototyping, art production to launch and support." />
        <link rel="canonical" href="https://www.btcglobal.info/services/game-development" />
      </Helmet>
      <motion.div
        className="gamedev-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <section className="gamedev-hero d-flex align-items-center">
          <Container>
            <Row className="align-items-center">
              <Col md={6} data-aos="fade-right">
                <Badge bg="light" text="dark" className="mb-3 px-3 py-2 rounded-pill">
                  Interactive Entertainment
                </Badge>
                <h1 className="fw-bold display-4">Game Development</h1>
                <p className="lead mt-3">
                  We create immersive, engaging games that captivate players and 
                  deliver unforgettable experiences across all platforms.
                </p>
                <div className="mt-4">
                  <Link to="/#services">
                    <Button size="lg" className="gamedev-btn me-3">⬅ Back to Services</Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline-light" className="ms-2">
                      Start Your Project
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col md={6} data-aos="fade-left">
                <img
                  src={gameDevHero}
                  alt="Game Development"
                  className="img-fluid hero-image"
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Game Types Section */}
        <section className="gamedev-types py-5">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="text-center fw-bold mb-5">Game Platforms We Develop For</h2>
                <p className="text-muted text-center">
                  From mobile to VR, we create captivating gaming experiences tailored 
                  to your target audience and platform requirements.
                </p>
              </Col>
            </Row>
            
            <Row className="g-4">
              {gameTypes.map((type, index) => (
                <Col md={6} lg={3} key={index}>
                  <motion.div 
                    className="type-card text-center p-4 h-100 rounded-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    whileHover={{ y: -8 }}
                  >
                    <div className="type-icon display-1 mb-3">{type.icon}</div>
                    <h5 className="fw-bold mb-3">{type.title}</h5>
                    <p className="text-muted mb-3">{type.desc}</p>
                    <ul className="list-unstyled text-start">
                      {type.features.map((feature, fIndex) => (
                        <li key={fIndex} className="mb-2 small">
                          <span className="text-primary me-2">✓</span> {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Development Process Timeline */}
        <section className="gamedev-approach py-5 bg-light">
          <Container>
            <h2 className="text-center fw-bold mb-5">Our Game Development Process</h2>
            <div className="timeline">
              {developmentProcess.map((step, index) => (
                <motion.div
                  className="timeline-step"
                  key={step.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="step-circle">{step.id}</div>
                  <div className="step-content">
                    <div className="d-flex align-items-center mb-2">
                      <span className="me-2 display-6">{step.icon}</span>
                      <h5 className="mb-0">{step.title}</h5>
                    </div>
                    <p className="mb-0">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Game Services Section */}
        <section className="gamedev-services py-5">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="text-center fw-bold mb-5">Game Development Services</h2>
                <p className="text-muted text-center">
                  Comprehensive game development solutions from concept to launch and beyond
                </p>
              </Col>
            </Row>
            
            <Row className="g-4">
              {gameServices.map((service, index) => (
                <Col md={6} lg={3} key={index}>
                  <motion.div 
                    className="service-card text-center p-4 h-100 rounded-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    whileHover={{ y: -8 }}
                  >
                    <div className="service-icon display-1 mb-3">{service.icon}</div>
                    <h5 className="fw-bold mb-3">{service.title}</h5>
                    <p className="text-muted mb-0">{service.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Tools Scroller */}
        <section className="gamedev-tools py-5 bg-light text-center">
          <h2 className="fw-bold mb-4" data-aos="fade-up">Technologies We Use</h2>
          {technologies.map((category, index) => (
            <div key={index} className="mb-5">
              <h4 className="h5 fw-bold mb-4" data-aos="fade-up">{category.category}</h4>
              <div className="tool-scroller d-flex justify-content-center gap-5 overflow-auto py-3">
                {category.techs.map((tool, i) => (
                  <motion.div
                    key={i}
                    className="tool-logo-card text-center"
                    whileHover={{ scale: 1.1 }}
                    data-aos="zoom-in"
                    data-aos-delay={i * 150}
                  >
                    <img src={tool.logo} alt={tool.name} className="gamedev-tool-logo" />
                    <p className="mt-2 fw-medium">{tool.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="gamedev-cta text-center text-light">
          <Container>
            <h2 data-aos="fade-up">Ready to create an amazing game?</h2>
            <p data-aos="fade-up" data-aos-delay="200">
              Let's work together to build immersive gaming experiences that players will love.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gamedev-btn" data-aos="zoom-in" data-aos-delay="400">
                Start Your Game Project
              </Button>
            </Link>
          </Container>
        </section>
      </motion.div>
    </>
  );
};

export default GameDevelopment;