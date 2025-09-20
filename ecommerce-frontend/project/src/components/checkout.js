import React, { useState } from "react";
import { useCart } from "../context/cartcontext";
import { Link } from "react-router-dom";
import './checkout.css';

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    // Here you can clear the cart or redirect
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty</h2>
        <Link to="/shop" className="shop-link">
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="checkout-content">
        <div className="checkout-cart-summary">
          <h2>Order Summary</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="checkout-item">
              <span>{item.name} (Size: {item.size})</span>
              <span>Qty: {item.qty}</span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}
          <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
        </div>

        <div className="checkout-form">
          <h2>Shipping Details</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Address:
              <textarea name="address" value={formData.address} onChange={handleChange} required />
            </label>
            <button type="submit" className="place-order-btn">Place Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
