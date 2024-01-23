import React from 'react';
import './Navbar.css'; // Import the custom CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCannabis, faSignInAlt, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Icon icon={faCannabis} size="lg" />
        Sesh
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
      </div>
      <div className="navbar-actions">
        <button className="signin-btn">
          <FontAwesomeIcon icon={faSignInAlt} /> Sign In
        </button>
        <button className="login-btn">
          <FontAwesomeIcon icon={faSignIn} /> Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
