// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import Login from './components/login';
import Register from './components/register';
import Women from './components/women';
import Dashboard from './components/dashboard';
import Shop from './components/shop';
import Cart from './components/cart';
import Checkout from './components/checkout';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/women" element={<Women />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    
  );
};

export default App;
