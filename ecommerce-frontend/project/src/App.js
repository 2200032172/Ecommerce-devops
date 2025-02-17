// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import Login from './components/login';
import Register from './components/register';
import Women from './components/women';
import Dashboard from './components/dashboard';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/women" element={<Women />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    
  );
};

export default App;
