import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import logo from '../assets/logo.png';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (sectionId, e) => {
    e.preventDefault();
    const isHomePage = window.location.pathname === "/" || window.location.pathname === "";
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      sessionStorage.setItem('scrollToSection', sectionId);
      window.location.href = `/`;
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, null, `#${sectionId}`);
      }, 50);
    }
  };

  return (
    <>
      <Navbar 
        expand="lg"   // ✅ offcanvas below lg, inline above lg
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

          {/* Toggle visible only on small devices */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" className="custom-toggler" />

          {/* Single Nav → behaves as offcanvas (sm-md) or inline (lg+) */}
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="bg-dark custom-offcanvas"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="ms-auto navbar-nav-custom">
                <Nav.Link href="/about" className="nav-link-custom">About</Nav.Link>

                <Nav.Link 
                  href="#services" 
                  className="nav-link-custom"
                  onClick={(e) => handleSectionClick('services', e)}
                >
                  Services
                </Nav.Link>

                <Nav.Link 
                  href="#industries" 
                  className="nav-link-custom"
                  onClick={(e) => handleSectionClick('industries', e)}
                >
                  Industries
                </Nav.Link>

                <Nav.Link 
                  href="#why" 
                  className="nav-link-custom"
                  onClick={(e) => handleSectionClick('why', e)}
                >
                  Why Us
                </Nav.Link>

                <Nav.Link href="/careers" className="nav-link-custom careers-highlight">
                  Careers
                </Nav.Link>

                <Nav.Link href="/contact" className="nav-link-custom contact-cta">
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;