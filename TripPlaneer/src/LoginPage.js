import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('http://tripplanner1.ap-south-1.elasticbeanstalk.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json(); // ✅ Correct way to get response JSON

      console.log("Full Response:", data); // ✅ Debugging ke liye full response print karo

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // ✅ Token ya user details store karo
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId); // 🔥 If userId is returned
      
      navigate('/main');
    } catch (err) {
      console.error("Login Error:", err.message); // ✅ Console pe error show karo
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Enter'}
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      <p>
        <Link to="/forgot-password" style={{ color: 'blue', textDecoration: 'underline' }}>
          Forgot Password?
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
