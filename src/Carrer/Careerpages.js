import React, { useState } from "react";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";
import { motion } from "framer-motion";
import "aos/dist/aos.css";
import "./Careerpages.css";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

// Sample job data (only one job)
const JOBS = [
//   {
//     JobId: 1,
//     Title: "Frontend Developer",
//     JobType: "Full-time",
//     EmploymentMode: "Remote",
//     Experience: 2,
//     Status: "Active",
//     Location: "Remote",
//     SalaryRange: "$60,000 - $80,000",
//     ApplicationDeadline: "2023-12-31",
//     Description: "We are looking for a skilled Frontend Developer to join our team and help build amazing user experiences using React, JavaScript, and modern frontend tools.",
//     Requirement: "2+ years of experience with React, JavaScript, and modern frontend development tools. Strong understanding of responsive design principles.",
//     Skills: ["React", "JavaScript", "HTML", "CSS", "Redux", "TypeScript"]
//   }
];

// Replace with your actual Google Form URLs
const GOOGLE_FORM_URLS = {
  "Frontend Developer": "https://docs.google.com/forms/d/e/your-frontend-form-id/viewform",
  "General Application": "https://docs.google.com/forms/d/1XDOGcguUsvXJJsJIkh0pjmuc0lK3mvr8_t0g7jEldUQ/viewform?edit_requested=true"
};

const BENEFITS = [
  {
    title: "Competitive Salary",
    description: "We offer industry-competitive compensation packages",
    icon: "💰"
  },
  {
    title: "Flexible Work",
    description: "Remote, hybrid, and on-site options available",
    icon: "🏠"
  },
  {
    title: "Learning & Growth",
    description: "Training budgets and conference opportunities",
    icon: "📚"
  },
  {
    title: "Health Insurance",
    description: "Comprehensive medical, dental, and vision coverage",
    icon: "🏥"
  },
  {
    title: "Latest Equipment",
    description: "Top-of-the-line hardware and software tools",
    icon: "💻"
  },
  {
    title: "Team Events",
    description: "Regular team building activities and retreats",
    icon: "🎯"
  }
];

const HeroSection = () => (
  <section className="career-hero d-flex align-items-center">
    <Container>
      <Row className="justify-content-center text-center">
        <Col lg={8}>
          <motion.h1 
            className="fw-bold display-4 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Build Your Career at BTC
          </motion.h1>
          <motion.p 
            className="lead mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our team of innovators and help shape the future of technology. 
            We're always looking for talented individuals who are passionate about making an impact.
          </motion.p>
        </Col>
      </Row>
    </Container>
  </section>
);

