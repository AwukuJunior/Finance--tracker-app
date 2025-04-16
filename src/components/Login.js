import React from 'react';
import './Login.css'; 

function Login() {
  const handleForgotPasswordClick = () => {
    window.location.href = '/forgot-password'; 
  };

  const handleSignUpClick = () => {
    window.location.href = '/sign-up'; 
  };

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="logo-container">LOGO HERE</div>
        <div className="login-page-text">Login Page</div>
      </div>
      <div className="right-section">
        <div className="login-form">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="" />
          </div>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input type="text" id="username" placeholder="" />
          </div>
          <div className="forgot-password">
            <span
              onClick={handleForgotPasswordClick}
              style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'none' }}
            >
              forgot password?
            </span>
          </div>
          <button type="submit" className="login-button">Log In</button>
          <div className="create-account">
            Create new account?{' '}
            <span
              onClick={handleSignUpClick}
              style={{ cursor: 'pointer', color: '#007bff', textDecoration: 'none' }}
            >
              Sign up.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;