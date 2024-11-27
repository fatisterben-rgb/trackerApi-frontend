import React, { useState } from "react";
import "./Signup.css";
import { useNavigate, Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Signup = () => {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    orgName: "",
  });
  const [userType, setUserType] = useState("employee");

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // Log the signup data
    console.log("Signup Data:", signupData);
    console.log("User Type:", userType);

    // Navigate to home page
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h2>Sign Up</h2>
          <Link to="/">
            <CloseIcon className="close-icon" />
          </Link>
        </div>
        <form onSubmit={handleSignupSubmit}>
          <div className="form-group">
            <label>Register As</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="user-type-select"
            >
              <option value="employee">Employee</option>
              <option value="organization">Organization</option>
            </select>
          </div>
          {userType === "organization" && (
            <div className="form-group">
              <label>Organization Name</label>
              <input
                type="text"
                required
                placeholder="Enter organization name"
                value={signupData.orgName}
                onChange={(e) =>
                  setSignupData({ ...signupData, orgName: e.target.value })
                }
              />
            </div>
          )}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              required
              placeholder="Enter your full name"
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
              placeholder="Enter your email"
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
              placeholder="Enter password"
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
              placeholder="Confirm password"
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
            <Link to="/login" className="switch-link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
