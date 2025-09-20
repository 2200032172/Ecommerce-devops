import React from "react";
import { useCart } from "../context/cartcontext";
import { Link } from "react-router-dom";
import './cart.css';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <Link to="/shop" className="shop-link">
          Go to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Size: {item.size}</p>
              <p>Price: ₹{item.price.toFixed(2)}</p>
              <p>Qty: {item.qty}</p>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <h3>Total: ₹{totalPrice.toFixed(2)}</h3>
        <div className="cart-buttons">
          <Link to="/shop" className="continue-btn">
            <button className="continue-btn">Continue Shopping</button>
          </Link>
          <button className="checkout-btn">
  <Link to="/checkout" style={{ color: 'white', textDecoration: 'none' }}>
    Proceed to Checkout
  </Link>
</button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
