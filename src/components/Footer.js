import React from "react";
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.jpg'
import { Link } from "react-router-dom";
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="btc-footer" style={{zIndex:100}}>
      <div className="container py-5">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-3 mb-4 bg-light text-dark" style={{borderRadius:'10px'}}>
            <img src={logo} alt="BTC Logo" className="footer-logo d-block mx-auto" width={"200px"}/>
            <h6>
              BURJ Tech Consultancy (OPC) Pvt Ltd<br />
              No. 469/ Pavalamalli St, Extn.<br />
              Narashimhapuram,<br />
              Kakkalur, Thiruvallur - 602003<br />
              Tamil Nadu, India
            </h6>
            {/* <div className="footer-reviews">
              <span>Reviewed on </span>
              <span className="stars">★★★★☆</span>
              <span> 3 Reviews</span>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4 mt-1">
            <h5>Overview</h5>
            <ul className="footer-links" style={{textDecoration:'none'}}>
              <li>
                <Link to="/terms-and-conditions" >Terms & Conditions</Link>
              </li>
              <li>Privacy Policy</li>
              <li><Link to='/contact'>Contact Us</Link></li>
              <li><Link to='careers'>Careers</Link></li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4 mt-1">
            <h5>For Business</h5>
            <p><FaPhoneAlt /> +91-9444369625</p>
            <p><FaEnvelope /> burjtechconsultancy@gmail.com</p>

            <h5 className="mt-4">For Careers</h5>
            <p><FaPhoneAlt /> +91-9444369625</p>
            <p><FaEnvelope /> support@btcglobal.info</p>
          </div>

          {/* Newsletter */}
          <div className="col-md-4 mb-4 mt-1">
            <h6>Let's stay in touch!</h6>
            <p>Join our newsletter and get insights that will change your product design perspective</p>
            <input type="email" placeholder="Enter Email" className="newsletter-input mb-2" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-bottom mt-4 d-flex justify-content-between align-items-center flex-wrap">
          <div className="copyright">
            &copy; 2025 - BTC Pvt Ltd
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/burj_tech_consultancy/">
              <FaInstagram />
            </a>
            <a href="https://wa.me/message/64YKOIDQIVZOF1">
              <FaWhatsapp />
            </a>
            <a href="https://x.com/burj_tech7571">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/burj-tech-consultancy">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
