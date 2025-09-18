import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Form, Card, Badge,Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import axios from "axios";
import "aos/dist/aos.css";
import "../styles/CareerPage.css";

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
      <Card className="job-cards shadow-sm border-0 rounded-4" style={{height:'550px'}}>
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-start mb-3" >
            <div>
              <h5 className="fw-bold text-primary">{job.Title}</h5>
              <Badge bg="light" text="dark" className="me-2">
                {job.JobType}
              </Badge>
              <Badge bg="light" text="dark" className="me-2">
                {job.EmploymentMode}
              </Badge>
              <Badge bg="success" className="me-2">
                {job.Experience}+ years
              </Badge>
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
          
          <p className="text-muted mb-3">{job.Description}</p>
          
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
          
          <div className="d-grid">
            <Button 
              className="career-btn"
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
          <Row className="g-4">
            {jobs.map((job) => (
              <Col md={6} lg={4} key={job.JobId}>
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
            <Button variant="outline-primary">Learn More About Us</Button>
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

const ApplicationModal = ({ show, job, onHide, onSubmit }) => {
  const [formData, setFormData] = useState({
    ApplicantName: "",
    Email: "",
    PhoneNumber: "",
    LinkedIn: "",
    Skills: "",
    GitHub: "",
    Portfolio: "",
    Experience: "",
    Location: "",
    WillingToRelocate: false,
    CoverLetter: "",
    Resume: ""
  });
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      Resume: e.target.files[0]
    }));
  };

  const uploadResume = async (file) => {
    // In a real application, you would upload the file to your server/CDN
    // and return the URL. For now, we'll simulate this with a mock URL.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`https://yourcdn.com/resumes/${Date.now()}_${file.name}`);
      }, 1000);
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   setUploading(true);

  //   try {
  //     // Upload resume first
  //     let resumeUrl = "";
  //     if (formData.Resume) {
  //       resumeUrl = await uploadResume(formData.Resume);
  //     }

  //     // Prepare application data for API
  //     const applicationData = {
  //       JobId: job.JobId || 0, // Use 0 for general applications
  //       ApplicantName: formData.ApplicantName,
  //       Email: formData.Email,
  //       PhoneNumber: formData.PhoneNumber,
  //       LinkedIn: formData.LinkedIn,
  //       // Skills: formData.Skills.split(',').map(skill => skill.trim()).filter(skill => skill),
  //       // Skills: formData.Skills.split(',').map(skill => skill.trim()).filter(skill => skill),
  //         Skills: JSON.stringify(
  //   formData.Skills.split(',')
  //     .map(skill => skill.trim())
  //     .filter(skill => skill)
  // ),
  //       GitHub: formData.GitHub,
  //       Portfolio: formData.Portfolio,
  //       Experience: parseInt(formData.Experience) || 0,
  //       Resume: resumeUrl,
  //       Location: formData.Location,
  //       WillingToRelocate: formData.WillingToRelocate,
  //       CoverLetter: formData.CoverLetter
  //     };

  //     console.log(applicationData)
  //     // Submit to API
  //     const response = await axios.post('https://website-backend-6shb.onrender.com/api/applications', applicationData);
      
  //     if (response.status === 200 || response.status === 201) {
  //       onSubmit(applicationData, job);
  //       // Reset form
  //       setFormData({
  //         ApplicantName: "",
  //         Email: "",
  //         PhoneNumber: "",
  //         LinkedIn: "",
  //         Skills: "",
  //         GitHub: "",
  //         Portfolio: "",
  //         Experience: "",
  //         Location: "",
  //         WillingToRelocate: false,
  //         CoverLetter: "",
  //         Resume: null
  //       });
  //     }
  //   } catch (err) {
  //     console.error(err.response.data)
  //     console.error('Error submitting application:', err);
  //     setError('Failed to submit application. Please try again.');
  //   } finally {
  //     setUploading(false);
  //   }
  // };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formDataToSend = new FormData();
    formDataToSend.append("JobId", job.JobId || 0);
    formDataToSend.append("ApplicantName", formData.ApplicantName);
    formDataToSend.append("Email", formData.Email);
    formDataToSend.append("PhoneNumber", formData.PhoneNumber);
    formDataToSend.append("LinkedIn", formData.LinkedIn);
    formDataToSend.append(
      "Skills",
      JSON.stringify(
        formData.Skills.split(",").map((s) => s.trim()).filter(Boolean)
      )
    );
    formDataToSend.append("GitHub", formData.GitHub);
    formDataToSend.append("Portfolio", formData.Portfolio);
    formDataToSend.append("Experience", parseInt(formData.Experience) || 0);
    formDataToSend.append("Location", formData.Location);
    formDataToSend.append("WillingToRelocate", formData.WillingToRelocate);
    formDataToSend.append("CoverLetter", formData.CoverLetter);

    if (formData.Resume) {
      formDataToSend.append("Resume", formData.Resume); // ✅ send actual File
    }

    await axios.post("https://website-backend-6shb.onrender.com/api/applications", formDataToSend, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    alert("Application submitted successfully!");
    // onClose();
  } catch (error) {
    console.error("Error submitting application:", error);
    alert("Failed to submit application. Please try again.");
  }
};
  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      centered
      size="lg"
      className="application-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Apply for {job?.Title || "General Position"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* {error && <Alert variant="danger">{error}</Alert>} */}
        
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Full Name *</Form.Label>
                <Form.Control
                  type="text"
                  name="ApplicantName"
                  value={formData.ApplicantName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address *</Form.Label>
                <Form.Control
                  type="email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number *</Form.Label>
                <Form.Control
                  type="tel"
                  name="PhoneNumber"
                  value={formData.PhoneNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="+91-9876543210"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Location *</Form.Label>
                <Form.Control
                  type="text"
                  name="Location"
                  value={formData.Location}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Bangalore, India"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>LinkedIn Profile</Form.Label>
                <Form.Control
                  type="url"
                  name="LinkedIn"
                  value={formData.LinkedIn}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>GitHub Profile</Form.Label>
                <Form.Control
                  type="url"
                  name="GitHub"
                  value={formData.GitHub}
                  onChange={handleInputChange}
                  placeholder="https://github.com/yourusername"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Portfolio Website</Form.Label>
            <Form.Control
              type="url"
              name="Portfolio"
              value={formData.Portfolio}
              onChange={handleInputChange}
              placeholder="https://yourportfolio.com"
            />
          </Form.Group>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Skills (comma separated) *</Form.Label>
                <Form.Control
                  type="text"
                  name="Skills"
                  value={formData.Skills}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., React, Node.js, PostgreSQL"
                />
                <Form.Text className="text-muted">
                  List your technical skills separated by commas
                </Form.Text>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Years of Experience *</Form.Label>
                <Form.Control
                  type="number"
                  name="Experience"
                  value={formData.Experience}
                  onChange={handleInputChange}
                  required
                  min="0"
                  placeholder="e.g., 3"
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Cover Letter</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="CoverLetter"
              value={formData.CoverLetter}
              onChange={handleInputChange}
              placeholder="Tell us why you're interested in this position and what makes you a good fit..."
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Upload Resume (PDF) *</Form.Label>
            <Form.Control
              type="file"
              onChange={handleFileChange}
              required
            />
            <Form.Text className="text-muted">
              Max file size: 5MB. We'll keep your resume confidential.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Check
              type="checkbox"
              name="WillingToRelocate"
              checked={formData.WillingToRelocate}
              onChange={handleInputChange}
              label="I am willing to relocate for this position"
            />
          </Form.Group>

          <div className="d-grid">
            <Button 
              type="submit" 
              size="lg" 
              className="career-btn"
              disabled={uploading}
            >
              {uploading ? 'Submitting Application...' : 'Submit Application'}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};


const CareerPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://website-backend-6shb.onrender.com/api/job');
      
      // Filter only active jobs
      const activeJobs = response.data.filter(job => job.Status === 'Active');
      setJobs(activeJobs);
      setError(null);
    } catch (err) {
      console.error('Error fetching jobs:', err);
      setError('Failed to load job openings. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleShowModal = (job) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  const handleSubmitApplication = (formData, job) => {
    // Here you would handle form submission, like sending to an API
    console.log("Form submitted:", formData, "for job:", job.Title);
    
    // Close modal after submission
    handleCloseModal();
    
    // Show success message
    alert(`Application for ${job.Title} submitted successfully!`);
  };

  return (
    <motion.div
      className="career-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <HeroSection />
      <BenefitsSection />
      <JobOpeningsSection 
        jobs={jobs} 
        loading={loading} 
        onApply={handleShowModal} 
      />
      <CultureSection />
      
      <ApplicationModal 
        show={showModal} 
        job={selectedJob} 
        onHide={handleCloseModal}
        onSubmit={handleSubmitApplication}
      />
    </motion.div>
  );
};

export default CareerPage;