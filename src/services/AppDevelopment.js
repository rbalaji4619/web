import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import "aos/dist/aos.css";
import "../styles/AppDevelopment.css";
import appDevHero from '../assets/app.png';

// App Development Process
const developmentProcess = [
  { 
    id: 1, 
    title: "Discovery & Strategy", 
    desc: "We analyze your business goals, target audience, and technical requirements to create a comprehensive development strategy.",
    icon: "🔍"
  },
  { 
    id: 2, 
    title: "UI/UX Design", 
    desc: "Our designers create intuitive, beautiful interfaces that provide exceptional user experiences across all devices.",
    icon: "🎨"
  },
  { 
    id: 3, 
    title: "Development", 
    desc: "Our developers use cutting-edge technologies to build robust, scalable applications with clean, maintainable code.",
    icon: "💻"
  },
  { 
    id: 4, 
    title: "Testing & QA", 
    desc: "We rigorously test your application across multiple devices and scenarios to ensure flawless performance.",
    icon: "🧪"
  },
  { 
    id: 5, 
    title: "Deployment", 
    desc: "We handle the entire deployment process, including app store submissions for iOS and Android applications.",
    icon: "🚀"
  },
  { 
    id: 6, 
    title: "Maintenance", 
    desc: "We provide ongoing support, updates, and maintenance to keep your application running smoothly.",
    icon: "🔧"
  }
];

// Development Technologies
const technologies = [
  { 
    category: "Mobile Development", 
    techs: [
      { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
      { name: "iOS (Swift)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
      { name: "Android (Kotlin)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" }
    ] 
  },
  { 
    category: "Backend & Database", 
    techs: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ] 
  }
];

// App Types
const appTypes = [
  {
    title: "Native iOS Apps",
    desc: "High-performance applications built specifically for Apple's ecosystem using Swift and Objective-C.",
    icon: "📱"
  },
  {
    title: "Native Android Apps",
    desc: "Custom Android applications developed with Kotlin or Java for seamless integration with Google services.",
    icon: "🤖"
  },
  {
    title: "Cross-Platform Apps",
    desc: "Cost-effective solutions that work on both iOS and Android with a single codebase using React Native or Flutter.",
    icon: "🔄"
  },
  {
    title: "Progressive Web Apps",
    desc: "Web applications that deliver app-like experiences with offline functionality and device integration.",
    icon: "🌐"
  }
];

// Technical Capabilities
const capabilities = [
  {
    title: "Scalable Architecture",
    desc: "We build applications that grow with your business using microservices and cloud-native approaches.",
    icon: "🏗️"
  },
  {
    title: "API Development",
    desc: "RESTful and GraphQL APIs that enable seamless integration with other systems and services.",
    icon: "🔌"
  },
  {
    title: "Cloud Integration",
    desc: "Deployment and integration with AWS, Google Cloud, Azure, and other cloud platforms.",
    icon: "☁️"
  },
  {
    title: "DevOps & CI/CD",
    desc: "Automated testing, continuous integration, and deployment pipelines for rapid iteration.",
    icon: "⚙️"
  }
];

const AppDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>App Development Services - Burj Tech Consultancy</title>
        <meta name="description" content="Build high-performance mobile and web apps with our expert app development services. Native iOS/Android, cross-platform React Native/Flutter, scalable architecture, and full lifecycle support." />
        <link rel="canonical" href="https://www.btcglobal.info/services/app-development" />
      </Helmet>
      <motion.div
        className="appdev-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section - Matching UI/UX page style */}
        <section className="appdev-hero d-flex align-items-center">
          <Container>
            <Row className="align-items-center">
              <Col md={6} data-aos="fade-right">
                <Badge bg="light" text="dark" className="mb-3 px-3 py-2 rounded-pill">
                  Mobile & Web Applications
                </Badge>
                <h1 className="fw-bold display-4">App Development</h1>
                <p className="lead mt-3">
                  We build high-performance, scalable applications that transform 
                  your ideas into digital solutions users love.
                </p>
                <div className="mt-4">
                  <Link to="/#services">
                    <Button size="lg" className="appdev-btn me-3 my-3">⬅ Back to Services</Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline-light" className="ms-2">
                      Start a Project
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col md={6} data-aos="fade-left">
                <img
                  src={appDevHero}
                  alt="App Development"
                  className="img-fluid hero-image"
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* App Types Section */}
        <section className="appdev-types py-5">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="text-center fw-bold mb-3">Application Types We Build</h2>
                <p className="text-muted text-center">
                  From native mobile apps to progressive web applications, we create solutions 
                  tailored to your business needs and target audience.
                </p>
              </Col>
            </Row>
            
            <Row className="g-4">
              {appTypes.map((type, index) => (
                <Col md={6} lg={3} key={index}>
                  <motion.div 
                    className="type-card text-center p-4 h-100 rounded-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    whileHover={{ y: -8 }}
                  >
                    <div className="type-icon display-1 mb-3">{type.icon}</div>
                    <h5 className="fw-bold mb-3">{type.title}</h5>
                    <p className="text-muted mb-0">{type.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Development Process Timeline - Matching UI/UX page style */}
        <section className="appdev-approach py-5 bg-light">
          <Container>
            <h2 className="text-center fw-bold mb-5">Our Development Process</h2>
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

        {/* Technical Capabilities Section */}
        <section className="appdev-capabilities py-5">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="text-center fw-bold mb-2">Technical Capabilities</h2>
                <p className="text-muted text-center">
                  Our expertise spans the entire technology stack, ensuring robust and scalable solutions
                </p>
              </Col>
            </Row>
            
            <Row className="g-4">
              {capabilities.map((capability, index) => (
                <Col md={6} lg={3} key={index}>
                  <motion.div 
                    className="capability-card text-center p-4 h-100 rounded-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    whileHover={{ y: -8 }}
                  >
                    <div className="capability-icon display-1 mb-3">{capability.icon}</div>
                    <h5 className="fw-bold mb-3">{capability.title}</h5>
                    <p className="text-muted mb-0">{capability.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Tools Scroller - Matching UI/UX page style */}
        <section className="appdev-tools py-5 bg-light text-center">
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
                    <img src={tool.logo} alt={tool.name} className="appdev-tool-logo" />
                    <p className="mt-2 fw-medium">{tool.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* CTA - Matching UI/UX page style */}
        <section className="appdev-cta text-center text-light">
          <Container>
            <h2 data-aos="fade-up">Ready to build something amazing?</h2>
            <p data-aos="fade-up" data-aos-delay="200">
              Let's work together to create applications that delight your users and drive business growth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="webdev-btn" data-aos="zoom-in" data-aos-delay="400">
                Start Your Project
              </Button>
            </Link>
          </Container>
        </section>
      </motion.div>
    </>
  );
};

export default AppDevelopment;