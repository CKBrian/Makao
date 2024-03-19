import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axios';

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

  return (
    <div className="main-header">
        <div onClick={() => navigate('/')} className="brand-logo brand-logo-name">Makao</div>

      <nav className="login-nav">
        <ul>
          {(
            <>
              <li>
                   <button className="btn login-btn">Ready to show it?</button>
              </li>
              <li>
                  <button onClick={() => navigate('/add-property')} className={`btn signup-btn ${isMenuOpen ? 'close' : ''}`}>Add Property</button>
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
