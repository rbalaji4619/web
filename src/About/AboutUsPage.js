import React, { useState, useEffect } from 'react';
import './AboutUsPage.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const AboutUsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Add scroll event listener for reveal animations
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Team members data
  // const teamMembers = [
  //   {
  //     id: 1,
  //     name: "Sarah Johnson",
  //     position: "CEO & Founder",
  //     image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  //     description: "Former tech executive with 10+ years of industry experience.",
  //     social: { linkedin: "#", twitter: "#" }
  //   },
  //   {
  //     id: 2,
  //     name: "Michael Chen",
  //     position: "Creative Director",
  //     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  //     description: "Award-winning designer with a passion for innovation.",
  //     social: { linkedin: "#", twitter: "#" }
  //   },
  //   {
  //     id: 3,
  //     name: "Elena Rodriguez",
  //     position: "Lead Developer",
  //     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  //     description: "Technical expert specializing in cutting-edge solutions.",
  //     social: { linkedin: "#", twitter: "#" }
  //   },
  //   {
  //     id: 4,
  //     name: "David Wilson",
  //     position: "Marketing Director",
  //     image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  //     description: "Strategic marketer with a track record of success.",
  //     social: { linkedin: "#", twitter: "#" }
  //   }
  // ];

  // Values data
  const values = [
    {
      title: "Innovation",
      description: "We embrace new ideas and technologies to deliver cutting-edge solutions.",
      icon: "💡"
    },
    {
      title: "Excellence",
      description: "We're committed to delivering exceptional quality in everything we do.",
      icon: "⭐"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships.",
      icon: "🤝"
    },
    {
      title: "Integrity",
      description: "We operate with honesty and transparency in all our dealings.",
      icon: "🔒"
    }
  ];

  // Timeline data
  const timelineData = [
    {
      year: "2025",
      title: "Company Founded",
      description: "Our journey began with a vision to revolutionize the industry."
    },
    {
      year: "Present",
      title: "Building Our Foundation",
      description: "We're currently developing our core products and service."
    },
    {
      year: "Future",
      title: "Growth & Expansion",
      description: "We're excited to grow our team and serve our first clients."
    }
  ];

  // service data
  const service = [
    {
      title: "Web Development",
      description: "Custom websites and web applications tailored to your needs.",
      icon: "🌐"
    },
    {
      title: "UI/UX Design",
      description: "User-centered designs that enhance engagement and conversion.",
      icon: "🎨"
    },
    {
      title: "Digital Strategy",
      description: "Data-driven strategies to achieve your business objectives.",
      icon: "📊"
    },
    {
      title: "Brand Identity",
      description: "Creating memorable brands that resonate with your audience.",
      icon: "🆔"
    }
  ];

  // Testimonials data
  // const testimonials = [
  //   {
  //     text: "Working with this team has been transformative for our business.",
  //     author: "Jane Smith",
  //     role: "CEO, TechStart Inc"
  //   },
  //   {
  //     text: "Their innovative approach helped us solve complex challenges efficiently.",
  //     author: "Robert Johnson",
  //     role: "Product Manager, InnovateCo"
  //   },
  //   {
  //     text: "The dedication and expertise they bring to every project is exceptional.",
  //     author: "Maria Garcia",
  //     role: "Marketing Director, Growth Solutions"
  //   }
  // ];

  return (
    <>
      <Helmet>
        <title>About Us - Burj Tech Consultancy</title>
        <meta name="description" content="Learn about our mission, vision, values, and journey at Burj Tech Consultancy." />
        <link rel="canonical" href="https://www.btcglobal.info/about" />
      </Helmet>
      <div className="about-us-page">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-background">
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className={`hero-title ${isVisible ? 'slide-up' : ''}`}>Crafting Digital Excellence</h1>
            <p className={`hero-subtitle ${isVisible ? 'slide-up' : ''}`}>We're a passionate team creating innovative solutions for the modern world</p>
            <div className={`hero-cta ${isVisible ? 'slide-up' : ''}`}>
              {/* <button className="cta-button">Our Work</button> */}
              <button className="cta-button">Meet the Team</button>
            </div>
          </div>
          <div className="scroll-indicator">
            <span>Scroll Down</span>
            <div className="scroll-arrow"></div>
          </div>
        </section>

        {/* Intro Section */}
        {/* <section className="aboutus-intro">
          <div className="container">
            <div className="section-header reveal">
              <h2>Our Story</h2>
              <p className="section-subtitle">How we began our journey to make a difference</p>
            </div>
            <div className="intro-content reveal">
              <div className="intro-text">
                <p>Founded in 2025, we began as a small team with big dreams. Today, we've grown into a focused collective of experts, but we've never lost sight of our core values: integrity, innovation, and client success.</p>
                <p>Our journey has been marked by challenges overcome, milestones achieved, and relationships built. Every project we undertake is approached with the same passion and dedication that fueled our beginnings.</p>
                <div className="stats-grid">
                  <div className="stat">
                    <h3>4</h3>
                    <p>Months of Excellence</p>
                  </div>
                  <div className="stat">
                    <h3>12+</h3>
                    <p>Projects in Development</p>
                  </div>
                  <div className="stat">
                    <h3>100%</h3>
                    <p>Client Focus</p>
                  </div>
                </div>
              </div>
              <div className="intro-image">
                <div className="image-frame">
                  <div className="image-placeholder">
                    <svg className="placeholder-icon" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}


        {/* Mission Vision Section */}
        <section className="mission-vision">
          <div className="container">
            <div className="mv-grid">
              <div className="mv-card reveal">
                <div className="mv-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>To deliver innovative digital solutions that empower businesses to thrive in an ever-evolving digital landscape. We combine creativity with technical expertise to create meaningful experiences.</p>
              </div>
              <div className="mv-card reveal">
                <div className="mv-icon">🔭</div>
                <h3>Our Vision</h3>
                <p>To be recognized as a leading digital agency that transforms ideas into impactful digital experiences, setting new standards for quality, innovation, and client satisfaction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <div className="container">
            <div className="section-header reveal">
              <h2>Our Journey</h2>
              <p className="section-subtitle">From concept to reality</p>
            </div>
            <div className="timeline-container reveal">
              {timelineData.map((item, index) => (
                <div 
                  key={index} 
                  className={`timeline-item ${index === activeTimeline ? 'active' : ''}`}
                  onClick={() => setActiveTimeline(index)}
                >
                  <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    {index < timelineData.length - 1 && <div className="timeline-line"></div>}
                  </div>
                  <div className="timeline-content">
                    <h4>{item.year}</h4>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="container">
            <div className="section-header reveal">
              <h2>Our Values</h2>
              <p className="section-subtitle">The principles that guide everything we do</p>
            </div>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-item reveal">
                  <div className="value-icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* service Section */}
        <section className="service-section">
          <div className="container">
            <div className="section-header reveal">
              <h2>What We Offer</h2>
              <p className="section-subtitle">Comprehensive solutions for your digital needs</p>
            </div>
            <div className="service-grid">
              {service.map((service, index) => (
                <div key={index} className="service-item reveal">
                  <div className="service-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href='/' className="service-link">Learn More →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section className="about-team">
          <div className="container">
            <div className="section-header reveal">
              <h2>Meet Our Team</h2>
              <p className="section-subtitle">The talented people behind our success</p>
            </div>
            <div className="team-grid">
              {teamMembers.map(member => (
                <div key={member.id} className="team-member reveal">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                    <div className="member-overlay">
                      <p>{member.description}</p>
                      <div className="social-links">
                        <a href={member.social.linkedin}>LinkedIn</a>
                        <a href={member.social.twitter}>Twitter</a>
                      </div>
                    </div>
                  </div>
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Testimonials Section */}
        {/* <section className="testimonials-section">
          <div className="container">
            <div className="section-header reveal">
              <h2>What People Say</h2>
              <p className="section-subtitle">Feedback from our partners and clients</p>
            </div>
            <div className="testimonials-container reveal">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-item">
                  <div className="testimonial-text">"{testimonial.text}"</div>
                  <div className="testimonial-author">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-content reveal">
              <h2>Ready to Start Your Project?</h2>
              <p>Get in touch with us today and let's create something amazing together.</p>
              <Link to="/contact">
                <button className="cta-button">Contact Us</button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUsPage;