import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.png";
import "./Navigation.css";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section from sessionStorage
  useEffect(() => {
    const section = sessionStorage.getItem("scrollToSection");
    if (section) {
      const element = document.querySelector(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      sessionStorage.removeItem("scrollToSection");
    }
  }, []);

  const handleNavClick = (hash) => {
    sessionStorage.setItem("scrollToSection", hash);
  };

  const navLinks = (
    <Nav className="ms-auto navbar-nav-custom">
      <Nav.Link
        as={HashLink}
        smooth
        to="/about"
        className="nav-link-custom"
        onClick={() => handleNavClick("/about")}
      >
        About
      </Nav.Link>

      <Nav.Link
        as={HashLink}
        smooth
        to="/#services"
        className="nav-link-custom"
        onClick={() => handleNavClick("#services")}
      >
        Services
      </Nav.Link>

      <Nav.Link
        as={HashLink}
        smooth
        to="/#industries"
        className="nav-link-custom"
        onClick={() => handleNavClick("#industries")}
      >
        Industries
      </Nav.Link>

      <Nav.Link
        as={HashLink}
        smooth
        to="/#why"
        className="nav-link-custom"
        onClick={() => handleNavClick("#why")}
      >
        Why Us
      </Nav.Link>

      <Nav.Link
        as={HashLink}
        smooth
        to="/careers"
        className="nav-link-custom careers-highlight"
        onClick={() => handleNavClick("/careers")}
      >
        Careers
      </Nav.Link>

      <Nav.Link
        as={HashLink}
        smooth
        to="/contact"
        className="nav-link-custom contact-cta"
        onClick={() => handleNavClick("/contact")}
      >
        Contact
      </Nav.Link>
    </Nav>
  );

  return (
    <Navbar
      expand="lg"
      fixed="top"
      id="main-navbar"
      className={`custom-navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand
          as={HashLink}
          smooth
          to="/"
          className="navbar-brand-custom"
          onClick={() => handleNavClick("/")}
        >
          <img src={logo} alt="BURJ Tech Consultancy" className="navbar-logo img-fluid" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar" className="custom-toggler" />

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="bg-dark custom-offcanvas d-lg-none"
        >
          <Offcanvas.Header className="text-white" closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" className="text-white" style={{fontSize:'29px'}}>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>{navLinks}</Offcanvas.Body>
        </Navbar.Offcanvas>

        <div className="d-none d-lg-flex">{navLinks}</div>
      </Container>
    </Navbar>
  );
};

export default Navigation;