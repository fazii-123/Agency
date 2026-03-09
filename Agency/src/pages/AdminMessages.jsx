import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import AdminLayout from '../components/AdminLayout';
import { FaSearch, FaFilter } from 'react-icons/fa';
import '../styles/AdminMessages.css';

const AdminMessages = () => {
  const location = useLocation();
  const [submissions, setSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(location.state?.filter || 'all');

  const filters = [
    { id: 'all', label: 'All Messages' },
    { id: 'new', label: 'New' },
    { id: 'in-progress', label: 'In-Progress' },
    { id: 'contacted', label: 'Contacted' },
    { id: 'resolved', label: 'Resolved' },
  ];

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        axios.defaults.withCredentials = true;
        const response = await axios.get('/api/contact/');
        // Add status to each submission (default to 'new')
        const submissionsWithStatus = response.data.map(sub => ({
          ...sub,
          status: sub.status || 'new'
        }));
        setSubmissions(submissionsWithStatus);
        setError(null);
      } catch (error) {
        console.error('Error fetching submissions:', error);
        setError('Failed to load contact submissions');
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  // Filter and search logic - runs whenever any dependency changes
  useEffect(() => {
    if (!submissions || submissions.length === 0) {
      setFilteredSubmissions([]);
      return;
    }

    let result = [...submissions]; // Create a copy

    // Apply filter
    if (selectedFilter !== 'all') {
      result = result.filter(sub => sub.status === selectedFilter);
    }

    // Apply search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(sub =>
        sub.name?.toLowerCase().includes(query) ||
        sub.email?.toLowerCase().includes(query) ||
        sub.phone?.toLowerCase().includes(query) ||
        sub.message?.toLowerCase().includes(query)
      );
    }

    setFilteredSubmissions(result);
  }, [searchQuery, selectedFilter, submissions]);

  const handleStatusChange = async (id, newStatus) => {
    // Optimistic update for better UX
    const prevSubmissions = [...submissions];
    setSubmissions(prevSubs =>
      prevSubs.map(sub =>
        sub.id === id ? { ...sub, status: newStatus } : sub
      )
    );

    try {
      axios.defaults.withCredentials = true;
      await axios.patch(`/api/contact/${id}/`, { status: newStatus });
    } catch (error) {
      console.error('Error updating status:', error);
      // Revert optimistic update on failure
      setSubmissions(prevSubmissions);
    }
  };

  const handleFilterChange = (filterId) => {
    setSelectedFilter(filterId);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins} minutes ago`;
    if (diffHours < 24) return `${diffHours} hours ago`;
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };

  const getStatusBadgeClass = (status) => {
    const statusClasses = {
      'new': 'status-new',
      'in-progress': 'status-in-progress',
      'contacted': 'status-contacted',
      'resolved': 'status-resolved'
    };
    return statusClasses[status] || 'status-new';
  };

  const getStatusLabel = (status) => {
    const labels = {
      'new': 'New',
      'in-progress': 'In-Progress',
      'contacted': 'Contacted',
      'resolved': 'Resolved'
    };
    return labels[status] || 'New';
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="messages-container">
          <div className="messages-loading">
            <div className="loading-spinner"></div>
            <p>Loading messages...</p>
          </div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout>
        <div className="messages-container">
          <div className="messages-error">{error}</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="messages-container">
        {/* Header Section */}
        <div className="messages-header">
          <div className="header-title">
            <h1>Messages</h1>
            <span className="message-count">{filteredSubmissions.length} {selectedFilter === 'all' ? 'Total' : filters.find(f => f.id === selectedFilter)?.label}</span>
          </div>

          {/* Search Bar */}
          <div className="messages-search">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, email, phone..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="messages-filters">
          <FaFilter className="filter-icon" />
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${selectedFilter === filter.id ? 'active' : ''}`}
              onClick={() => handleFilterChange(filter.id)}
            >
              {filter.label}
              {filter.id === 'all' && (
                <span className="filter-count">{submissions.length}</span>
              )}
              {filter.id !== 'all' && (
                <span className="filter-count">
                  {submissions.filter(s => s.status === filter.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Messages List */}
        {filteredSubmissions.length === 0 ? (
          <div className="no-messages">
            <p>No messages found</p>
          </div>
        ) : (
          <div className="messages-list">
            {filteredSubmissions.map((submission, index) => (
              <div key={submission.id} className="message-card" style={{ '--index': index }}>
                <div className="message-card-header">
                  <div className="message-user">
                    <div className="user-avatar">{getInitials(submission.name)}</div>
                    <div className="user-info">
                      <h3 className="user-name">{submission.name}</h3>
                      <span className="message-date">{formatDate(submission.created_at)}</span>
                    </div>
                  </div>
                  
                  <select
                    className={`status-select ${getStatusBadgeClass(submission.status)}`}
                    value={submission.status}
                    onChange={(e) => handleStatusChange(submission.id, e.target.value)}
                  >
                    <option value="new">New</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="contacted">Contacted</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>

                <div className="message-card-body">
                  <div className="message-details">
                    <div className="detail-item">
                      <span className="detail-label">Email</span>
                      <span className="detail-value">{submission.email}</span>
                    </div>
                    {submission.phone && (
                      <div className="detail-item">
                        <span className="detail-label">Phone</span>
                        <span className="detail-value">{submission.phone}</span>
                      </div>
                    )}
                    <div className="detail-item">
                      <span className="detail-label">Service</span>
                      <span className="detail-value">{submission.service_display}</span>
                    </div>
                  </div>

                  <div className="message-text">
                    <span className="detail-label">Message</span>
                    <p>{submission.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminMessages;
