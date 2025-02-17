import React, { useState } from "react";
import "./login.css";
import Devops1 from '../assests/devops1.jpeg';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
  
    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
  
      const data = await response.json();
      console.log("Response Data:", data);
  
      if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        window.location.href = "/dashboard";
      } else {
        alert(data.message || "Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred! Check console for details.");
    }
  };
  
  

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-left">
          <img src={Devops1} alt="Background" className="register-image" />
        </div>
        <div className="login-right">
          <h2 className="welcome-text">Welcome Back!</h2>
          <p className="subtext">
            Log in now to explore all the features and see what's new.
          </p>
          <form onSubmit={handleLogin} className="login-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            
            <button type="submit" className="login-button">Login</button>
          </form>
          <p className="register-text">
            Don’t have an account? <a href="register">Register Now</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
