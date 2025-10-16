import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import "aos/dist/aos.css";
import "../styles/UIUXDesign.css";
import uiux from '../assets/image-82-removebg-preview.png'

const steps = [
  { id: 1, title: "Research", desc: "Understanding your audience, competitors, and goals." },
  { id: 2, title: "Wireframes", desc: "Low-fidelity blueprints to map out the experience." },
  { id: 3, title: "Design", desc: "Crafting pixel-perfect UI that delights users." },
  { id: 4, title: "Prototype", desc: "Interactive demos to test and refine before launch." },
];

const tools = [
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Adobe XD", logo: "https://img.icons8.com/color/96/adobe-xd.png" },
  { name: "Sketch", logo: "https://www.ericstoltz.com/wp-content/uploads/2020/02/sketch-2-logo-png-transparent.png" },
  { name: "Photoshop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
  { name: "Illustrator", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
];

// Design Principles Data
const designPrinciples = [
  { 
    title: "User-Centered Design", 
    desc: "We prioritize user needs and behaviors in every design decision, ensuring intuitive and satisfying experiences.",
    icon: "👥"
  },
  { 
    title: "Consistency", 
    desc: "Maintaining visual and functional consistency across all screens and interactions for a seamless experience.",
    icon: "🔄"
  },
  { 
    title: "Accessibility", 
    desc: "Designing for all users, regardless of abilities, ensuring compliance with WCAG guidelines.",
    icon: "♿"
  },
  { 
    title: "Simplicity", 
    desc: "Reducing complexity and eliminating unnecessary elements to create clean, focused interfaces.",
    icon: "✨"
  }
];

const services = [
  {
    title: "Website UI/UX Design",
    desc: "Engaging, conversion-focused websites that delight users",
    icon: "💻"
  },
  {
    title: "Mobile App Design",
    desc: "Intuitive mobile experiences for iOS and Android",
    icon: "📱"
  },
  {
    title: "Design Systems",
    desc: "Scalable design systems for consistent brand experiences",
    icon: "🎨"
  },
  {
    title: "UX Audit & Consulting",
    desc: "Expert analysis and recommendations to improve existing products",
    icon: "📊"
  },
  {
    title: "Interaction Design",
    desc: "Meaningful animations and micro-interactions that enhance usability",
    icon: "✨"
  },
  {
    title: "User Research",
    desc: "In-depth user insights to inform design decisions",
    icon: "🔬"
  }
];

// FAQ Data
// const faqItems = [
//   {
//     question: "How long does a typical UI/UX project take?",
//     answer: "The timeline varies based on project complexity, but most projects range from 4-12 weeks. We'll provide a detailed timeline after our initial consultation."
//   },
//   {
//     question: "Do you conduct user testing?",
//     answer: "Yes, we incorporate user testing at various stages of the design process to validate our designs and gather valuable feedback for iteration."
//   },
//   {
//     question: "What deliverables will I receive?",
//     answer: "You'll receive wireframes, high-fidelity mockups, interactive prototypes, design specifications, and assets ready for development."
//   },
//   {
//     question: "Can you work with our development team?",
//     answer: "Absolutely! We collaborate closely with development teams to ensure smooth implementation of designs and maintain design integrity."
//   }
// ];

const UIUXDesign = () => {
  return (
    <>
      <Helmet>
        <title>UI/UX Design Services - Burj Tech Consultancy</title>
        <meta name="description" content="Create intuitive, user-centered UI/UX designs with our expert services. From research and wireframes to prototypes and design systems, using Figma, Adobe XD, and more for websites, apps, and beyond." />
        <link rel="canonical" href="https://www.btcglobal.info/services/ui/ux-design" />
      </Helmet>
      <motion.div
        className="uiux-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section - Split Layout */}
        <section className="uiux-hero d-flex align-items-center">
          <Container>
            <Row className="align-items-center">
              <Col md={6} data-aos="fade-right">
                <h1 className="fw-bold display-4">UI/UX Design</h1>
                <p className="lead mt-3">
                  We create experiences that are not only beautiful but also
                  intuitive and user-friendly.
                </p>
                <div className="mt-4">
                  <Link to="/#services">
                    <Button size="lg" className="uiux-btn me-2 my-2">⬅ Back to Services</Button>
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
                  src={uiux}
                  alt="UI/UX Design"
                  className="img-fluid"
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/* Approach Timeline */}
        <section className="uiux-approach py-5">
          <Container>
            <h2 className="text-center fw-bold mb-5">Our Design Approach</h2>
            <div className="timeline">
              {steps.map((step, index) => (
                <motion.div
                  className="timeline-step"
                  key={step.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <div className="step-circle">{step.id}</div>
                  <div className="step-content">
                    <h5>{step.title}</h5>
                    <p>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Design Principles Section */}
        <section className="uiux-principles py-5 bg-light">
          <Container>
            <h2 className="text-center fw-bold mb-5">Our Design Principles</h2>
            <Row>
              {designPrinciples.map((principle, index) => (
                <Col md={6} lg={3} key={index} className="mb-4">
                  <motion.div 
                    className="principle-card text-center p-4 h-100"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                    whileHover={{ y: -10 }}
                  >
                    <div className="principle-icon display-1 mb-3">{principle.icon}</div>
                    <h5 className="fw-bold">{principle.title}</h5>
                    <p>{principle.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* Tools Scroller */}
        <section className="uiux-tools py-5 text-center">
          <h2 className="fw-bold mb-4" data-aos="fade-up">Design Tools We Love</h2>
          <div className="tool-scroller d-flex justify-content-center gap-5 overflow-auto py-3">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                className="tool-logo-card text-center"
                whileHover={{ scale: 1.1 }}
                data-aos="zoom-in"
                data-aos-delay={i * 150}
              >
                <img src={tool.logo} alt={tool.name} className="uiux-tool-logo" />
                <p className="mt-2">{tool.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* <section className="uiux-faq py-5 bg-light">
          <Container>
            <h2 className="text-center fw-bold mb-5">Frequently Asked Questions</h2>
            <Row className="justify-content-center">
              <Col lg={8}>
                <Accordion flush>
                  {faqItems.map((item, index) => (
                    <motion.div
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <Accordion.Item eventKey={index.toString()}>
                        <Accordion.Header>
                          <strong>{item.question}</strong>
                        </Accordion.Header>
                        <Accordion.Body>{item.answer}</Accordion.Body>
                      </Accordion.Item>
                    </motion.div>
                  ))}
                </Accordion>
              </Col>
            </Row>
          </Container>
        </section> */}

        {/* <section className="uiux-services py-5">
          <Container>
            <h2 className="text-center fw-bold mb-5">Our UI/UX Services</h2>
            <Row>
              {services.map((service, index) => (
                <Col md={6} lg={4} key={index} className="mb-4">
                  <motion.div 
                    className="ser-card text-center p-4 h-100"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    whileHover={{ y: -5 }}
                  >
                    <div className="service-icon display-1 mb-3">{service.icon}</div>
                    <h5 className="fw-bold">{service.title}</h5>
                    <p className="text-muted">{service.desc}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section> */}

        {/* Services Section */}
        <section className="uiux-services py-5 position-relative">
          <div className="position-absolute top-0 start-0 w-100 h-100" style={{
            background: "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.05) 0%, transparent 50%)",
            pointerEvents: "none",
            zIndex: "0"
          }}></div>
          
          <Container className="position-relative" style={{zIndex: "2"}}>
            <Row className="justify-content-center mb-5">
              <Col lg={8} className="text-center">
                <motion.h2 
                  className="fw-bold mb-3 display-5 gradient-text"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Our UI/UX Services
                </motion.h2>
                <motion.p 
                  className="lead text-muted"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Comprehensive design solutions tailored to your business needs
                </motion.p>
              </Col>
            </Row>

            <Row className="g-4">
              {services.map((service, index) => (
                <Col md={6} lg={4} key={index}>
                  <motion.div 
                    className="ser-card h-100 p-4 rounded-4 position-relative overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    whileHover={{ y: -8 }}
                    style={{
                      background: "rgba(255, 255, 255, 0.7)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255, 255, 255, 0.5)",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.6)"
                    }}
                  >
                    {/* Background gradient effect */}
                    <div className="position-absolute top-0 end-0 w-100 h-100" style={{
                      background: "linear-gradient(135deg, rgba(79, 70, 229, 0.03) 0%, transparent 70%)",
                      zIndex: "0"
                    }}></div>
                    
                    <div className="position-relative" style={{zIndex: "2"}}>
                      {/* Icon with gradient background */}
                      <div 
                        className="service-icon-wrapper rounded-3 mb-4 d-flex align-items-center justify-content-center"
                        style={{
                          width: "70px",
                          height: "70px",
                          background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
                          boxShadow: "0 8px 20px rgba(79, 70, 229, 0.3)"
                        }}
                      >
                        <span className="display-4">{service.icon}</span>
                      </div>
                      
                      <h5 className="fw-bold mb-3" style={{color: "#4f46e5"}}>{service.title}</h5>
                      <p className="text-muted mb-0">{service.desc}</p>
                      
                      {/* Hover line effect */}
                      <div 
                        className="position-absolute bottom-0 start-0"
                        style={{
                          height: "3px",
                          width: "0%",
                          background: "linear-gradient(to right, #ff6b6b, #9333ea)",
                          transition: "width 0.4s ease"
                        }}
                      ></div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>

          </Container>
        </section>

        {/* CTA */}
        <section className="uiux-cta text-center text-light">
          <Container>
            <h2 data-aos="fade-up">Design that speaks for itself.</h2>
            <p data-aos="fade-up" data-aos-delay="200">
              Let's work together to create experiences that delight your users.
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

export default UIUXDesign;