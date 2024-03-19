import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axios';
import Cookie from 'universal-cookie';


const cookies = new Cookie;

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const refresh_token = localStorage.getItem('refresh_token');

    if (refresh_token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    axiosInstance.post('users/logout/blacklist/', {
      refresh_token: localStorage.getItem('refresh_token')
    })
      .then(response => {
        if (response.status === 205) {
        localStorage.removeItem('refresh_token');
        cookies.remove('access_token');
        setIsLoggedIn(false);
        navigate('/');
        };
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <div className="main-header">
      <span className="brand-logo" onClick={() => navigate('/')}>
        <div className="brand-logo-name">Makao</div>
      </span>
      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav">
          <li><a href="/about">About</a></li>
          <li><a href="/listings">Rent</a></li>
          <li><a href="/community">Community</a></li>
          <li><a href="/advertise">Advertise</a></li>
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
