import React, { useState, useEffect } from "react";
import "./TrackedOrg.css";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import PauseIcon from "@mui/icons-material/Pause";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

const TrackedOrganizations = () => {
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
