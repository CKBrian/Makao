import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axios';

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.get('/users/check-auth/')
      .then(response => {
        setIsLoggedIn(true);
      })
      .catch(error => {
        setIsLoggedIn(false);
      });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    axiosInstance.post('/users/logout/')
      .then(response => {
        setIsLoggedIn(false);
        navigate('/');
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <div className="main-header">
      <a href="/" className="brand-logo">
        <div className="brand-logo-name">Makao</div>
      </a>
      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav">
          <li><a href="">About</a></li>
          <li><a href="">Rent</a></li>
          <li><a href="">Community</a></li>
          <li><a href="">Advertise</a></li>
        </ul>
      </nav>
      <nav className="login-nav">
        <ul>
          {isLoggedIn ? (
            <li>
              <button className="btn" onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <>
              <li>
                <a href="/login" className="">
                  <button className="btn login-btn">Login</button>
                </a>
              </li>
              <li>
                <a href='/signup'>
                  <button className={`btn signup-btn ${isMenuOpen ? 'close' : ''}`}>Sign up</button>
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list mobile-nav-icon" viewBox="0 0 16 16" onClick={toggleMenu}>
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
    </div>
  );
}

export default MobileMenu;
