import React, { useState } from "react";
import "./Home.css";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import SettingsIcon from "@mui/icons-material/Settings";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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
      <div className="dashboard">
        <h1 className="welcome-title">Welcome JOHN</h1>
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
          {/* 
          <NavLink className="no-link-style" to="/joined">
            <div className="card joined-card">
              <div className="card-content">
                <div className="card-header">
                  <PersonAddIcon className="card-icon" />
                  <h2>Joined</h2>
                </div>
                <div className="progress-circle">
                  <span className="progress-value">8/9</span>
                </div>
              </div>
            </div>
          </NavLink> */}

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

export default Home;
