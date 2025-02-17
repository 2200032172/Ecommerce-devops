import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./dashboard.css";
import ad1 from "../assests/ad1.jpg"; 

const ads = [ad1];

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentAd, setCurrentAd] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left" onClick={() => navigate("/")}>
          Shoppy
        </div>
        <div className="navbar-center">
          <span onClick={() => navigate("/women")}>Women</span>
          <span onClick={() => navigate("/men")}>Men</span>
          <span onClick={() => navigate("/kids")}>Kids</span>
        </div>
        <div className="navbar-right">
          <FaShoppingCart className="cart-icon" />
        </div>
      </nav>

      {/* Ads Section */}
      <div className="ads-container">
        <img src={ads[currentAd]} alt="Ad" className="ad-image" />
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Shoppy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
