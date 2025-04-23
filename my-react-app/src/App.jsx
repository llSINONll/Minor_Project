import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import Networking from './Networking';
import Events from './Events';
import SuccessStory from './SuccessStory';
import Contact from './Contact';
import Feedback from './Feedback';
import AlumniDirectory from './AlumniDirectory';

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPopupActive, setIsPopupActive] = useState(false);

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

  const location = useLocation();

  const isRoutePage = location.pathname !== '/';

  return (
      <div>
        {/* Conditional content display */}
        {!isRoutePage && !isPopupActive && (
          <div className="content">
            <h1>Welcome to SYSCODES!</h1>
            <p>Explore our services, check out our latest updates, and more.</p>
          </div>
        )}

        <header>
          <h2 className="logo">SYSCODES</h2>
          <nav className="navigation">
            <Link to="/home" id="link">Home</Link>
            <Link to="/networking" id="link">Networking</Link>
            <Link to="/events" id="link">Events</Link>
            <Link to="/success-story" id="link">Success Story</Link>
            <Link to="/alumnidirectory" id="link">Alumni Directory</Link>
            <Link to="/contact" id="link">Contact</Link>
            <Link to="/feedback"id="link1">Feedback</Link>
            <button className="btnLogin-popup" onClick={handlePopupClick}>
              Login
            </button>
          </nav>
        </header>

        {/* Route Definitions */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/events" element={<Events />} />
          <Route path="/success-story" element={<SuccessStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/alumnidirectory" element={<AlumniDirectory />} />
        </Routes>

        {/* Login and Registration Popup */}
        {isPopupActive && (
          <div className={`wrapper ${isActive ? 'active' : ''} active-popup`}>
            <span className="icon-close" onClick={handleCloseClick}>
              <ion-icon name="close-outline"></ion-icon>
            </span>

            {/* Login Form */}
            {!isActive && (
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
            )}

            {/* Register Form */}
            {isActive && (
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
                      <ion-icon name="calendar-outline"></ion-icon>
                    </span>
                    <input type="text" required />
                    <label>Year of Graduation</label>
                  </div>
                  <div className="input-box">
                    <span className="icon">
                      <ion-icon name="business-outline"></ion-icon>
                    </span>
                    <input type="text" required />
                    <label>Branch</label>
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
            )}
          </div>
        )}
      </div>
  );
};

export default App;
