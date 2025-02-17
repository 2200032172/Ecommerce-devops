import React from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';
import backgroundImage from '../assests/bgimage.jpg';

const Navbar = () => {
  const navigate = useNavigate(); // Define navigate here

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        {/* Left Section */}
        <div className="navbar-left">
          <span className="brand-name" onClick={() => navigate('/')}>Shoppy</span>
        </div>

        {/* Right Section */}
        <button className="login-button" onClick={() => navigate('/login')}>Login</button>
      </nav>

      {/* Background Image Section */}
      <div
        className="background-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-container">
          <h1 className="heading">Discover Your Style</h1>
          <p className="description">Unleash your unique fashion with us.</p>
          <button className="try-button" onClick={() => navigate('/women')}>
            Try New Styles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
