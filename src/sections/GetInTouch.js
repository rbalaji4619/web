import React, { useState } from 'react';
import '../styles/GetInTouch.css';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="get-in-touch" className="get-in-touch-section">
      <div className="container">
        <h2>Get in Touch</h2>
        <p className="section-subtitle">We'd love to hear from you. Reach out to us with any questions or inquiries.</p>
        
        <div className="contacts-content">
          <div className="contacts-info">
            <div className="info-item">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="details">
                <h4>Address</h4>
                <p>No.469 Pavalamalli St, Extn.<br />
                Narasimhapurak, Kakkalur<br />
                Tiruvallur - 602 003</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="details">
                <h4>Phone</h4>
                <p>+91 9444369625</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="details">
                <h4>Email</h4>
                <p>burjtechconsultancy@gmail.com</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="/" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a>
              <a href="/" aria-label="Twitter"><i className="fa-brands fa-square-x-twitter"></i></a>
              <a href="/" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
              <a href="/" aria-label="Instagram"><i className="fa-brands fa-square-instagram"></i></a>
            </div>
          </div>
          
          <div className="contacts-form">
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;