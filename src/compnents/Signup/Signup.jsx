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
    orgName: "", // for organization signup
  });
  const [userType, setUserType] = useState("employee");
  const [error, setError] = useState("");

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await fetch(`/api/auth/${userType}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Signup failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("userType", userType);
      localStorage.setItem("userData", JSON.stringify(data.user));

      navigate("/"); // Redirect to home page after successful signup
    } catch (error) {
      setError(error.message);
    }
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
          {error && <p className="error-message">{error}</p>}
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
