import React from 'react';
import AdminLayout from '../components/AdminLayout';
import { FaFolder, FaFile } from 'react-icons/fa';
import '../styles/AdminPages.css';

const AdminFolders = () => {
  const folders = [
    { id: 1, name: 'Documents', files: 24, size: '2.4 GB' },
    { id: 2, name: 'Images', files: 156, size: '5.2 GB' },
    { id: 3, name: 'Projects', files: 12, size: '1.8 GB' },
    { id: 4, name: 'Reports', files: 45, size: '890 MB' },
    { id: 5, name: 'Templates', files: 8, size: '120 MB' },
    { id: 6, name: 'Archives', files: 67, size: '3.5 GB' },
  ];

  return (
    <AdminLayout>
      <div className="admin-page-header">
        <h2>Folders</h2>
        <button className="edit-btn">
          <FaFolder /> New Folder
        </button>
      </div>

      <div className="folders-grid">
        {folders.map(folder => (
          <div key={folder.id} className="folder-card">
            <FaFolder className="folder-icon" />
            <h3>{folder.name}</h3>
            <div className="folder-meta">
              <span>{folder.files} files</span>
              <span>{folder.size}</span>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminFolders;
