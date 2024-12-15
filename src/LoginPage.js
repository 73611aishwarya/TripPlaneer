import React from 'react';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-page">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default LoginPage;
