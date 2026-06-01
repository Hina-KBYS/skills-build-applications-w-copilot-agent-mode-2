import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Teams from './components/Teams';
import Activities from './components/Activities';
import Workouts from './components/Workouts';
import Leaderboard from './components/Leaderboard';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ type: 'activity', title: '', description: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Sample form submitted:', formData);
    setShowModal(false);
    setFormData({ type: 'activity', title: '', description: '' });
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  console.log('App loaded with backend host:', process.env.REACT_APP_CODESPACE_NAME);

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="OctoFit Logo" />
              OctoFit Tracker
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/users">
                    Users
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/teams">
                    Teams
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/activities">
                    Activities
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/workouts">
                    Workouts
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`} to="/leaderboard">
                    Leaderboard
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route
              path="/"
              element={
                <div className="container">
                  <h1>Welcome to OctoFit Tracker</h1>
                  <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2rem' }}>
                    Your personal fitness and activity tracking application. Track your workouts, manage your teams, and climb the leaderboard!
                  </p>
                  <div className="mb-4">
                    <button className="btn btn-primary me-2" onClick={openModal}>
                      Open sample form modal
                    </button>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <NavLink to="/users" className="card text-decoration-none h-100">
                      <div className="card-body text-center d-flex flex-column justify-content-center">
                        <h5 className="card-title">👥 Users</h5>
                        <p className="card-text">View and manage user profiles</p>
                      </div>
                    </NavLink>
                    <NavLink to="/teams" className="card text-decoration-none h-100">
                      <div className="card-body text-center d-flex flex-column justify-content-center">
                        <h5 className="card-title">🏢 Teams</h5>
                        <p className="card-text">Create and join teams</p>
                      </div>
                    </NavLink>
                    <NavLink to="/activities" className="card text-decoration-none h-100">
                      <div className="card-body text-center d-flex flex-column justify-content-center">
                        <h5 className="card-title">📋 Activities</h5>
                        <p className="card-text">Track your activities</p>
                      </div>
                    </NavLink>
                    <NavLink to="/workouts" className="card text-decoration-none h-100">
                      <div className="card-body text-center d-flex flex-column justify-content-center">
                        <h5 className="card-title">💪 Workouts</h5>
                        <p className="card-text">Log your workout sessions</p>
                      </div>
                    </NavLink>
                    <NavLink to="/leaderboard" className="card text-decoration-none h-100">
                      <div className="card-body text-center d-flex flex-column justify-content-center">
                        <h5 className="card-title">🏆 Leaderboard</h5>
                        <p className="card-text">Compete with other users</p>
                      </div>
                    </NavLink>
                  </div>

                  {showModal && (
                    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1" role="dialog">
                      <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Create New Item</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                          </div>
                          <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                              <div className="mb-3">
                                <label htmlFor="type" className="form-label">Item Type</label>
                                <select
                                  id="type"
                                  name="type"
                                  className="form-select"
                                  value={formData.type}
                                  onChange={handleInputChange}
                                >
                                  <option value="activity">Activity</option>
                                  <option value="workout">Workout</option>
                                  <option value="team">Team</option>
                                  <option value="user">User</option>
                                </select>
                              </div>
                              <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="title"
                                  name="title"
                                  value={formData.title}
                                  onChange={handleInputChange}
                                  placeholder="Enter title"
                                  required
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                  className="form-control"
                                  id="description"
                                  name="description"
                                  value={formData.description}
                                  onChange={handleInputChange}
                                  rows="3"
                                  placeholder="Enter description"
                                />
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                Cancel
                              </button>
                              <button type="submit" className="btn btn-primary">
                                Save Item
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              }
            />
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2024 OctoFit Tracker. All rights reserved. | Track, Compete, Succeed! 🚀</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
