import React from "react";
import "./BuyNowPage.css";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const BuyNowPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "basic",
      title: "Basic Website Package",
      description:
        "Perfect for startups or individuals who want a professional single-page website with responsive design.",
      features: [
        "1 Page Responsive Website",
        "Custom Design",
        "Basic SEO Setup",
        "Delivery within 5 Days",
      ],
      price: "₹4,999",
      popular: false,
    },
    {
      id: "standard",
      title: "Standard Website Package",
      description:
        "Ideal for small businesses looking for a 3–5 page website with modern UI and contact form integration.",
      features: [
        "Up to 5 Pages",
        "Modern UI/UX",
        "Contact Form Integration",
        "Basic SEO + Speed Optimization",
      ],
      price: "₹9,999",
      popular: true,
    },
    {
      id: "premium",
      title: "Premium Website Package",
      description:
        "Best for growing businesses that need advanced features like admin panel, blog, and animations.",
      features: [
        "Up to 10 Pages",
        "Admin Dashboard",
        "Blog + Gallery Integration",
        "Custom Animations & Effects",
      ],
      price: "₹17,999",
      popular: false,
    },
    {
      id: "ecommerce",
      title: "E-Commerce Website Package",
      description:
        "Perfect for online stores with full shopping cart, payment gateway, and order management system.",
      features: [
        "E-Commerce Functionality",
        "Payment Gateway Integration",
        "Product Dashboard",
        "Inventory Management",
      ],
      price: "₹24,999",
      popular: false,
    },
    {
      id: "business",
      title: "Business Pro Package",
      description:
        "For established companies wanting premium web design with custom backend and API integration.",
      features: [
        "Custom Backend Development",
        "Advanced Security Setup",
        "API Integration",
        "Premium Maintenance Plan",
      ],
      price: "₹34,999",
      popular: false,
    },
  ];

  const handleCustomize = () => {
    navigate("/contact");
  };

  return (
    <>
      <Helmet>
        <title>Web Development Plans | Burj Tech Consultancy</title>
        <meta
          name="description"
          content="Choose from our professional web development packages or customize your project to fit your business needs."
        />
        <link rel="canonical" href="https://www.btcglobal.info/web-plans" />
      </Helmet>

      <div className="pt-5 mt-5 pricing-page">
        <div className="container">
          <div className="text-center mb-4 pricing-header">
            <h1 className="fw-bold">Our Web Development Packages</h1>
            <p className="text-muted">
              Choose a plan that fits your business needs — from a simple
              portfolio to a full-fledged e-commerce solution.
            </p>
          </div>

          <div className="row">
            {services.map((s) => (
              <div key={s.id} className="col-lg-4 col-md-6 mb-4">
                <div
                  className={`card shadow-sm border-0 h-100 p-3 pricing-card ${
                    s.popular ? "highlight-card" : ""
                  }`}
                >
                  <div className="card-body d-flex flex-column">
                    <h4 className="fw-bold text-center mb-2">{s.title}</h4>
                    <p className="text-muted text-center mb-3">
                      {s.description}
                    </p>
                    <h3 className="text-primary text-center mb-3">{s.price}</h3>
                    <ul className="list-unstyled text-start small flex-grow-1">
                      {s.features.map((f, i) => (
                        <li key={i} className="mb-2">
                          {f}
                        </li>
                      ))}
                    </ul>
                    <button
                      className="btn btn-primary mt-3 w-100 pricing-btn"
                      onClick={() =>
                        alert(`You selected the ${s.title} package!`)
                      }
                    >
                      Get This Plan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <h5 className="fw-bold mb-3">Need a Custom Website?</h5>
<button
  className="btn px-4 py-2 fw-semibold border-2"
  style={{
    backgroundColor: 'transparent',
    color: '#e3e9efff',
    borderColor: '#2c3e50',
    transition: 'all 0.3s ease',
    position: 'relative',
    overflow: 'hidden'
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = '#2c3e50ff';
    e.target.style.color = 'white';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = '#ced7e0ff';
  }}
  onClick={handleCustomize}
>
  Customize Your Project
</button>
          </div>

          <div className="text-center pb-2 mt-4 pricing-footer">
            <p className="small text-muted">
              By proceeding, you agree to our{" "}
              <a
                href="/terms-and-conditions"
                className="text-decoration-none"
              >
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="/refund-policy" className="text-decoration-none">
                Refund Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyNowPage;
