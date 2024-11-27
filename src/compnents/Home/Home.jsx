import React, { useState } from "react";
import "./Home.css";
import GroupIcon from "@mui/icons-material/Group";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import { NavLink } from "react-router-dom";

const Home = () => {
  // For demo purposes, toggle between employee and org dashboard
  const [userType] = useState("employee"); // Change to "organization" to see org dashboard

  const EmployeeDashboard = () => (
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
  );

  const OrganizationDashboard = () => (
    <div className="dashboard-grid">
      <NavLink className="no-link-style" to="/employees">
        <div className="card employees-card">
          <div className="card-content">
            <div className="card-header">
              <PeopleIcon className="card-icon" />
              <h2>Employees</h2>
            </div>
            <div className="stats">
              <p>
                Total Employees: <span>25</span>
              </p>
              <p>
                Active Today: <span>18</span>
              </p>
            </div>
          </div>
        </div>
      </NavLink>

      <NavLink className="no-link-style" to="/projects">
        <div className="card projects-card">
          <div className="card-content">
            <div className="card-header">
              <WorkIcon className="card-icon" />
              <h2>Projects</h2>
            </div>
            <div className="stats">
              <p>
                Active Projects: <span>8</span>
              </p>
              <p>
                Completed: <span>12</span>
              </p>
            </div>
          </div>
        </div>
      </NavLink>

      <NavLink className="no-link-style" to="/manage-employees">
        <div className="card manage-employees-card">
          <div className="card-content">
            <div className="card-header">
              <PersonAddIcon className="card-icon" />
              <h2>Manage Employees</h2>
            </div>
            <p className="subtitle">Add/Remove Employees</p>
          </div>
        </div>
      </NavLink>

      <NavLink className="no-link-style" to="/org-reports">
        <div className="card org-reports-card">
          <div className="card-content">
            <div className="card-header">
              <AssessmentIcon className="card-icon" />
              <h2>Organization Reports</h2>
            </div>
            <div className="stats">
              <p>
                Total Work Hours: <span>450h</span>
              </p>
              <p>
                This Month: <span>120h</span>
              </p>
              <p>
                Efficiency: <span>85%</span>
              </p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );

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
        <h1 className="welcome-title">
          Welcome{" "}
          {userType === "employee"
            ? "John (Employee)"
            : "TechCorp (Organization)"}
        </h1>
        {userType === "employee" ? (
          <EmployeeDashboard />
        ) : (
          <OrganizationDashboard />
        )}
      </div>
    </>
  );
};

export default Home;
