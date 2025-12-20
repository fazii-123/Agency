import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import SplashCursor from "./components/SplashCursor";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";

import Home from "./components/Home";
import AboutUs from "./pages/Aboutus";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Project from "./pages/Project";
import AdminDashboard from "./pages/AdminDashboard";

import WebDevelopment from "./portfolio/WebDevelopment";
import DigitalMarketing from "./portfolio/DigitalMarketing";
import UserExperience from "./portfolio/UserExperience";
import UIUXPortfolio from "./portfolio/UIUXPortfolio";
import AppDevelopment from "./portfolio/AppDevelopment";
import SEOOptimization from "./portfolio/SEOOptimization";

import AdminLogin from "./pages/AdminLogin";
import AdminProfile from "./pages/AdminProfile";
import AdminFolders from "./pages/AdminFolders";
import AdminMessages from "./pages/AdminMessages";
import { AdminNotifications, AdminSettings, AdminHelp } from "./pages/AdminOtherPages";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";


const AppInner = () => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      if (location.pathname.startsWith("/admin")) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      return;
    }

    const heroEl = document.getElementById("hero-section");
    if (!heroEl) {
      setShowHeader(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setShowHeader(!entry.isIntersecting);
      },
      { root: null, threshold: 0.01 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <ScrollToTop />
      {/* <SplashCursor /> */}
      {showHeader && <Header />}

      <div className="main-content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project" element={<Project />} />

          <Route path="/portfolio/web-development" element={<WebDevelopment />} />
          <Route path="/portfolio/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/portfolio/user-experience" element={<UserExperience />} />
          <Route path="/portfolio/ui-ux" element={<UIUXPortfolio />} />
          <Route path="/portfolio/app-development" element={<AppDevelopment />} />
          <Route path="/portfolio/seo" element={<SEOOptimization />} />
          
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin-profile" element={<ProtectedRoute><AdminProfile /></ProtectedRoute>} />
          <Route path="/admin-folders" element={<ProtectedRoute><AdminFolders /></ProtectedRoute>} />
          <Route path="/admin-notifications" element={<ProtectedRoute><AdminNotifications /></ProtectedRoute>} />
          <Route path="/admin-messages" element={<ProtectedRoute><AdminMessages /></ProtectedRoute>} />
          <Route path="/admin-help" element={<ProtectedRoute><AdminHelp /></ProtectedRoute>} />
          <Route path="/admin-settings" element={<ProtectedRoute><AdminSettings /></ProtectedRoute>} />
        </Routes>
      </div>

      {!location.pathname.startsWith("/admin") && <Footer />}
    </>
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <AppInner />
    </Router>
  </AuthProvider>
);

export default App;
