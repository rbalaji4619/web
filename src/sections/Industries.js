import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import '../styles/Industries.css'
import bank from '../assets/banking.png'
import transport from '../assets/transport.png'
import health from '../assets/health.png'
import manufacturing from '../assets/manufacturing.png'
import telecom from '../assets/tele.png'
import banklogo from '../assets/banklogo.png'
import translogo from '../assets/transportation.png'
import healthlogo from '../assets/healthlogo.png'
import manulogo from '../assets/manulogo.png'
import telecomlogo from '../assets/telecomlogo.png'

const industriesData = [
  {
    name: "Banking and Finance",
    description: `Our Banking and Finance solutions streamline financial operations, enhance customer experience, and ensure regulatory compliance. We provide advanced tools for digital banking, payment processing, risk management, loan management, and analytics, leveraging AI and secure technologies to optimize efficiency and drive growth in the financial sector.`,
    image: bank,
    logo: banklogo,
    points: [
      "Digital Banking Solutions",
      "Payment Management",
      "Risk & Compliance Management",
      "Loan & Asset Management"
    ],
  },
  {
    name: "Transportation",
    description: `Our solutions for the transportation sector include logistics management, fleet tracking, and route optimization, utilizing advanced algorithms to improve reliability, safety, and cost-efficiency.`,
    image: transport,
    logo:translogo,
    points: [
      "Logistics",
      "Fuel Management",
      "Fleet Management",
      "Trip Planning",
      "Route Optimization",
      "Expenses Management",
    ],
  },
  {
    name: "Health Care",
    description: `We provide telemedicine platforms, patient management systems, and AI-driven diagnostic tools, enhancing patient care while ensuring data privacy and compliance with regulatory standards.`,
    image: health,
    logo: healthlogo,
    points: [
      "Dicom Viewer",
      "Doctor Consultation",
      "Patient Management",
      "Doctor Appointment",
      "AI-driven Diagnostic",
      "Fees Management",
    ],
  },
  {
    name: "Manufacturing",
    description: `Our focus is on delivering integrated solutions that encompass production, machining, assembly, delivery, stock, purchase, and order management, streamlining the entire manufacturing lifecycle.`,
    image: manufacturing ,
    logo: manulogo,
    points: [
      "Design & Development",
      "Production Management",
      "Purchase Management",
      "Assembly Management",
      "Asset Management",
      "Quality Control",
    ],
  },
  {
    name: "Telecom & Media",
    description: `Our Telecom and Media solutions enhance communication, broadcasting, and digital content delivery. We offer advanced platforms for network management, streaming services, customer engagement, and analytics to optimize performance and reach.`,
    image: telecom,
    logo: telecomlogo,
    points: [
      "Network Management",
      "Content Delivery",
      "Streaming & Broadcasting",
      "Customer Engagement",
      "Analytics & Reporting"
    ],
  }
];


const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-5 bg-light" id="industries">
      <Container>
        <h2 className="text-center fw-bold mb-5" data-aos="fade-up">
          Industries We Serve
        </h2>
        <Row>
          {/* Left Tabs */}
          <Col md={4}>
            {industriesData.map((industry, index) => (
              <Button
                key={index}
                variant={activeIndex === index ? "primary" : "light"}
                className={`d-flex align-items-center industry-btn mb-3 w-100 justify-content-start py-3 px-4 shadow-sm rounded-pill text-start ${
                  activeIndex === index ? "text-white" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="me-3">
                  <img
                    src={industry.logo}
                    alt={industry.name}
                    className="rounded"
                  />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">{industry.name}</h6>
                  <small>All kind of industry</small>
                </div>
              </Button>
            ))}
          </Col>

          {/* Right Content */}
          <Col md={8}>
            <Row className="align-items-center">
              <Col md={6} className="mb-3" data-aos="fade-up">
                <img
                  src={industriesData[activeIndex].image}
                  alt={industriesData[activeIndex].name}
                  className="img-fluid"
                  style={{height:'350px' , width:'100%'}}
                />
              </Col>
              <Col md={6} data-aos="fade-up">
                <h4 className="fw-bold">{industriesData[activeIndex].name}</h4>
                <p>{industriesData[activeIndex].description}</p>
                <Row className="g-2">
                  {industriesData[activeIndex].points.map((point, idx) => (
                    <Col sm={6} key={idx}>
                      <div className="p-2 bg-white shadow-sm rounded">
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        {point}
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Industries;
