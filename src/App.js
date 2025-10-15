import React, { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from "./services/ScrollToTop";
import Home from "./Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WebDevelopment from "./services/WebDevelopment";
import UIUXDesign from "./services/UIUXDesign";
import AppDevelopment from "./services/AppDevelopment";
import GameDevelopment from "./services/GameDevelopment";
import AIMLDevelopment from "./services/AIMLDevelopment";
import CloudServices from "./services/CloudServices";
// import CareerPage from "./Carrer/CareerPage";
import Careerpages from "./Carrer/Careerpages";
import ContactPage from "./Contact/ContactPage";
import AboutUsPage from "./About/AboutUsPage";
// import AdminPanel from "./admin/AdminPanel";
import TermsAndCondition from "./terms&con/TermsAndCondition";
import RefundPolicy from "./refundpolicy/RefundPolicy";
import BuyNowPage from "./buynow/BuyNowPage";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/ui/ux-design" element={<UIUXDesign />} />
          <Route path="/services/app-development" element={<AppDevelopment />} />
          <Route path="/services/game-development" element={<GameDevelopment />} />
          <Route path="/services/ai/ml-services" element={<AIMLDevelopment />} />
          <Route path="/services/cloud-services" element={<CloudServices />} />
          <Route path="/careers" element={<Careerpages />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          {/* <Route path="/admin" element={<AdminPanel />} /> */}
          <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/buynow" element={<BuyNowPage />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
