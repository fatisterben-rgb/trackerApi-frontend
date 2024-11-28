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
      <div className="navbar">
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div className="components">
          <NavLink className="no-link-style" to="/">
            <div className="home">
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink className="no-link-style" to="/about">
            <div className="about">
              <p>About us</p>
            </div>
          </NavLink>
          <NavLink className="no-link-style" to="/contact">
            <div className="contact">
              <p>Contact Us</p>
            </div>
          </NavLink>
        </div>
        <div className="btns">
          <div className="login-btn">
            <NavLink to="/login">
              <button className="login">Login</button>
            </NavLink>
          </div>
          <div className="signup-btn">
            <NavLink to="/signup">
              <button className="signup">Signup</button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="dashboard">
        <h1 className="welcome-title">Welcome John (Employee)</h1>
        <div className="dashboard-grid">
          <NavLink className="no-link-style" to="/joined">
            <div className="card organization-card">
              <div className="card-content">
                <div className="card-header">
                  <GroupIcon className="card-icon" />
                  <h2>Organization Joined</h2>
                </div>
                <div className="progress-circle">
                  <span className="progress-value">70%</span>
                </div>
                <p className="subtitle">Last month: 45%</p>
              </div>
            </div>
          </NavLink>

          <NavLink className="no-link-style" to="/track">
            <div className="card tracked-card">
              <div className="card-content">
                <div className="card-header">
                  <TrackChangesIcon className="card-icon" />
                  <h2>Tracked Organizations</h2>
                </div>
                <div className="stats">
                  <p>
                    Total Tracked: <span>5.5h</span>
                  </p>
                  <p>
                    Total Hours: <span>9.5h</span>
                  </p>
                </div>
              </div>
            </div>
          </NavLink>

          <NavLink className="no-link-style" to="/manage">
            <div className="card manage-card">
              <div className="card-content">
                <div className="card-header">
                  <SettingsIcon className="card-icon" />
                  <h2>Manage Organizations</h2>
                </div>
                <p className="subtitle">Organizations</p>
              </div>
            </div>
          </NavLink>

          <NavLink className="no-link-style" to="/report">
            <div className="card reports-card">
              <div className="card-content">
                <div className="card-header">
                  <AssessmentIcon className="card-icon" />
                  <h2>View Reports</h2>
                </div>
                <div className="stats">
                  <p>
                    Track Time: <span>03.0m</span>
                  </p>
                  <p>
                    Total Hours: <span>03.0m</span>
                  </p>
                  <p>
                    Total Tracked: <span>03.0m</span>
                  </p>
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
