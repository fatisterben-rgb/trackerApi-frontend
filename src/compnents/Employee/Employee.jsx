import React from "react";
import "./Employee.css";
import GroupIcon from "@mui/icons-material/Group";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { NavLink } from "react-router-dom";

const Employee = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About us</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className="auth-buttons">
          <NavLink className="no-links" to="/login">
            <button className="login1-btn">Login</button>
          </NavLink>
          <NavLink className="no-links" to="/signup">
            <button className="signup1-btn">Signup</button>
          </NavLink>
        </div>
      </nav>

      <div className="dashboard-container">
        <h1 className="welcome-title">Welcome JOHN</h1>

        <div className="cards-grid">
          <NavLink className="no-links" to="/joined">
            <div className="card organization-card">
              <div className="card-header">
                <GroupIcon className="card-icon" />
                <h2>Organization Joined</h2>
              </div>
              <div className="progress-circle">
                <div className="circle">
                  <span className="percentage">70%</span>
                </div>
              </div>
              <p className="last-month">Last month: 45%</p>
            </div>
          </NavLink>

          <NavLink className="no-links" to="/track">
            <div className="card tracked-card">
              <div className="card-header">
                <TrackChangesIcon className="card-icon" />
                <h2>Tracked Organizations</h2>
              </div>
              <div className="stats">
                <div className="stat-rows">
                  <span>Total Tracked:</span>
                  <span className="value">5.5h</span>
                </div>
                <div className="stat-rows">
                  <span>Total Hours:</span>
                  <span className="value">9.5h</span>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink className="no-links" to="/manage">
            <div className="card manage-card">
              <div className="card-header">
                <SettingsIcon className="card-icon" />
                <h2>Manage Organizations</h2>
              </div>
              <p className="subtitle">Organizations</p>
            </div>
          </NavLink>
          <NavLink className="no-links" to="/report">
            <div className="card reports-card">
              <div className="card-header">
                <AssessmentIcon className="card-icon" />
                <h2>View Reports</h2>
              </div>
              <div className="stats">
                <div className="stat-rows">
                  <span>Track Time:</span>
                  <span className="value">03.0m</span>
                </div>
                <div className="stat-rows">
                  <span>Total Hours:</span>
                  <span className="value">03.0m</span>
                </div>
                <div className="stat-rows">
                  <span>Total Tracked:</span>
                  <span className="value">03.0m</span>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Employee;
