import React, { useState } from 'react';
import '../styles/GetInTouch.css';
import axios from 'axios';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyname: '',
    email: '',
    phoneNumber: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData)

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
    }
  };

  return (
    <section id="get-in-touch" className="get-in-touch-section py-3">
      <div className="container">
        <h2>Get in Touch</h2>
        <p className="section-subtitle">We'd love to hear from you. Reach out to us with any questions or inquiries.</p>
        
        <div className="contacts-content mt-4">
          <div className="contacts-info">
            <div className="info-item">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="details">
                <h4>Address</h4>
                <p>No.469 Pavalamalli St, Extn.<br />
                Narasimhapuram, Kakkalur<br />
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
              {/* <a href="/" aria-label="Facebook"><i className="fa-brands fa-facebook"></i></a> */}
              <a href="https://wa.me/message/64YKOIDQIVZOF1" aria-label="WhatsApp"><i className="fa-brands fa-square-whatsapp"></i></a>
              <a href="https://x.com/burj_tech7571" aria-label="Twitter"><i className="fa-brands fa-square-x-twitter"></i></a>
              <a href="https://www.linkedin.com/company/burj-tech-consultancy" aria-label="LinkedIn"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://www.instagram.com/burj_tech_consultancy/" aria-label="Instagram"><i className="fa-brands fa-square-instagram"></i></a>
            </div>
          </div>
          
          <div className="contacts-form">
            <form onSubmit={handleSubmit}>
              <div className="forms-row">
                <div className="forms-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="forms-group">
                  <label htmlFor="email">Company Name</label>
                  <input
                    type="text"
                    id="companyname"
                    name="companyname"
                    value={formData.companyname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className='forms-row'>
                <div className="forms-group">
                  <label htmlFor="subject">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="forms-group">
                  <label htmlFor='phoneNumber'>Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="forms-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="description"
                  rows="5"
                  value={formData.description}
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