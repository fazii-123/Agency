import React from 'react';
import AdminLayout from '../components/AdminLayout';

const AdminPage = ({ title }) => {
  return (
    <AdminLayout>
      <div style={{ background: 'white', padding: '30px', borderRadius: '15px', minHeight: '400px' }}>
        <h2 style={{ marginBottom: '20px', color: '#333' }}>{title}</h2>
        <p style={{ color: '#666' }}>This is the {title} page. Content coming soon.</p>
      </div>
    </AdminLayout>
  );
};

export default AdminPage;
