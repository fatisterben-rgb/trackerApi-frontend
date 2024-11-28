import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import TimerIcon from "@mui/icons-material/Timer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const About = () => {
  const stats = [
    {
      icon: <BusinessIcon />,
      number: "500+",
      label: "Organizations",
    },
    {
      icon: <PeopleIcon />,
      number: "10,000+",
      label: "Active Users",
    },
    {
      icon: <TimerIcon />,
      number: "1M+",
      label: "Hours Tracked",
    },
    {
      icon: <EmojiEventsIcon />,
      number: "50+",
      label: "Awards",
    },
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "15+ years of experience in organizational management",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Former tech lead at major tech companies",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      description: "Passionate about creating user-centric solutions",
    },
  ];
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
          <NavLink to="/login">
            <button className="login1-btn">Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button className="signup1-btn">Signup</button>
          </NavLink>
        </div>
      </nav>

      <div className="about-container">
        <section className="hero-section">
          <h1>About TimeTracker Pro</h1>
          <p className="subtitle">Revolutionizing Time Management Since 2020</p>
        </section>

        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <h2>{stat.number}</h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            At TimeTracker Pro, we're dedicated to helping organizations and
            individuals maximize their productivity through intelligent time
            tracking solutions. Our platform combines cutting-edge technology
            with user-friendly design to create the most effective time
            management tool in the market.
          </p>
        </section>

        <section className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-avatar">{member.name.charAt(0)}</div>
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="description">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Constantly pushing boundaries to create better solutions</p>
            </div>
            <div className="value-card">
              <h3>Reliability</h3>
              <p>Providing stable and secure services you can count on</p>
            </div>
            <div className="value-card">
              <h3>User-Centric</h3>
              <p>Putting our users' needs at the heart of every decision</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
