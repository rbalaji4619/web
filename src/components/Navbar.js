import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/logo.png'; // Ensure the logo path is correct
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle same-page section navigation
  const handleSectionClick = (sectionId, e) => {
    e.preventDefault();
    
    // Check if we're on the home page by checking the URL path
    const isHomePage = window.location.pathname === "/" || window.location.pathname === "";
    
    if (isHomePage) {
      // If we're on the home page, scroll to the section
      scrollToSection(sectionId);
    } else {
      // If we're on a different page, navigate to home with hash
      // Store the section ID to scroll to after navigation
      sessionStorage.setItem('scrollToSection', sectionId);
      window.location.href = `/`;
    }
  };

  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add a small delay to ensure the DOM is fully rendered
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL hash without scrolling
        window.history.replaceState(null, null, `#${sectionId}`);
      }, 50);
    }
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      id="main-navbar"
      className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="/" className="navbar-brand-custom">
          <img 
            src={logo} 
            alt="BURJ Tech Consultancy" 
            className="navbar-logo img-fluid" 
          />
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="custom-toggler"
        />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-nav-custom">
            <Nav.Link href="/about" className="nav-link-custom">
              <span>About</span>
            </Nav.Link>
            
            {/* Services section link */}
            <Nav.Link 
              href="#services" 
              className="nav-link-custom"
              onClick={(e) => handleSectionClick('services', e)}
            >
              <span>Services</span>
            </Nav.Link>
            
            {/* Industries section link */}
            <Nav.Link 
              href="#industries" 
              className="nav-link-custom"
              onClick={(e) => handleSectionClick('industries', e)}
            >
              <span>Industries</span>
            </Nav.Link>
            
            {/* Why Us section link */}
            <Nav.Link 
              href="#why" 
              className="nav-link-custom"
              onClick={(e) => handleSectionClick('why', e)}
            >
              <span>Why Us</span>
            </Nav.Link>
            
            <Nav.Link href="/careers" className="nav-link-custom careers-highlight">
              <span>Careers</span>
            </Nav.Link>
            
            <Nav.Link href="/contact" className="nav-link-custom contact-cta">
              <span>Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;