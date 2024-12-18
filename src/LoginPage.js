import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true); // Set loading state

    // Simulate a login request (you can replace this with actual logic)
    setTimeout(() => {
      // Simulate a successful login after 1 second
      setIsSubmitting(false); // Reset loading state
      navigate('/main'); // Redirect to the main page after login
    }, 1000);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Logging in...' : 'Enter'}
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
      <p>
        {/* Added Forgot Password Link */}
        <Link to="/forgot-password" style={{ color: 'blue', textDecoration: 'underline' }}>
          Forgot Password?
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
