import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  PieChart, Pie, Cell, AreaChart, Area 
} from 'recharts';
import AdminLayout from '../components/AdminLayout';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ 
    total: 0, 
    service_distribution: [],
    monthly_trend: [],
    unread_count: 0,
    read_count: 0,
    last_month_count: 0,
    percentage_change: 0,
    recent_24h: 0,
    top_services: [],
    new_count: 0,
    in_progress_count: 0,
    contacted_count: 0,
    resolved_count: 0
  });
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.defaults.withCredentials = true;
        const statsRes = await axios.get('/api/stats/');
        const submissionsRes = await axios.get('/api/contact/');
        
        console.log('Stats Response:', statsRes.data);
        console.log('Submissions Response:', submissionsRes.data);
        
        setStats(statsRes.data);
        setSubmissions(submissionsRes.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching admin data", error);
        setError(error.response?.data?.error || 'Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const COLORS = ['#000000', '#333333', '#666666', '#999999', '#cccccc', '#e6e6e6'];

  const handleNavigateToMessages = (filter) => {
    navigate('/admin-messages', { state: { filter } });
  };

  if (loading) return <div className="admin-loading">Loading Dashboard...</div>;
  if (error) return <div className="admin-error">Error: {error}</div>;

  return (
    <AdminLayout>
      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card clickable" onClick={() => handleNavigateToMessages('all')}>
          <div className="stat-icon customer-icon">👥</div>
          <div className="stat-info">
            <span className="stat-label">Total Submissions</span>
            <h3 className="stat-value">{stats.total || 0}</h3>
            <span className={`stat-trend ${stats.percentage_change >= 0 ? 'positive' : 'negative'}`}>
              {stats.percentage_change >= 0 ? '↑' : '↓'} {Math.abs(stats.percentage_change || 0)}% Since Last Month
            </span>
          </div>
        </div>
        <div className="stat-card clickable" onClick={() => handleNavigateToMessages('new')}>
          <div className="stat-icon orders-icon">📩</div>
          <div className="stat-info">
            <span className="stat-label">New Message</span>
            <h3 className="stat-value">{stats.unread_count || 0}</h3>
            <span className="stat-trend">{stats.read_count || 0} Read</span>
          </div>
        </div>
        <div className="stat-card black-card clickable" onClick={() => handleNavigateToMessages('all')}>
          <div className="stat-icon earning-icon">📊</div>
          <div className="stat-info">
            <span className="stat-label">Recent Activity (24h)</span>
            <h3 className="stat-value">{stats.recent_24h || 0}</h3>
            <span className="stat-trend">{stats.last_month_count || 0} This Month</span>
          </div>
        </div>
      </div>

      {/* Additional Status Cards */}
      <div className="stats-grid">
        <div className="stat-card clickable" onClick={() => handleNavigateToMessages('in-progress')}>
          <div className="stat-icon" style={{backgroundColor: '#ffa500'}}>⏳</div>
          <div className="stat-info">
            <span className="stat-label">In Progress</span>
            <h3 className="stat-value">{stats.in_progress_count || 0}</h3>
            <span className="stat-trend">Click to view all</span>
          </div>
        </div>
        <div className="stat-card clickable" onClick={() => handleNavigateToMessages('contacted')}>
          <div className="stat-icon" style={{backgroundColor: '#4169e1'}}>📞</div>
          <div className="stat-info">
            <span className="stat-label">Contacted</span>
            <h3 className="stat-value">{stats.contacted_count || 0}</h3>
            <span className="stat-trend">Click to view all</span>
          </div>
        </div>
        <div className="stat-card clickable" onClick={() => handleNavigateToMessages('resolved')}>
          <div className="stat-icon" style={{backgroundColor: '#28a745'}}>✅</div>
          <div className="stat-info">
            <span className="stat-label">Resolve</span>
            <h3 className="stat-value">{stats.resolved_count || 0}</h3>
            <span className="stat-trend">Click to view all</span>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        {/* Main Area Chart */}
        <div className="chart-box large-chart">
          <div className="chart-header">
            <h3>Overview - Monthly Trend</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={stats.monthly_trend || []} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#000000" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <Tooltip />
              <Area type="monotone" dataKey="pv" stroke="#000000" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Donut Chart */}
        <div className="chart-box donut-chart">
          <div className="chart-header">
            <h3>Service Distribution</h3>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={stats.service_distribution || []}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#000000"
                paddingAngle={5}
                dataKey="value"
              >
                {(stats.service_distribution || []).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="donut-center-text">
            <h3>{stats.total || 0}</h3>
            <span>Total</span>
          </div>
          <div className="custom-legend">
            {(stats.service_distribution || []).map((entry, index) => (
              <div key={`legend-${index}`} className="legend-item">
                <span 
                  className="legend-color" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>
                <span className="legend-label">{entry.name}</span>
                <span className="legend-value">({entry.value})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Submissions Table */}
      <div className="recent-submissions">
        <h3>Recent Contact Submissions</h3>
        <div className="table-wrapper">
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Service</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {(submissions || []).slice(0, 5).map((sub) => (
                <tr key={sub.id}>
                  <td>{new Date(sub.created_at).toLocaleDateString()}</td>
                  <td>{sub.name}</td>
                  <td>{sub.email}</td>
                  <td>{sub.service_display}</td>
                  <td>{sub.message.substring(0, 30)}...</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
