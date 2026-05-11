import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Users from './components/Users';
import Teams from './components/Teams';
import Activities from './components/Activities';
import Workouts from './components/Workouts';
import Leaderboard from './components/Leaderboard';

function App() {
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
                  <Link className="nav-link" to="/users">
                    Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">
                    Teams
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">
                    Activities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">
                    Workouts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">
                    Leaderboard
                  </Link>
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
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <Link to="/users" className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title">👥 Users</h5>
                        <p className="card-text">View and manage user profiles</p>
                      </div>
                    </Link>
                    <Link to="/teams" className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title">🏢 Teams</h5>
                        <p className="card-text">Create and join teams</p>
                      </div>
                    </Link>
                    <Link to="/activities" className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title">📋 Activities</h5>
                        <p className="card-text">Track your activities</p>
                      </div>
                    </Link>
                    <Link to="/workouts" className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title">💪 Workouts</h5>
                        <p className="card-text">Log your workout sessions</p>
                      </div>
                    </Link>
                    <Link to="/leaderboard" className="card">
                      <div className="card-body text-center">
                        <h5 className="card-title">🏆 Leaderboard</h5>
                        <p className="card-text">Compete with other users</p>
                      </div>
                    </Link>
                  </div>
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
