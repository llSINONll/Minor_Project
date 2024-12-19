import React, { useState } from 'react';
import './App.css'; // Import your CSS file

const App = () => {
  // State for managing active classes
  const [isActive, setIsActive] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);

  // Handlers for state changes
  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const handlePopupClick = () => {
    setIsPopupActive(true);
  };

  const handleCloseClick = () => {
    setIsPopupActive(false);
  };

  return (
    <div>
      <header>
        <h2 className="logo">SYSCODERS</h2>
        <nav className="navigation">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <button className="btnLogin-popup" onClick={handlePopupClick}>
            Login
          </button>
        </nav>
      </header>

     



      {/* Wrapper with dynamic classes */}
      <div className={`wrapper ${isActive ? 'active' : ''} ${isPopupActive ? 'active-popup' : ''}`}>
        <span className="icon-close" onClick={handleCloseClick}>
          <ion-icon name="close-outline"></ion-icon>
        </span>

        {/* Login Form */}
        <div className="form-box login">
          <h2>Login</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <input type="text" required />
              <label>Enrollment No.</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn">Login</button>
            <div className="login-register">
              <p>
                Don't have an account?{' '}
                <a href="#" className="register-link" onClick={handleRegisterClick}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div className="form-box register">
          <h2>Registration</h2>
          <form action="#">
            <div className="input-box">
              <span className="icon">
                <ion-icon name="mail-outline"></ion-icon>
              </span>
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <input type="text" required />
              <label>Enrollment No.</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <ion-icon name="lock-closed-outline"></ion-icon>
              </span>
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                I agree to the terms & conditions
              </label>
            </div>
            <button type="submit" className="btn">Register</button>
            <div className="login-register">
              <p>
                Already have an account?{' '}
                <a href="#" className="login-link" onClick={handleLoginClick}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default App;
