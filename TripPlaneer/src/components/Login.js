import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirection
import axios from "axios";
import "./Login.css"; // Optional: For styling

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // For navigation after login

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
  
    try {
      const response = await axios.post("https://localhost:44345/api/auth/login", formData);
      
     console.log("Login Response:", response.data); // ✅ Debugging ke liye response print karo
      
      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate("/dashboard"), 2000);
      
    } catch (error) {
      console.error("Login Error:", error.response); // ✅ Error ka pura response dekho
      setMessage(error.response?.data?.message || "Login failed! Please check your credentials.");
    }
  };
  
  return (
    <div className="login-container">
      <h2>Login</h2>
      
      {message && <p className="message">{message}</p>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="login-btn">Login</button>
      </form>

      <p className="register-link">
        Don't have an account? <a href="/register">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
