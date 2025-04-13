import React, { useState } from "react";
import "./dashboard.css";
import bgimage from '../assests/bgimage1.jpg'
import { FaSearch, FaShoppingBag } from "react-icons/fa";
const Dashboard = () => {
  const [modalData, setModalData] = useState(null);

  const popularItems = [
    {
      id: 1,
      img: "https://theweaversshop.com/cdn/shop/files/DSC_4309_1_11zon_533x.jpg?v=1742276657",
      title: "Crepe Salwar and Suit",
      description: "Classic and stylish Salwar and suit for everyday wear.",
      price: "Rs. 8,999.00",
    },
    {
      id: 2,
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSARg29KBjrQXZHMYmYuvwDo_9ff4gR9rfHRyACAWoTfRKgBJrWtgy2iygxsCwQz7WrmOYTQv6KXrZarV9ELiAy_bRPa8tMAlhpf72_U1TTaqmREKlarRcWAg",
      title: "Rimeline Floral Printed Notch-Neck Straight Kurta",
      description: "Comfortable  for all-day wear.",
      price: "Rs. 999.00",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ25QNLL2nrxiO1VysGxtm18Dx6PfSwDmBjqcxilthxnZyVd2Hr3lG3UtPgi-ZiVy_f8Xv4LwUY-xNnJD9g-JBMTb4YlK9OAl2_TT5DUV8",
      title: "Women's Embroidered Anarkali Kurta Suit Set",
      description: "Comfortable  for all-day wear.",
      price: "Rs. 1900.99",
    },
    {
      id: 4,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo0yaciI9mdd6RIu86_0ESDRFGMDjSO4MTX6B4QEZp4KV_ma_GMReA2ZFcw2CzSdaHKgDjS9Gp3UdeuJEMRDHqCMXtO2b0WODagzPAKMI",
      title: "Men's Solid Regular Fit Button Down Shirt",
      description: "Men's Solid Regular Fit Button Down Shirt.",
      price: "Rs. 1050.00",
    },
  ];

  return (
    <div className="dashboard">
      {/* Navbar */}
      <header className="navbar-container">
        <nav className="navbar">
          <div className="logo-container">
            <div className="logo-shoppy">SHOPPY</div>
            <div className="logo-wardrobe">Wardrobe</div>
          </div>
          <ul className="nav-links center-links">
            <li><a href="dashboard">Home</a></li>
            <li><a href="shop">Shop</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <div className="nav-icons">
            
            <div className="cart-icon-container">
    <FaShoppingBag className="icon" />
    <span className="cart-badge">0</span>
  </div>
          </div>
        </nav>
      </header>
      {/* Hero Section */}
      <header className="hero" style={{ backgroundImage: `url(${bgimage})` }}>
        <div className="hero-content">
          <p className="hero-category">CASUAL & EVERYDAY</p>
          <h1 className="hero-title">Effortlessly Blend <span>Comfort & Style!</span></h1>
           <p className="hero-description">
            Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures.
          </p>
          <button className="hero-button">VIEW COLLECTION</button>
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
      <section className="feature-slider">
  <div className="feature-card">
    <div className="feature-icon">💳</div>
    <div className="feature-title">Secure Payments</div>
    <div className="feature-desc">Shop with confidence knowing that your transactions are safeguarded.</div>
  </div>
  <div className="feature-card">
    <div className="feature-icon">🚚</div>
    <div className="feature-title">Free Shipping</div>
    <div className="feature-desc">Savor the liberty of complimentary shipping on every order.</div>
  </div>
  <div className="feature-card">
    <div className="feature-icon">🔁</div>
    <div className="feature-title">Easy Returns</div>
    <div className="feature-desc">With our hassle-free returns, changing your mind is easy.</div>
  </div>
  <div className="feature-card">
    <div className="feature-icon">📦</div>
    <div className="feature-title">Order Tracking</div>
    <div className="feature-desc">Stay in the loop – track your order from checkout to your doorstep.</div>
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
