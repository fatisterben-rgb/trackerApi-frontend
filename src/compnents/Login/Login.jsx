import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [userType, setUserType] = useState("employee");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Just log the data and navigate to home
    console.log("Login Data:", loginData);
    console.log("User Type:", userType);
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Login</h2>
          <Link to="/">
            <CloseIcon className="close-icon" />
          </Link>
        </div>
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label>Login As</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="user-type-select"
            >
              <option value="employee">Employee</option>
              <option value="organization">Organization</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
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
              placeholder="Enter your password"
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
            <Link to="/signup" className="switch-link">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
