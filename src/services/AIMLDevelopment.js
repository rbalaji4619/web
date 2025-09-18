import React from "react";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import "../styles/AIMLDevelopment.css";
import aiMlHero from '../assets/aiml.png';

// AI/ML Development Process (Matching your screenshot)
const developmentProcess = [
  { 
    id: 1, 
    title: "Discovery", 
    desc: "At this initial stage, our AI experts thoroughly understand your business problems, existing data and processes, and current challenges you face to identify areas of value creation with AI and define use cases along with business opportunities to guide AI development.",
    icon: "🔍"
  },
  { 
    id: 2, 
    title: "Design", 
    desc: "At this stage, our expert AI developers identify the tech stack to be used and feature set to be developed, including a working prototype for better visualization and further testing to ensure vision alignment.",
    icon: "🎨"
  },
  { 
    id: 3, 
    title: "Proof of Concept", 
    desc: "As a leading artificial intelligence software development company, we prioritize AI model viability through robust testing and efficiently train and tune these advanced algorithms for reliable performance.",
    icon: "🧪"
  },
  { 
    id: 4, 
    title: "Development", 
    desc: "We build and implement the complete AI solution, integrating it with your existing systems and ensuring scalability for future needs.",
    icon: "💻"
  },
  { 
    id: 5, 
    title: "Deployment", 
    desc: "We deploy the AI solution into your production environment with proper monitoring and maintenance protocols in place.",
    icon: "🚀"
  },
  { 
    id: 6, 
    title: "Optimization", 
    desc: "Continuous improvement of your AI models with new data and feedback to ensure peak performance and relevance.",
    icon: "📊"
  }
];

// Development Technologies
const technologies = [
  { 
    category: "AI Frameworks", 
    techs: [
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Keras", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-plain.svg" },
      { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" }
    ] 
  },
  { 
    category: "Programming Languages", 
    techs: [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
      { name: "Julia", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" }
    ] 
  }
];

// AI/ML Services
const aiMlServices = [
  {
    title: "Predictive Analytics",
    desc: "Leverage historical data to predict future outcomes and trends for informed decision-making.",
    icon: "📈",
    features: ["Forecasting Models", "Trend Analysis", "Pattern Recognition", "Risk Assessment"]
  },
  {
    title: "Computer Vision",
    desc: "Enable machines to interpret and understand visual information from images and videos.",
    icon: "👁️",
    features: ["Image Recognition", "Object Detection", "Facial Recognition", "Video Analysis"]
  },
  {
    title: "Natural Language Processing",
    desc: "Process and analyze human language to extract insights and enable human-computer interaction.",
    icon: "💬",
    features: ["Sentiment Analysis", "Chatbots", "Text Classification", "Language Translation"]
  },
  {
    title: "Recommendation Systems",
    desc: "Personalized content and product recommendations to enhance user experience and engagement.",
    icon: "🎯",
    features: ["Collaborative Filtering", "Content-Based Filtering", "Hybrid Systems", "Real-time Recommendations"]
  }
];

// Why Choose Us
const whyChooseUs = [
  {
    title: "Data Expertise",
    desc: "Deep expertise in data preprocessing, feature engineering, and data pipeline development.",
    icon: "📊"
  },
  {
    title: "Model Accuracy",
    desc: "Focus on building highly accurate models with rigorous validation and testing methodologies.",
    icon: "🎯"
  },
  {
    title: "Ethical AI",
    desc: "Commitment to developing fair, transparent, and unbiased AI solutions.",
    icon: "⚖️"
  },
  {
    title: "Scalable Solutions",
    desc: "Building AI systems that can scale with your business growth and evolving needs.",
    icon: "🚀"
  }
];

const AIMLDevelopment = () => {
  return (
    <motion.div
      className="aiml-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <section className="aiml-hero d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-right">
              <Badge bg="light" text="dark" className="mb-3 px-3 py-2 rounded-pill">
                Intelligent Solutions
              </Badge>
              <h1 className="fw-bold display-4">AI & ML Development</h1>
              <p className="lead mt-3">
                We build intelligent systems that learn from data, automate processes, 
                and unlock new opportunities for your business.
              </p>
              <div className="mt-4">
                <Link to="/#services">
                  <Button size="lg" className="aiml-btn me-3">⬅ Back to Services</Button>
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
                src={aiMlHero}
                alt="AI & ML Development"
                className="img-fluid hero-image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* AI/ML Services Section */}
      <section className="aiml-services py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="text-center fw-bold mb-5">AI & ML Services</h2>
              <p className="text-muted text-center">
                Comprehensive artificial intelligence and machine learning solutions tailored to your business needs
              </p>
            </Col>
          </Row>
          
          <Row className="g-4">
            {aiMlServices.map((service, index) => (
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

      {/* Development Process Timeline - Matching your screenshot */}
      <section className="aiml-approach py-5 bg-light">
        <Container>
          <h2 className="text-center fw-bold mb-5">Our AI Development Process</h2>
          <div className="process-timeline">
            {developmentProcess.map((step, index) => (
              <motion.div
                className="process-step"
                key={step.id}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="step-header">
                  <div className="step-number">{step.id}</div>
                  <div className="step-title-content">
                    <div className="step-icon">{step.icon}</div>
                    <h4 className="step-title">{step.title}</h4>
                  </div>
                </div>
                <div className="step-description">
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="aiml-why py-5">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={8} className="text-center">
              <h2 className="text-center fw-bold mb-5">Why Choose Our AI/ML Services?</h2>
              <p className="text-muted text-center">
                We deliver cutting-edge AI solutions with a focus on practical business value
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
      <section className="aiml-tools py-5 bg-light text-center">
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
                  <img src={tool.logo} alt={tool.name} className="aiml-tool-logo" />
                  <p className="mt-2 fw-medium">{tool.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="aiml-cta text-center text-light">
        <Container>
          <h2 data-aos="fade-up">Ready to harness the power of AI?</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            Let's work together to build intelligent solutions that transform your business.
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

export default AIMLDevelopment;