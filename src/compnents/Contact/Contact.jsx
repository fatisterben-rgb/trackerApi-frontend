import React, { useState } from "react";
import "./Contact.css";
import { NavLink } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form data:", contactForm);
    // Add your contact form submission logic here
    alert("Thank you for your message! We'll get back to you soon.");
    setContactForm({ name: "", email: "", subject: "", message: "" });
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
          <NavLink to="/login">
            <button className="login1-btn">Login</button>
          </NavLink>
          <NavLink to="/signup">
            <button className="signup1-btn">Signup</button>
          </NavLink>
        </div>
      </nav>
      <div className="contact-container">
        <section className="contact-hero">
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you. Please fill out this form or use our
            contact information below.
          </p>
        </section>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-items">
              <div className="info-item">
                <LocationOnIcon className="info-icon" />
                <div>
                  <h3>Address</h3>
                  <p>123 Business Avenue</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>

              <div className="info-item">
                <PhoneIcon className="info-icon" />
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                  <p>+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="info-item">
                <EmailIcon className="info-icon" />
                <div>
                  <h3>Email</h3>
                  <p>support@timetracker.com</p>
                  <p>info@timetracker.com</p>
                </div>
              </div>

              <div className="info-item">
                <AccessTimeIcon className="info-icon" />
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h2>Send us a Message</h2>
            <form onSubmit={handleContactSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: e.target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  required
                  value={contactForm.subject}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, subject: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  required
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  rows="5"
                />
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