const BenefitsSection = () => (
  <section className="career-benefits py-5">
    <Container>
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <h2 className="fw-bold mb-3">Why Work With Us</h2>
          <p className="text-muted">
            We believe in creating an environment where our team can thrive both personally and professionally
          </p>
        </Col>
      </Row>
      <Row className="g-4">
        {BENEFITS.map((benefit, index) => (
          <Col md={6} lg={4} key={index}>
            <motion.div 
              className="benefit-card text-center p-4 h-100 rounded-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ y: -8 }}
            >
              <div className="benefit-icon display-1 mb-3">{benefit.icon}</div>
              <h5 className="fw-bold mb-3">{benefit.title}</h5>
              <p className="text-muted mb-0">{benefit.description}</p>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

const JobCard = ({ job, onApply }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      className="job-card-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="job-card shadow-sm border-0 rounded-4 h-100">
        <Card.Body className="p-4 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <h5 className="fw-bold text-primary">{job.Title}</h5>
              <div className="d-flex flex-wrap gap-2 mb-2">
                <Badge bg="light" text="dark">
                  {job.JobType}
                </Badge>
                <Badge bg="light" text="dark">
                  {job.EmploymentMode}
                </Badge>
                <Badge bg="success">
                  {job.Experience}+ years
                </Badge>
              </div>
            </div>
            <Badge bg="outline-primary" className="status-badge">
              {job.Status}
            </Badge>
          </div>
          
          <div className="job-details mb-3">
            <div className="d-flex align-items-center mb-2">
              <span className="icon me-2">📍</span>
              <span>{job.Location}</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <span className="icon me-2">💰</span>
              <span>{job.SalaryRange}</span>
            </div>
            <div className="d-flex align-items-center mb-2">
              <span className="icon me-2">⏰</span>
              <span>Apply by: {formatDate(job.ApplicationDeadline)}</span>
            </div>
          </div>
          
          <p className="text-muted mb-3 flex-grow-1">{job.Description}</p>
          
          <div className="mb-3">
            <h6 className="fw-semibold">Requirements:</h6>
            <p className="text-muted small">{job.Requirement}</p>
          </div>
          
          <div className="mb-4">
            <h6 className="fw-semibold">Skills:</h6>
            <div className="d-flex flex-wrap gap-2">
              {job.Skills && job.Skills.map((skill, index) => (
                <Badge key={index} bg="light" text="dark" className="skill-badge">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="mt-auto">
            <Button 
              className="career-btn w-100"
              onClick={() => onApply(job)}
            >
              Apply Now
            </Button>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

const JobOpeningsSection = ({ jobs, loading, onApply }) => {
  if (loading) {
    return (
      <section className="job-openings py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <div className="py-5">
                <div className="spinner-border text-primary mb-3" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p>Loading job openings...</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section className="job-openings py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="fw-bold mb-3">Current Openings</h2>
            <p className="text-muted">
              Explore our available positions and find where you fit in our growing team
            </p>
          </Col>
        </Row>
        
        {jobs && jobs.length > 0 ? (
          <Row className="justify-content-center">
            {jobs.map((job) => (
              <Col md={8} lg={6} xl={5} key={job.JobId} className="mb-4">
                <JobCard job={job} onApply={onApply} />
              </Col>
            ))}
          </Row>
        ) : (
          <Row className="justify-content-center">
            <Col md={8} className="text-center">
              <motion.div 
                className="no-openings-card p-5 rounded-4 bg-white shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="icon-wrapper mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-briefcase text-muted" viewBox="0 0 16 16">
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.5 6a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0v3z"/>
                  </svg>
                </div>
                <h4 className="fw-bold mb-3">No Open Positions Currently</h4>
                <p className="text-muted mb-4">
                  We don't have any open positions at the moment, but we're always interested in meeting talented people. 
                  Please check back later or send us your resume for future opportunities.
                </p>
                <Button 
                  className="career-btn"
                  onClick={() => onApply({ Title: "General Application" })}
                >
                  Submit General Application
                </Button>
              </motion.div>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

const CultureSection = () => (
  <section className="culture-section py-5">
    <Container>
      <Row className="align-items-center">
        <Col lg={6} className="mb-4 mb-lg-0">
          <h2 className="fw-bold mb-4">Our Culture</h2>
          <p className="lead">
            At Burj Tech, we foster a culture of innovation, collaboration, and continuous learning. 
            We believe that great ideas can come from anywhere, and we empower every team member to 
            contribute to our shared success.
          </p>
          <p>
            Our values include transparency, accountability, and a commitment to excellence in everything we do. 
            We celebrate diversity and believe that different perspectives make us stronger as a team and as a company.
          </p>
          <div className="mt-4">
            <Link to="/about">
                <Button variant="outline-primary">Learn More About Us</Button>
            </Link>
          </div>
        </Col>
        <Col lg={6}>
          <div className="culture-image rounded-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaboration at Burj Tech" 
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

const Careerpages = () => {
  const [jobs] = useState(JOBS);
  const [loading] = useState(false);

  const handleApply = (job) => {
    // Get the Google Form URL for this job or use the general application
    const formUrl = GOOGLE_FORM_URLS[job.Title] || GOOGLE_FORM_URLS["General Application"];
    
    // Open the Google Form in a new tab
    window.open(formUrl, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Careers - Join Burj Tech Consultancy</title>
        <meta name="description" content="Explore career opportunities at Burj Tech Consultancy. Join our innovative team of innovators and shape the future of technology with competitive benefits and a collaborative culture." />
        <link rel="canonical" href="https://www.btcglobal.info/careers" />
      </Helmet>
      <motion.div
        className="career-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroSection />
        <BenefitsSection />
        <JobOpeningsSection jobs={jobs} loading={loading} onApply={handleApply} />
        <CultureSection />
      </motion.div>
    </>
  );
};

export default Careerpages;