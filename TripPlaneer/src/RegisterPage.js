import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import axios from 'axios';
import './RegisterPage.css'; // Optional: Add styles

function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    country: ''
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://tripplanner1.ap-south-1.elasticbeanstalk.com/api/auth/signup', {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber,
        country: formData.country
      });

      setMessage(response.data.message || 'Registration successful! Redirecting...');
      setTimeout(() => navigate('/login'), 2000); // Redirect to login after 2 sec
    } catch (error) {
      setMessage(error.response?.data || 'Registration failed. Try again!');
    }
  };

  return (
    <div className="register-page">
      <h2>Create an Account</h2>
      <p>Join us to plan your dream trips and explore amazing destinations!</p>

      {message && <p className="message">{message}</p>}

      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} pattern="[0-9]{10}" required />
        </div>

        <div className="form-group">
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange} required>
            <option value="">Select your country</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>

      <p className="login-link">
        Already have an account? <a href="/login">Log in</a>
      </p>
    </div>
  );
}

export default RegisterPage;
