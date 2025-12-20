import React, { useState } from 'react';
import AdminLayout from '../components/AdminLayout';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit } from 'react-icons/fa';
import '../styles/AdminPages.css';

const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Robert William',
    email: 'robert.william@example.com',
    phone: '+1 234 567 8900',
    location: 'New York, USA',
    bio: 'Senior Administrator with 5+ years of experience in managing digital platforms.',
    role: 'Super Admin'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  return (
    <AdminLayout>
      <div className="admin-page-header">
        <h2>Profile</h2>
        <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
          <FaEdit /> {isEditing ? 'Cancel' : 'Edit Profile'}
        </button>
      </div>

      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-avatar">
            <div className="avatar-circle">RW</div>
            <h3>{profile.name}</h3>
            <span className="role-badge">{profile.role}</span>
          </div>

          <div className="profile-details">
            <div className="detail-row">
              <FaEnvelope className="detail-icon" />
              <div>
                <label>Email</label>
                {isEditing ? (
                  <input 
                    type="email" 
                    value={profile.email} 
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                  />
                ) : (
                  <p>{profile.email}</p>
                )}
              </div>
            </div>

            <div className="detail-row">
              <FaPhone className="detail-icon" />
              <div>
                <label>Phone</label>
                {isEditing ? (
                  <input 
                    type="tel" 
                    value={profile.phone} 
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                  />
                ) : (
                  <p>{profile.phone}</p>
                )}
              </div>
            </div>

            <div className="detail-row">
              <FaMapMarkerAlt className="detail-icon" />
              <div>
                <label>Location</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={profile.location} 
                    onChange={(e) => setProfile({...profile, location: e.target.value})}
                  />
                ) : (
                  <p>{profile.location}</p>
                )}
              </div>
            </div>

            <div className="detail-row full-width">
              <FaUser className="detail-icon" />
              <div>
                <label>Bio</label>
                {isEditing ? (
                  <textarea 
                    value={profile.bio} 
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    rows="4"
                  />
                ) : (
                  <p>{profile.bio}</p>
                )}
              </div>
            </div>

            {isEditing && (
              <button className="save-btn" onClick={handleSave}>Save Changes</button>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminProfile;
