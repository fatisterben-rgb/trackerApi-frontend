import React, { useState } from "react";
import "./OrgJoined.css";
import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { NavLink } from "react-router-dom";

const OrganizationsJoined = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Sample organization data
  const organizations = [
    {
      id: 1,
      name: "Tech Solutions Inc",
      members: 150,
      role: "Member",
      joinDate: "2024-01-15",
      progress: 75,
      activeProjects: 5,
    },
    {
      id: 2,
      name: "Digital Innovators",
      members: 85,
      role: "Admin",
      joinDate: "2024-02-01",
      progress: 60,
      activeProjects: 3,
    },
    {
      id: 3,
      name: "Creative Hub",
      members: 120,
      role: "Member",
      joinDate: "2024-02-15",
      progress: 45,
      activeProjects: 4,
    },
    // Add more organizations as needed
  ];

  const filteredOrganizations = organizations.filter((org) =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

      <div className="organizations-container">
        <div className="organizations-header">
          <div className="header-left">
            <h1>
              <GroupIcon className="header-icon" /> Organizations Joined
            </h1>
            <div className="search-bar">
              <SearchIcon className="search-icon" />
              <input
                type="text"
                placeholder="Search organizations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="header-right">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Organizations</option>
              <option value="admin">Admin Role</option>
              <option value="member">Member Role</option>
            </select>
          </div>
        </div>

        <div className="organizations-stats">
          <div className="stat-card">
            <h3>Total Organizations</h3>
            <p className="stat-value">{organizations.length}</p>
            <p className="stat-change positive">+2 this month</p>
          </div>
          <div className="stat-card">
            <h3>Active Projects</h3>
            <p className="stat-value">
              {organizations.reduce((acc, org) => acc + org.activeProjects, 0)}
            </p>
            <p className="stat-change positive">+5 this month</p>
          </div>
          <div className="stat-card">
            <h3>Total Members</h3>
            <p className="stat-value">
              {organizations.reduce((acc, org) => acc + org.members, 0)}
            </p>
            <p className="stat-change positive">+45 this month</p>
          </div>
        </div>

        <div className="organizations-grid">
          {filteredOrganizations.map((org) => (
            <div key={org.id} className="organization-card">
              <div className="org-header">
                <h2>{org.name}</h2>
                <MoreVertIcon className="more-icon" />
              </div>
              <div className="org-content">
                <div className="org-info">
                  <p>
                    <strong>Role:</strong> {org.role}
                  </p>
                  <p>
                    <strong>Members:</strong> {org.members}
                  </p>
                  <p>
                    <strong>Joined:</strong>{" "}
                    {new Date(org.joinDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="org-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${org.progress}%` }}
                    ></div>
                  </div>
                  <p className="progress-text">{org.progress}% Complete</p>
                </div>
                <div className="org-projects">
                  <p>
                    <strong>Active Projects:</strong> {org.activeProjects}
                  </p>
                </div>
              </div>
              <div className="org-actions">
                <button className="view-btn">View Details</button>
                <button className="projects-btn">View Projects</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrganizationsJoined;
