import React, { useState } from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import TimerIcon from "@mui/icons-material/Timer";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const About = () => {
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
