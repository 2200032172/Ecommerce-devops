import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./women.css";

const categories = {
  women: [
    {
      id: 1,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRXHnR6r2gkUuOJY3s9S54JXq2cLGnIlwHLYn5rhSbWI7EEz-zyfWrqN97JK3q6MVugyHceeBD39xpHa1QszilRvn4PWnFPeA&usqp=CAE",
      name: "Campus sutra solid jacket for women",
      price: "₹1500",
      originalPrice: "₹2080.5",
    },
    {
      id: 2,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTJV8mo-lj2bscc3HSCaizhRuqUWLXTZEhv0EqGq88nXoTFHZji2Xq4PpFynRruGlBDqK-X0Jaw8NUfeAqWCJS2JrfvoQw951TTeHxVcjA&usqp=CAE",
      name: "Stylum Floral Print Fit & Flare Maxi Dress",
      price: "₹1000",
      originalPrice: "₹1500",
    },
    {
      id: 3,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnzPHWho9lRCHiXeEzv1ZniomPzfUTpFTUxmpcsFvrBks_0xGmrOu5Nf9uvQA9Qa0x01kNgXf2sValFsGvG6gR_-4BbJDAXyh8aOOdQ2O-wX5I3YkJdPHe&usqp=CAE",
      name: "Slenor Floral Print Georgette Peplum Top",
      price: "₹850",
      originalPrice: "₹1200.5",
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSZKzac2jDbsMe59BxqGuEqVn9jL_HqVQ1zUVVW--6e7k8bduVzs1GM0YSbU20lOAEunBVtuG1MmySg6LUBQg_HkhoITw1qx3V4QchfTH0&usqp=CAE",
      name: "Tokyo Talkies Full Sleeve Washed Women Jacket",
      price: "₹960",
      originalPrice: "₹2000",
    },
  ],
  men: [
    {
      id: 5,
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQgvHEkXXyJZOoQTtylA2z_kmRPpOsZpJ4Z1JOlRruSvOWc5_rqTlsHKSKMHZhCETBGWIdES3n7aEig3giZS46ADXc_t90ebVXFii5UDZ9IeBgXWsKsmdcC&usqp=CAE",
      name: "Men's Leather Jacket",
      price: "₹2000",
      originalPrice: "₹3500",
    },
    {
      id: 6,
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTecfAdMM2ZXBkFM0xevJ5Lt_ZVQvoNHC_NrNfe5UM-8is1XTND_EDK44RMC5OWLXwP4JuBMGt5HMcDASLvSOoQUCm998-8uE5PMlTzBg8&usqp=CAE",
      name: "Casual Cotton Shirt",
      price: "₹999",
      originalPrice: "₹1500",
    },
    {
      id: 7,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSUx5c9EvWDkpcuewTNp7zwCTOOE-IOOr5x-kEXxEpPQLDG2VtOefh7tuhA5HDPFN01Cin3rXMrcoGnRbVd0dQg-15VOJDAXP7pqHfKlWc&usqp=CAE",
      name: "Casual Checks Shirt",
      price: "₹890",
      originalPrice: "₹1300",
    },
    {
      id: 7,
      image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTNDHG2fNLygvseAMGxxuidiXSDtNADEzijWxVkCt5GlXmPAu0_d_Mnn2qHaQKY9ovkHoSBrWmacS883JYtItOQuCiHLlpwcRV_72iDAV-TCUUHESJzlffz&usqp=CAE",
      name: "The Souled Store Men Printed Casual White Shirt",
      price: "₹1000",
      originalPrice: "₹2300",
    },
  ],
  
};

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState("women");
  const navigate = useNavigate();

  return (
    <div className="page-container">
      {/* Navbar */}
      <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>Shoppy</div>
        <ul className="nav-links">
          <li onClick={() => setSelectedCategory("women")}>Women</li>
          <li onClick={() => setSelectedCategory("men")}>Men</li>
          
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      {/* Product Section */}
      <div className="product-section">
        <h2 className="section-title">
          POPULAR IN {selectedCategory.toUpperCase()}
        </h2>
        <div className="underline"></div>
        <div className="product-grid">
          {categories[selectedCategory].map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <p className="product-name">{product.name}</p>
              <p className="product-price">
                <strong>{product.price}</strong>{" "}
                <span className="original-price">{product.originalPrice}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Login Section */}
        <div className="login-section">
          <button className="login-button" onClick={() => navigate("/login")}>
            Login to Try More
          </button>
          <div className="down-arrow">↓</div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
