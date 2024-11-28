import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import BusinessIcon from "@mui/icons-material/Business";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
    organizationType: "employee",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login attempt with:", formData);
      // Redirect based on organization type
      if (formData.organizationType === "employee") {
        navigate("/employee"); // Redirect to employee page
      } else {
        navigate("/organization"); // Redirect to organization page
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Please enter your details to sign in</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
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
                placeholder="Enter your password"
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

          <div className="form-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={formData.rememberMe}
                onChange={(e) =>
                  setFormData({ ...formData, rememberMe: e.target.checked })
                }
              />
              <span>Remember me</span>
            </label>
            <NavLink to="/forgot-password" className="forgot-link">
              Forgot Password?
            </NavLink>
          </div>

          <button type="submit" className="signin-btn">
            Sign In
          </button>

          <p className="signup-prompt">
            Don't have an account?{" "}
            <NavLink to="/signup" className="signup-link">
              Sign up
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
