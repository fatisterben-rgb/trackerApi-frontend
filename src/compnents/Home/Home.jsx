import React from "react";
import "./Home.css";
import CloudIcon from "@mui/icons-material/Cloud";
import SettingsIcon from "@mui/icons-material/Settings";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">
          <h1>logo</h1>
        </div>
        <div className="nav-search">
          <input type="text" placeholder="Search..." />
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

      <header className="landing-header">
        <h1>Track and manage your team with ease.</h1>
      </header>

      <div className="tracker-section">
        <div className="floating-elements">
          <CloudIcon className="cloud cloud1" />
          <CloudIcon className="cloud cloud2" />
          <CloudIcon className="cloud cloud3" />
          <SettingsIcon className="gear gear1" />
          <SettingsIcon className="gear gear2" />
          <SettingsIcon className="gear gear3" />
          <ListAltIcon className="list-icon" />
        </div>

        <div className="tracker-circle">
          <h2>Tracker API</h2>
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <h3>Home</h3>
          <p>Track and manage your team management</p>
          <NavLink to="/">
            <button className="feature-button">Get Started</button>
          </NavLink>
        </div>

        <div className="feature-card">
          <h3>About Us</h3>
          <p>
            At Tracker API, we empower organizations to streamline time
            tracking, enhance productivity, and manage teams effortlessly.
          </p>
          <NavLink to="/about">
            <button className="feature-button">About Us</button>
          </NavLink>
        </div>

        <div className="feature-card">
          <h3>Contact Us</h3>
          <p>
            Have questions, feedback, or need support? Our team is here to help.
            Reach out to us and let’s make your experience exceptional.
          </p>
          <NavLink to="/contact">
            <button className="feature-button">Contact Us</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
