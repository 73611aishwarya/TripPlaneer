import React from 'react';
import './RegisterPage.css'; // Optional: Add styles for the form

function RegisterPage() {
  return (
    <div className="register-page">
      <h2>Create an Account</h2>
      <p>Join us to plan your dream trips and explore amazing destinations!</p>

      <form className="register-form">
        {/* Full Name Field */}
        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" placeholder="Enter your name" required />
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Create a password" required />
        </div>

        {/* Confirm Password Field */}
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm your password" required />
        </div>

        {/* Phone Number Field */}
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" placeholder="Enter your phone number" pattern="[0-9]{10}" required />
        </div>

        {/* Country Selection */}
        <div className="form-group">
          <label>Country:</label>
          <select required>
            <option value="">Select your country</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            {/* Add more options as needed */}
          </select>
        </div>

        {/* Terms and Conditions Checkbox
        <div className="form-group checkbox-group">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">I agree to the <a href="#terms">Terms and Conditions</a></label>
        </div> */}

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>

      {/* Login Link */}
      <p className="login-link">
        Already have an account? <a href="/login">Log in</a>
      </p>
    </div>
  );
}

export default RegisterPage;
