import React, { useState } from "react";
import "./register.css";
import Devops1 from '../assests/devops1.jpeg';

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = { name, email, phone, password };
  
    try {
      const response = await fetch('http://localhost:8081/register', {
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(userData) 
      });
      
  
      if (response.ok) {
        alert("Registration successful!");
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred!");
    }
  };
  

  return (
    <div className="register-page">
      <div className="register-card">
        <div className="register-left">
          <img src={Devops1} alt="Background" className="register-image" />
        </div>
        <div className="register-right">
          <h2 className="welcome-text">Join Us Today!</h2>
          <p className="subtext">Sign up to explore all features and get started.</p>
          <form onSubmit={handleRegister} className="register-form">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="register-button">Register</button>
          </form>
          <p className="login-text">
            Already have an account? <a href="login">Login Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
