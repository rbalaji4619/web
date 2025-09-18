import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center fw-bold mb-5" data-aos="fade-up">
          Contact Us
        </h2>
        <Row>
          <Col md={6} data-aos="fade-right">
            <h5>Get In Touch</h5>
            <p className="text-muted">
              Email: contact@burjtech.com <br />
              Phone: +91 98765 43210 <br />
              Address: 123 Business Park, Chennai, India
            </p>
          </Col>
          <Col md={6} data-aos="fade-left">
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={4} placeholder="Your Message" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
