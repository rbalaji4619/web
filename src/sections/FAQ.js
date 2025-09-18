import React, { useState } from "react";
import { Container, Accordion, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import "../styles/FAQ.css";

const FAQ = () => {
  const [activeKey, setActiveKey] = useState(null);

  const faqData = [
    {
      question: "What services does Burj Tech Consultancy offer?",
      answer: "Burj Tech Consultancy provides a wide range of IT and technology services, including custom mobile application development, web development, advanced desktop application development, AI-driven ERP and CRM implementation, IoT solutions, and enterprise application development. We also specialize in UI/UX design, robust backend solutions, and SEO & digital marketing to help businesses grow and stay competitive. Our expertise extends across various industries such as healthcare, manufacturing, hospitality, finance, and more, delivering tailored solutions that align with your business goals."
    },
    {
      question: "What is the typical process for starting a project with Burj Tech Consultancy?",
      answer: "The process begins with a consultation to understand your business goals, requirements, and challenges. We then conduct a requirement analysis and define the project scope, creating wireframes, prototypes, and detailed documentation. After the UI/UX design is finalized, our development team follows Agile methodologies to build, test, and refine the solution in iterative sprints. Once the solution is thoroughly tested, we handle the launch across platforms and provide post-launch maintenance and support, ensuring your application or system performs optimally and evolves with your business needs."
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer: "Yes, Burj Tech Consultancy offers comprehensive post-launch support and maintenance to ensure your application or system runs smoothly. This includes performance optimization, regular updates, bug fixes, server maintenance, weekly backups, and integration of user feedback. Our goal is to provide reliable, ongoing support so your technology continues to meet business goals, adapt to evolving needs, and deliver a seamless experience for your users."
    },
    {
      question: "What technologies do you use in your development projects?",
      answer: "Burj Tech Consultancy leverages a wide range of modern technologies to deliver robust and innovative solutions. Our tech stack includes Angular, React.js, Next.js, Python, Node.js, Flutter, and more for web and mobile development. For enterprise applications, we integrate AI tools, ERP systems, and CRM platforms to provide comprehensive, scalable, and intelligent solutions tailored to your business needs."
    },
    {
      question: "What industries do you specialize in?",
      answer: "Burj Tech Consultancy specializes in delivering technology-driven solutions across a wide range of industries, including banking and finance, healthcare, manufacturing, hospitality, retail, and education. We tailor our services to meet the unique requirements of each sector, providing solutions such as digital banking platforms, AI-powered healthcare applications, smart manufacturing systems, hospitality management software, and enterprise applications. Our expertise ensures that businesses in these industries can enhance operational efficiency, improve customer experience, and achieve sustainable growth."
    },
    {
      question: "Are your solutions scalable for growing businesses?",
      answer: "Yes, Burj Tech Consultancy designs all solutions with scalability and future growth in mind. Whether it's a web application, mobile app, or enterprise system, our architecture ensures that your solution can handle increasing users, larger data volumes, and evolving business requirements. We use cloud infrastructure, modular development practices, and advanced technologies to make sure your systems remain robust, flexible, and capable of adapting as your business grows."
    },
    {
      question: "How do you ensure the security of our data and applications?",
      answer: "Security is our top priority. We implement industry-standard security practices including encryption, secure authentication, regular security audits, and compliance with data protection regulations. Our team follows secure coding practices and conducts thorough vulnerability testing to protect your applications and data from potential threats."
    },
    {
      question: "What is your approach to project management and communication?",
      answer: "We follow Agile methodologies with regular sprints, progress updates, and transparent communication. Our project management approach includes weekly status meetings, detailed progress reports, and collaborative tools to keep you informed throughout the development process. We believe in maintaining open lines of communication to ensure your vision is accurately translated into the final product."
    }
  ];

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <section className="faq-section py-5">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <motion.h2 
              className="fw-bold mb-3 display-5 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              className="lead text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Find answers to common questions about our services and processes
            </motion.p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Accordion activeKey={activeKey} className="faq-accordion">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Accordion.Item eventKey={index.toString()} className="faq-item">
                    <Accordion.Header 
                      onClick={() => toggleAccordion(index.toString())}
                      className="faq-question"
                    >
                      <span className="faq-icon me-3">❓</span>
                      {faq.question}
                    </Accordion.Header>
                    <Accordion.Body className="faq-answer">
                      {faq.answer}
                    </Accordion.Body>
                  </Accordion.Item>
                </motion.div>
              ))}
            </Accordion>
          </Col>
        </Row>

        {/* <Row className="justify-content-center mt-5">
          <Col lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="mb-4">Still have questions? We're here to help!</p>
              <button className="btn btn-primary btn-lg">
                Contact Us
              </button>
            </motion.div>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
};

export default FAQ;