import React, { useState } from "react";
import "./dashboard.css";

const Dashboard = () => {
  const [modalData, setModalData] = useState(null);

  const popularItems = [
    {
      id: 1,
      img: "https://websitedemos.net/clothing-store-02/wp-content/uploads/sites/1447/2024/03/img-01-a-400x488.jpg",
      title: "Casual Denim Jacket",
      description: "Classic and stylish denim jacket for everyday wear.",
      price: "$49.99",
    },
    {
      id: 2,
      img: "https://source.unsplash.com/300x300/?fashion,sneakers",
      title: "Sporty Sneakers",
      description: "Comfortable and trendy sneakers for all-day wear.",
      price: "$69.99",
    },
    {
      id: 3,
      img: "https://source.unsplash.com/300x300/?fashion,tshirt",
      title: "Graphic Tee",
      description: "Soft cotton T-shirt with a stylish graphic print.",
      price: "$29.99",
    },
    {
      id: 4,
      img: "https://source.unsplash.com/300x300/?fashion,joggers",
      title: "Relaxed Fit Joggers",
      description: "Premium joggers for a relaxed and modern look.",
      price: "$39.99",
    },
  ];

  return (
    <div className="dashboard">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Shoppy</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="icons">
          <span className="search-icon">🔍</span>
          <span className="cart-icon">🛒</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <p className="category">CASUAL & EVERYDAY</p>
          <h1>Effortlessly Blend Comfort & Style!</h1>
          <p className="description">
            Discover cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures.
          </p>
          <button className="cta-button">View Collection</button>
        </div>
      </header>

      {/* Most Popular Section */}
      <section className="most-popular">
        <h2 className="popular-title">Most Popular</h2>
        <div className="popular-grid">
          {popularItems.map((item) => (
            <div key={item.id} className="card" onClick={() => setModalData(item)}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal for Item Details */}
      {modalData && (
        <div className="modal-overlay" onClick={() => setModalData(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setModalData(null)}>×</span>
            <img src={modalData.img} alt={modalData.title} />
            <h3>{modalData.title}</h3>
            <p>{modalData.description}</p>
            <p className="price">{modalData.price}</p>
            <h4>Size Chart</h4>
            <select>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>XL</option>
            </select>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
