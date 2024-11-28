import React from "react";
import "./Organization.css";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import WorkIcon from "@mui/icons-material/Work";
import PeopleIcon from "@mui/icons-material/People";
import { NavLink } from "react-router-dom";

const Organization = () => {
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
        <h1 className="welcome-title">Welcome TechCorp (Organization)</h1>
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
      </div>
    </>
  );
};

export default Organization;
