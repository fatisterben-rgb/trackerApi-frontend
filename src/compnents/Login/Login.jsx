import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [userType, setUserType] = useState("employee");
  const [error, setError] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`/api/auth/${userType}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("userType", userType);
      localStorage.setItem("userData", JSON.stringify(data.user));

      navigate("/"); // Redirect to home page after successful login
    } catch (error) {
      setError(error.message);
    }
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
          {error && <p className="error-message">{error}</p>}
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
