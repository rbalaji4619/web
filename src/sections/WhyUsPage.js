import React from 'react';
import '../styles/WhyUsPage.css';
import { Link } from 'react-router-dom';

const WhyUsPage = () => {
  // Reasons data
  const reasons = [
    {
      title: "Expert Team",
      description: "Our team consists of industry experts with years of experience and proven track records in delivering exceptional results.",
      icon: "👥",
      features: ["Seasoned Professionals", "Diverse Expertise", "Continuous Learning"]
    },
    {
      title: "Cutting-Edge Technology",
      description: "We leverage the latest technologies and methodologies to ensure your projects are built with future-proof solutions.",
      icon: "💻",
      features: ["Latest Tools & Frameworks", "Innovative Approach", "Future-Proof Solutions"]
    },
    {
      title: "Client-Centric Approach",
      description: "Your success is our priority. We work closely with you to understand your vision and deliver solutions that exceed expectations.",
      icon: "🎯",
      features: ["Customized Solutions", "Transparent Communication", "Dedicated Support"]
    },
    {
      title: "Proven Methodology",
      description: "Our structured approach ensures efficient project execution, timely delivery, and measurable results.",
      icon: "📊",
      features: ["Agile Processes", "Quality Assurance", "Timely Delivery"]
    }
  ];

  // Stats data
  const stats = [
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Availability" },
    // { number: "15+", label: "Years Combined Experience" },
    { number: "20+", label: "Projects Completed" }
  ];

  return (
    <section id="why" className="why-us-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>Why Choose Us?</h2>
          <p className="section-subtitle">Discover what sets us apart and makes us the right partner for your success</p>
        </div>

        {/* Intro Content */}
        {/* <div className="intro-content">
          <div className="intro-text">
            <h3>Your Success Is Our Mission</h3>
            <p>In a competitive market, choosing the right partner is crucial. We don't just deliver projects; we build relationships and create value that extends beyond the final deliverable.</p>
            <p>Our commitment to excellence, innovation, and client success has established us as a trusted partner for businesses looking to transform their vision into reality.</p>
          </div>
          <div className="intro-image">
            <div className="image-frame">
              <div className="image-placeholder">
                <svg className="placeholder-icon" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                </svg>
              </div>
            </div>
          </div>
        </div> */}

        {/* Stats Section */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3 className="stat-number">{stat.number}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons Section */}
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
              <ul className="reason-features">
                {reason.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="why-us-cta">
          <h3>Ready to Experience the Difference?</h3>
          <p>Let's discuss how we can help you achieve your goals and drive your business forward.</p>
          <div className="cta-buttons">
            <Link to="/contact">
              <button className="cta-button primary">Start a Project</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsPage;