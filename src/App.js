import React, { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import AdminPanel from "./admin/AdminPanel";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
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
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
