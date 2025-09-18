import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../styles/CloudServices.css";
import cloudHero from '../assets/cloud.png';

// Cloud Services Process
const developmentProcess = [
  { 
    id: 1, 
    title: "Assessment & Strategy", 
    desc: "We analyze your current infrastructure, identify migration opportunities, and develop a comprehensive cloud strategy tailored to your business objectives.",
    icon: "🔍"
  },
  { 
    id: 2, 
    title: "Planning & Design", 
    desc: "Our architects design scalable, secure cloud infrastructure solutions that optimize performance and cost-efficiency for your specific use cases.",
    icon: "📐"
  },
  { 
    id: 3, 
    title: "Migration & Implementation", 
    desc: "We execute seamless migration of your applications and data to the cloud with minimal downtime and comprehensive testing throughout the process.",
    icon: "🚚"
  },
  { 
    id: 4, 
    title: "Optimization", 
    desc: "Continuous monitoring and optimization of your cloud resources to ensure peak performance, security, and cost-effectiveness over time.",
    icon: "⚡"
  },
  { 
    id: 5, 
    title: "Management & Support", 
    desc: "Ongoing management, monitoring, and support services to maintain your cloud environment's health, security, and performance.",
    icon: "🔧"
  },
  { 
    id: 6, 
    title: "Innovation", 
    desc: "Leveraging advanced cloud-native technologies and services to drive innovation and create competitive advantages for your business.",
    icon: "💡"
  }
];

// Cloud Technologies
const technologies = [
  { 
    category: "Cloud Platforms", 
    techs: [
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
      { name: "DigitalOcean", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg" }
    ] 
  },
  { 
    category: "Infrastructure Tools", 
    techs: [
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
      { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" }
    ] 
  }
];

// Cloud Services
const cloudServices = [
  {
    title: "Cloud Migration",
    desc: "Seamless transition of your applications and infrastructure to the cloud with minimal disruption.",
    icon: "☁️",
    features: ["Workload Assessment", "Migration Planning", "Data Transfer", "Post-Migration Validation"]
  },
  {
    title: "Cloud Infrastructure",
    desc: "Design and implementation of scalable, secure, and reliable cloud infrastructure solutions.",
    icon: "🖥️",
    features: ["Network Architecture", "Compute Resources", "Storage Solutions", "Security Configuration"]
  },
  {
    title: "DevOps & Automation",
    desc: "Implementation of CI/CD pipelines and infrastructure automation for faster, more reliable deployments.",
    icon: "🔄",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Testing", "Deployment Automation"]
  },
  {
    title: "Cloud Security",
    desc: "Comprehensive security services to protect your cloud environment from threats and vulnerabilities.",
    icon: "🔒",
    features: ["Security Assessment", "Compliance Management", "Threat Detection", "Identity & Access Management"]
  }
];

// Benefits
const benefits = [
  {
    title: "Cost Efficiency",
    desc: "Reduce IT costs with pay-as-you-go pricing and optimized resource utilization.",
    icon: "💰"
  },
  {
    title: "Scalability",
    desc: "Easily scale resources up or down based on demand to handle traffic spikes and growth.",
    icon: "📈"
  },
  {
    title: "Reliability",
    desc: "Achieve high availability and business continuity with built-in redundancy and failover.",
    icon: "🛡️"
  },
  {
    title: "Innovation",
    desc: "Access cutting-edge technologies and services to drive innovation and competitive advantage.",
    icon: "🚀"
  }
];

const CloudServices = () => {
  return (
    <motion.div
      className="cloud-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <section className="cloud-hero d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-right">
              <Badge bg="light" text="dark" className="mb-3 px-3 py-2 rounded-pill">
                Cloud Solutions & Infrastructure
              </Badge>
              <h1 className="fw-bold display-4">Cloud Services</h1>
              <p className="lead mt-3">
                We design, migrate, and manage cloud infrastructure that scales with your business, 
                enhances agility, and reduces costs.
              </p>
              <div className="mt-4">
                <Link to="/#services">
                  <Button size="lg" className="cloud-btn me-3">⬅ Back to Services</Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline-light" className="ms-2">
                    Get Consultation
                  </Button>
                </Link>
              </div>
            </Col>
            <Col md={6} data-aos="fade-left">
              <img
                src={cloudHero}
                alt="Cloud Services"
                className="img-fluid hero-image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Cloud Services Section */}
      <section className="cloud-services py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="text-center fw-bold mb-5">Our Cloud Services</h2>
              <p className="text-muted text-center">
                End-to-end cloud solutions tailored to your business needs and objectives
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {cloudServices.map((service, index) => (
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

      {/* Benefits Section */}
      <section className="cloud-benefits py-5 bg-light">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="text-center fw-bold mb-5">Benefits of Cloud Adoption</h2>
              <p className="text-muted text-center">
                Transform your business with the power of cloud computing
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {benefits.map((benefit, index) => (
              <Col md={6} lg={3} key={index}>
                <motion.div 
                  className="benefit-card text-center p-4 h-100 rounded-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  whileHover={{ y: -8 }}
                >
                  <div className="benefit-icon display-1 mb-3">{benefit.icon}</div>
                  <h5 className="fw-bold mb-3">{benefit.title}</h5>
                  <p className="text-muted mb-0">{benefit.desc}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Development Process Timeline */}
      <section className="cloud-approach py-5">
        <Container>
          <h2 className="text-center fw-bold mb-5">Our Cloud Adoption Process</h2>
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

      {/* Tools Scroller */}
      <section className="cloud-tools py-5 bg-light text-center">
        <h2 className="fw-bold mb-4" data-aos="fade-up">Cloud Technologies We Work With</h2>
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
                  <img src={tool.logo} alt={tool.name} className="cloud-tool-logo" />
                  <p className="mt-2 fw-medium">{tool.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="cloud-cta text-center text-light">
        <Container>
          <h2 data-aos="fade-up">Ready to transform your business with cloud?</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Let's work together to build a cloud strategy that drives growth and innovation.
          </p>
          <Link to="/contact">
            <Button size="lg" className="webdev-btn" data-aos="zoom-in" data-aos-delay="400">
              Start Your Project
            </Button>
          </Link>
        </Container>
      </section>
    </motion.div>
  );
};

export default CloudServices;