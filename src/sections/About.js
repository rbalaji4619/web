import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/About.css"; // Import custom styles

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container data-aos="fade-up">
        <Row className="align-items-center">
          {/* Image Section */}
          <Col md={6} className="text-center">
            <img
              src="https://drrrhyhe9lfip.cloudfront.net/ScriptMedia/54/about_us_thumb01png-514.png"
              alt="About Us"
              className="about-img"
            />
          </Col>

          {/* Content Section */}
          <Col md={6}>
            <div className="about-content">
              <h2>About <span>Us</span></h2>
              <p>
                At <strong>Burj Tech Consultancy Pvt Ltd</strong>, we specialize in
                delivering innovative technology solutions that help businesses
                grow, transform, and stay ahead of the competition.
              </p>
              <p>
                With a passionate team and a client-first approach, we ensure
                that every solution we deliver aligns with your vision and
                business needs.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
