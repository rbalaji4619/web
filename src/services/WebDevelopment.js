import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import "aos/dist/aos.css";
import "../styles/WebDevelopment.css";
import webDevHero from '../assets/web.png';
import aws from '../assets/aws.png'

// Web Development Process
const developmentProcess = [
  { 
    id: 1, 
    title: "Discovery & Planning", 
    desc: "We analyze your business goals, target audience, and technical requirements to create a comprehensive development strategy.",
    icon: "🔍"
  },
  { 
    id: 2, 
    title: "UI/UX Design", 
    desc: "Creating intuitive, beautiful interfaces that provide exceptional user experiences across all devices.",
    icon: "🎨"
  },
  { 
    id: 3, 
    title: "Frontend Development", 
    desc: "Building responsive, interactive user interfaces with modern frameworks and best practices.",
    icon: "💻"
  },
  { 
    id: 4, 
    title: "Backend Development", 
    desc: "Developing robust server-side architecture, APIs, and database solutions for your web application.",
    icon: "⚙️"
  },
  { 
    id: 5, 
    title: "Testing & QA", 
    desc: "Rigorous testing across browsers and devices to ensure flawless performance and user experience.",
    icon: "🧪"
  },
  { 
    id: 6, 
    title: "Deployment & Maintenance", 
    desc: "Deploying to production environments and providing ongoing support, updates, and maintenance.",
    icon: "🚀"
  }
];

// Development Technologies
const technologies = [
  { 
    category: "Frontend Technologies", 
    techs: [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { name: "Angular", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" }
    ] 
  },
  { 
    category: "Backend Technologies", 
    techs: [
      { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" }
    ] 
  },
  { 
    category: "Database & Cloud", 
    techs: [
      { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "AWS", logo: aws },
      { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" }
    ] 
  }
];

// Web Services
const webServices = [
  {
    title: "Custom Web Applications",
    desc: "Tailor-made web solutions built from scratch to meet your specific business requirements.",
    icon: "🌐",
    features: ["Responsive Design", "User Authentication", "API Integration", "Admin Dashboard"]
  },
  {
    title: "E-commerce Solutions",
    desc: "Complete online stores with shopping carts, payment gateways, and inventory management.",
    icon: "🛒",
    features: ["Product Management", "Payment Processing", "Order Tracking", "Inventory System"]
  },
  {
    title: "Progressive Web Apps",
    desc: "Web applications that work offline and feel like native mobile apps.",
    icon: "📱",
    features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Fast Loading"]
  },
  {
    title: "API Development",
    desc: "RESTful and GraphQL APIs that enable seamless integration with other systems.",
    icon: "🔌",
    features: ["REST/GraphQL APIs", "Third-party Integrations", "Webhook Support", "Documentation"]
  }
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Performance Optimization",
    desc: "We build lightning-fast websites with optimized code and efficient architecture.",
    icon: "⚡"
  },
  {
    title: "SEO-Friendly",
    desc: "Websites designed to rank well in search engines from day one.",
    icon: "🔍"
  },
  {
    title: "Security First",
    desc: "Implementation of best security practices to protect your data and users.",
    icon: "🔒"
  },
  {
    title: "Scalable Architecture",
    desc: "Websites that grow with your business and handle increasing traffic.",
    icon: "📈"
  }
];

const WebDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Services - Burj Tech Consultancy</title>
        <meta name="description" content="Custom web applications, e-commerce solutions, PWAs, and API development using React, Vue, Node.js, Django, MongoDB, AWS, and more. Full lifecycle from planning to deployment and maintenance." />
        <link rel="canonical" href="https://www.btcglobal.info/services/web-development" />
      </Helmet>
      <motion.div
        className="webdev-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <section className="webdev-hero d-flex align-items-center">
          <Container>
            <Row className="align-items-center">
              <Col md={6} data-aos="fade-right">
                <Badge bg="light" text="dark" className="mb-3 px-3 py-2 rounded-pill">
                  Modern Web Solutions
                </Badge>
                <h1 className="fw-bold display-4">Web Development</h1>
                <p className="lead mt-3">
                  We build responsive, modern, and scalable websites that drive 
                  results and deliver exceptional user experiences.
                </p>
                <div className="mt-4">
                  <Link to="/#services">
                    <Button size="lg" className="webdev-btn me-3">⬅ Back to Services</Button>
                  </Link>
                  <Link to="/buynow">
                    <Button size="lg" variant="outline-light" className="ms-2">
                      Start a Project
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col md={6} data-aos="fade-left">
                <img
                  src={webDevHero}
                  alt="Web Development"
                  className="img-fluid hero-image"
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Web Services Section */}
        <section className="webdev-services py-5">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="text-center fw-bold mb-5">Web Development Services</h2>
                <p className="text-muted text-center">
                  Comprehensive web solutions tailored to your business needs and goals
                </p>
              </Col>
            </Row>
            
            <Row className="g-4">
              {webServices.map((service, index) => (
                <Col md={6} lg={3} key={index}>
                  <motion.div 
                    className="service-card text-center p-4 h-100 rounded-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    whileHover={{ y: -8 }}
                  >
                    <div className="service-icon display-1 mb-3">{service.icon}</div>
                    <h5 className="fw-bold mb-3">{service.title}</h5>
                    <p className="text-muted mb-3">{service.desc}</p>
                    <ul className="list-unstyled text-start">
                      {service.features.map((feature, fIndex) => (
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
        <section className="webdev-approach py-5 bg-light">
          <Container>
            <h2 className="text-center fw-bold mb-5">Our Web Development Process</h2>
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

        {/* Why Choose Us Section */}
        <section className="webdev-why py-5">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <h2 className="text-center fw-bold mb-5">Why Choose Our Web Development Services?</h2>
                <p className="text-muted text-center">
                  We deliver exceptional value through our expertise and commitment to quality
                </p>
              </Col>
            </Row>
            
            <Row className="g-4">
              {whyChooseUs.map((reason, index) => (
                <Col md={6} lg={3} key={index}>
                  <motion.div 
                    className="why-card text-center p-4 h-100 rounded-4"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    whileHover={{ y: -8 }}
                  >
                    <div className="why-icon display-1 mb-3">{reason.icon}</div>
                    <h5 className="fw-bold mb-3">{reason.title}</h5>
                    <p className="text-muted mb-0">{reason.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Tools Scroller */}
        <section className="webdev-tools py-5 bg-light text-center">
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
                    <img src={tool.logo} alt={tool.name} className="webdev-tool-logo" />
                    <p className="mt-2 fw-medium">{tool.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="webdev-cta text-center text-light">
          <Container>
            <h2 data-aos="fade-up">Ready to build your next web project?</h2>
            <p data-aos="fade-up" data-aos-delay="200">
              Let's work together to create a website that drives your business forward.
            </p>
            <Link to="/buynow">
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

export default WebDevelopment;