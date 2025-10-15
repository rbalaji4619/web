import React, { useState, useEffect } from 'react';
import './ContactPage.css';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyname: '',
    email: '',
    phoneNumber: '',
    description: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await axios.post('https://web-contact.onrender.com/api/contact', formData);
      if (res.status === 200 || res.status === 201) {
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          description: '',
          companyname: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Burj Tech Consultancy</title>
        <meta name="description" content="Get in touch with Burj Tech Consultancy Pvt Ltd. Contact us via email at burjtechconsultancy@gmail.com, call +91 9444369625, or fill out our form for services, support, or collaborations." />
        <link rel="canonical" href="https://www.btcglobal.info/contact" />
      </Helmet>
      <div className="contact-page" style={{ paddingTop: '106px' }}>
        <div className="contact-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-shape shape-4"></div>
        </div>

        <div className={`contact-container ${isVisible ? 'visible' : ''}`}>
          <div className="contact-header">
            <h1 className="slide-in">Get in Touch with</h1>
            <h1 className="company-name slide-in">BURJ Tech Consultancy Pvt Ltd</h1>
            <p className="intro-text fade-in">
              We're here to help. Whether you have questions about our services, need support, or want to discuss potential collaborations.
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info fade-in">
              <div className="contact-item">
                <div className="icon-wrapper">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                  </svg>
                </div>
                <h3>Email Us</h3>
                <p>burjtechconsultancy@gmail.com</p>
              </div>

              <div className="contact-item">
                <div className="icon-wrapper">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                  </svg>
                </div>
                <h3>Call Us</h3>
                <p>+91 9444369625</p>
              </div>

              <div className="contact-item">
                <div className="icon-wrapper">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                  </svg>
                </div>
                <h3>Visit Us</h3>
                <p>No.469 Pavalamalli St, Extn.<br />
                Narasimhapuram, Kakkalur<br />Thiruvallur - 602 003.</p>
              </div>
            </div>

            <form className="contact-form fade-in" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full name<span className='text-danger ms-1'>*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="companyname">Company name</label>
                  <input
                    type="text"
                    id="companyname"
                    name="companyname"
                    placeholder="Your company name"
                    value={formData.companyname}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email<span className='text-danger ms-1'>*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number<span className='text-danger ms-1'>*</span></label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Your phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Describe your project<span className='text-danger ms-1'>*</span></label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Tell us about your project requirements"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg className="spinner" viewBox="0 0 50 50">
                    <circle
                      className="path"
                      cx="25"
                      cy="25"
                      r="20"
                      fill="none"
                      strokeWidth="5"
                    />
                  </svg>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="send-icon" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      </>
  );
};

export default ContactPage;