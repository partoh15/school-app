import React from "react";
import "./signup.css"; // Import external CSS for styling


const signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1 className="university-title">West Wing University</h1>
        <div className="logo-container">
          <img
            src="../assets/logo.png"
            alt="University Logo"
            className="university-logo"
          />
        </div>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="form-input"
            />
          </div>
          <div className="form-buttons">
            <button type="button" className="forgot-password-btn">
              Forgot Password
            </button>
            <button type="submit" className="sign-in-btn">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
