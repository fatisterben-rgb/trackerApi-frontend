import React, { useState } from "react";
import "./OrgJoined.css";
import GroupIcon from "@mui/icons-material/Group";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const OrganizationsJoined = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const switchToSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const switchToLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", loginData);
    setIsLoginOpen(false);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Signup data:", signupData);
    setIsSignupOpen(false);
  };
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
            <button className="login" onClick={() => setIsLoginOpen(true)}>
              Login
            </button>
          </div>
          <div className="signup-btn">
            <button className="signup" onClick={() => setIsSignupOpen(true)}>
              Signup
            </button>
          </div>
        </div>
      </div>
      {/* Login Modal */}
      {isLoginOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Login</h2>
              <CloseIcon
                className="close-icon"
                onClick={() => setIsLoginOpen(false)}
              />
            </div>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  required
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  required
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </div>
              <button type="submit" className="submit-btn">
                Login
              </button>
              <p className="account">
                Don't have an account?{" "}
                <span onClick={switchToSignup} className="switch-link">
                  Sign up
                </span>
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Sign Up</h2>
              <CloseIcon
                className="close-icon"
                onClick={() => setIsSignupOpen(false)}
              />
            </div>
            <form onSubmit={handleSignupSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  required
                  value={signupData.name}
                  onChange={(e) =>
                    setSignupData({ ...signupData, name: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  required
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  required
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  required
                  value={signupData.confirmPassword}
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
              <p className="account">
                Already have an account?{" "}
                <span onClick={switchToLogin} className="switch-link">
                  Login
                </span>
              </p>
            </form>
          </div>
        </div>
      )}

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
