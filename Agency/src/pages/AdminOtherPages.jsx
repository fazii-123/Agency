
import AdminLayout from '../components/AdminLayout';
import { FaBell, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import '../styles/AdminPages.css';

export const AdminNotifications = () => {
  const notifications = [
    { id: 1, type: 'success', title: 'New submission received', message: 'A new contact form was submitted', time: '10 min ago' },
    { id: 2, type: 'warning', title: 'Server maintenance', message: 'Scheduled maintenance on Sunday', time: '1 hour ago' },
    { id: 3, type: 'info', title: 'Update available', message: 'New features are now available', time: '3 hours ago' },
  ];

  return (
    <AdminLayout>
      <div className="admin-page-header">
        <h2>Notifications</h2>
      </div>

      <div className="notification-list">
        {notifications.map(notif => (
          <div key={notif.id} className="notification-item">
            <div className="notification-icon">
              {notif.type === 'success' && <FaCheckCircle />}
              {notif.type === 'warning' && <FaExclamationTriangle />}
              {notif.type === 'info' && <FaBell />}
            </div>
            <div className="notification-content">
              <h4>{notif.title}</h4>
              <p>{notif.message}</p>
              <span className="notification-time">{notif.time}</span>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export const AdminSettings = () => {
  return (
    <AdminLayout>
      <div className="admin-page-header">
        <h2>Settings</h2>
      </div>

      <div className="settings-sections">
        <div className="settings-section">
          <h3>General Settings</h3>
          <div className="setting-item">
            <div className="setting-info">
              <h4>Email Notifications</h4>
              <p>Receive email notifications for new submissions</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <h4>Dark Mode</h4>
              <p>Enable dark mode for the admin panel</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h3>Security</h3>
          <div className="setting-item">
            <div className="setting-info">
              <h4>Two-Factor Authentication</h4>
              <p>Add an extra layer of security</p>
            </div>
            <label className="toggle-switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export const AdminHelp = () => {
  return (
    <AdminLayout>
      <div className="admin-page-header">
        <h2>Help Center</h2>
      </div>

      <div style={{ background: 'white', padding: '30px', borderRadius: '15px' }}>
        <h3 style={{ marginBottom: '20px', color: '#333' }}>Frequently Asked Questions</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h4 style={{ color: '#0052cc', marginBottom: '10px' }}>How do I reset my password?</h4>
            <p style={{ color: '#666', lineHeight: '1.6' }}>You can reset your password from the login page by clicking "Forgot Password".</p>
          </div>
          <div>
            <h4 style={{ color: '#0052cc', marginBottom: '10px' }}>How do I export data?</h4>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Navigate to the Dashboard and click the "Export" button in the top right corner.</p>
          </div>
          <div>
            <h4 style={{ color: '#0052cc', marginBottom: '10px' }}>Need more help?</h4>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Contact support at support@example.com</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};
