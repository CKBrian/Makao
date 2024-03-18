import './header.css';
import React, { useState } from 'react';

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <li><a className=''>Login</a></li>
          <li>
            <button className={`btn ${isMenuOpen ? 'close': ''}`} >Sign up</button>
          </li>
        </ul>
      </nav>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list mobile-nav-icon" viewBox="0 0 16 16" onClick={toggleMenu}>
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
    </div>
  );
}

export default MobileMenu;
