import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Signup.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import BusinessIcon from "@mui/icons-material/Business";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    organizationType: "employee",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};

    // Validate full name
    if (!formData.fullName.trim()) {
      tempErrors.fullName = "Full name is required";
    }

    // Validate email
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }

    // Validate password
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    // Validate confirm password
    if (!formData.confirmPassword) {
      tempErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Signup attempt with:", formData);
      navigate("/login");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1>Create Account</h1>
          <p>Please fill in the details to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>Full Name</label>
            <div className="input-wrapper">
              <PersonOutlineIcon className="field-icon" />
              <input
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  if (errors.fullName) setErrors({ ...errors, fullName: "" });
                }}
                className={errors.fullName ? "error-input" : ""}
                required
              />
            </div>
            {errors.fullName && (
              <span className="error-message">{errors.fullName}</span>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>
            <div className="input-wrapper">
              <EmailIcon className="field-icon" />
              <input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: "" });
                }}
                className={errors.email ? "error-input" : ""}
                required
              />
            </div>
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <LockIcon className="field-icon" />
              <input
                type="password"
                placeholder="Create password (min. 6 characters)"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  if (errors.password) setErrors({ ...errors, password: "" });
                }}
                className={errors.password ? "error-input" : ""}
                required
              />
            </div>
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <div className="form-group">
            <label>Confirm Password</label>
            <div className="input-wrapper">
              <LockIcon className="field-icon" />
              <input
                type="password"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={(e) => {
                  setFormData({ ...formData, confirmPassword: e.target.value });
                  if (errors.confirmPassword)
                    setErrors({ ...errors, confirmPassword: "" });
                }}
                className={errors.confirmPassword ? "error-input" : ""}
                required
              />
            </div>
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <div className="form-group">
            <label>Account Type</label>
            <div className="account-type-selector">
              <BusinessIcon className="type-icon" />
              <div className="radio-group">
                <label className="radio-label">
                  <input
                    type="radio"
                    name="organizationType"
                    value="employee"
                    checked={formData.organizationType === "employee"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        organizationType: e.target.value,
                      })
                    }
                    required
                  />
                  <span>Employee</span>
                </label>
                <label className="radio-label">
                  <input
                    type="radio"
                    name="organizationType"
                    value="organization"
                    checked={formData.organizationType === "organization"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        organizationType: e.target.value,
                      })
                    }
                  />
                  <span>Organization</span>
                </label>
              </div>
            </div>
          </div>

          <button type="submit" className="signup-btn">
            Create Account
          </button>

          <p className="login-prompt">
            Already have an account?{" "}
            <NavLink to="/login" className="login-link">
              Sign in
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
