import React, { useState, useEffect } from "react";
import "./TrackedOrg.css";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import PauseIcon from "@mui/icons-material/Pause";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

const TrackedOrganizations = () => {
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
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTimer, setActiveTimer] = useState(null);
  const [time, setTime] = useState(0);

  // Sample tracked organizations data
  const [trackedOrgs, setTrackedOrgs] = useState([
    {
      id: 1,
      name: "Tech Solutions Inc",
      project: "Website Redesign",
      timeTracked: "5h 30m",
      status: "In Progress",
      todayTime: 0,
      isTracking: false,
    },
    {
      id: 2,
      name: "Digital Innovators",
      project: "Mobile App Development",
      timeTracked: "3h 45m",
      status: "Paused",
      todayTime: 0,
      isTracking: false,
    },
  ]);

  // Timer effect
  useEffect(() => {
    let interval;
    if (activeTimer !== null) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        setTrackedOrgs((prevOrgs) =>
          prevOrgs.map((org) =>
            org.id === activeTimer
              ? { ...org, todayTime: org.todayTime + 1 }
              : org
          )
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeTimer]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleTimer = (id) => {
    if (activeTimer === id) {
      setActiveTimer(null);
      setTrackedOrgs((prevOrgs) =>
        prevOrgs.map((org) =>
          org.id === id ? { ...org, isTracking: false } : org
        )
      );
    } else {
      setActiveTimer(id);
      setTrackedOrgs((prevOrgs) =>
        prevOrgs.map((org) =>
          org.id === id ? { ...org, isTracking: true } : org
        )
      );
    }
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

      <div className="tracked-container">
        <div className="tracked-header">
          <div className="header-left">
            <h1>
              <TrackChangesIcon className="header-icon" /> Tracked Organizations
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
          <button className="new-tracking-btn">
            <PlayArrowIcon /> Start New Tracking
          </button>
        </div>

        <div className="tracking-stats">
          <div className="stat-card">
            <h3>Today's Total</h3>
            <p className="stat-value">{formatTime(time)}</p>
          </div>
          <div className="stat-card">
            <h3>Active Timers</h3>
            <p className="stat-value">
              {trackedOrgs.filter((org) => org.isTracking).length}
            </p>
          </div>
          <div className="stat-card">
            <h3>Total Organizations</h3>
            <p className="stat-value">{trackedOrgs.length}</p>
          </div>
        </div>

        <div className="tracked-grid">
          {trackedOrgs
            .filter((org) =>
              org.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((org) => (
              <div key={org.id} className="tracking-card">
                <div className="tracking-header">
                  <h2>{org.name}</h2>
                  <span className={`status-badge ${org.status.toLowerCase()}`}>
                    {org.status}
                  </span>
                </div>
                <div className="tracking-content">
                  <p className="project-name">Project: {org.project}</p>
                  <div className="time-display">
                    <div className="time-block">
                      <p>Today</p>
                      <h3>{formatTime(org.todayTime)}</h3>
                    </div>
                    <div className="time-block">
                      <p>Total</p>
                      <h3>{org.timeTracked}</h3>
                    </div>
                  </div>
                  <div className="tracking-actions">
                    <button
                      className={`timer-btn ${org.isTracking ? "active" : ""}`}
                      onClick={() => handleTimer(org.id)}
                    >
                      {org.isTracking ? (
                        <>
                          <StopIcon /> Stop
                        </>
                      ) : (
                        <>
                          <PlayArrowIcon /> Start
                        </>
                      )}
                    </button>
                    <button className="pause-btn">
                      <PauseIcon /> Pause
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TrackedOrganizations;
