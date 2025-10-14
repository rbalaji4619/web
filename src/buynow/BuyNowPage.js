import React from "react";
import "./BuyNowPage.css";

const BuyNowPage = () => {
  const products = [
    {
      id: "starter",
      title: "Starter License",
      description: "Perfect for individuals who are just getting started. Includes basic tools and updates.",
      features: ["1 user access", "Basic analytics", "Email support", "1-year validity"],
      price: "₹999",
      popular: false
    },
    {
      id: "personal",
      title: "Personal License",
      description: "Designed for personal use with access to more advanced features and integrations.",
      features: ["Up to 2 devices", "Advanced reports", "Priority email support", "1-year updates"],
      price: "₹1,999",
      popular: false
    },
    {
      id: "professional",
      title: "Professional License",
      description: "Best for freelancers and small businesses who need complete access and automation tools.",
      features: ["3 device access", "Custom automation tools", "Data export", "Chat + Email support"],
      price: "₹3,499",
      popular: true
    },
    {
      id: "business",
      title: "Business License",
      description: "For growing teams needing advanced integrations, security, and priority updates.",
      features: ["5 user accounts", "Advanced API access", "Priority updates", "24/7 technical support"],
      price: "₹5,999",
      popular: false
    },
    {
      id: "enterprise",
      title: "Enterprise License",
      description: "For large organizations with custom requirements, integrations, and SLA-based support.",
      features: ["Unlimited users", "Dedicated account manager", "Custom integrations", "SLA-backed support"],
      price: "₹9,999",
      popular: false
    },
    {
      id: "ultimate",
      title: "Ultimate Lifetime License",
      description: "One-time payment for lifetime access. Includes all updates and premium customer support.",
      features: ["Lifetime validity", "All future updates", "Unlimited installations", "VIP customer service"],
      price: "₹14,999",
      popular: false
    },
  ];

  return (

    <div className="pt-5 mt-5 pricing-page">
      <div className="container">
      <div className="text-center mb-4 pricing-header">
        <h1 className="fw-bold">Purchase Our Software</h1>
        <p className="text-muted">
          Choose the right plan for your needs. All payments are processed securely.
        </p>
      </div>

      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card shadow-sm border-0 h-100 p-3 pricing-card">
              <div className="card-body d-flex flex-column">
                <h4 className="fw-bold text-center mb-2">{p.title}</h4>
                <p className="text-muted text-center mb-3">{p.description}</p>
                <h3 className="text-primary text-center mb-3">{p.price}</h3>
                <ul className="list-unstyled text-start small flex-grow-1">
                  {p.features.map((f, i) => (
                    <li key={i} className="mb-2">
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="btn btn-primary mt-3 w-100 pricing-btn"
                  onClick={() => alert(`Buy Now clicked for ${p.title}`)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pb-2 pricing-footer">
        <p className="small text-muted">
          By purchasing, you agree to our{" "}
          <a href="/terms-and-conditions" className="text-decoration-none">
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
  );
};

export default BuyNowPage;