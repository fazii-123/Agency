import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { 
  FaHome, FaEnvelope, FaSignOutAlt 
} from 'react-icons/fa';
import '../styles/AdminDashboard.css';

import logo from '../assets/logo.png';

const AdminLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.post('/api/logout/');
    } catch (error) {
      console.error('Logout failed', error);
    } finally {
      logout(); // Update auth state
      navigate('/admin-login');
    }
  };

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-logo">
          <img src={logo} alt="Logo" className="sidebar-logo-img" />
        </div>
        <nav className="sidebar-nav">
          <Link to="/admin-dashboard" className={`nav-item ${isActive('/admin-dashboard')}`}><FaHome /> Dashboard</Link>
          <Link to="/admin-messages" className={`nav-item ${isActive('/admin-messages')}`}><FaEnvelope /> Messages</Link>
        </nav>
        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-btn">LOGOUT <FaSignOutAlt /> </button>
        </div>
      </aside>


      <main className="admin-main">
        {/* Professional Topbar */}
        <div className="admin-topbar">
          <div className="topbar-left">
            <img src={logo} alt="Logo" className="topbar-logo" />
            <div className="topbar-title">
              <h2>{location.pathname === '/admin-dashboard' ? 'Dashboard' : 'Messages'}</h2>
              <span className="topbar-subtitle">Admin Panel</span>
            </div>
          </div>
          <div className="topbar-actions">
            <div className="user-profile">
              <div className="avatar">AD</div>
              <span>Admin</span>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="dashboard-content">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
