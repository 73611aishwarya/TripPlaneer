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
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }

          body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: #87CEEB; /* Light sky blue background */
          }

          .login-page {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: white; /* White card background */
            color: #223243; /* Text color */
            padding: 40px;
            border-radius: 20px;
            width: 650px; /* Increased width for the card */
            height: 400px; /* Increased height for the card */
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Card shadow */
            animation: fadeIn 0.5s ease-in-out; /* Animation for card */
            margin-top: 50px; /* Increased gap between card and heading */
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          h2 {
            color: #223243;
            font-weight: 500;
            letter-spacing: 0.1em;
            margin-bottom: 70px; /* Increased gap between heading and card */
          }

          form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .form-group {
            display: flex;
            flex-direction: column;
          }

          .form-group label {
            margin-bottom: 5px;
          }

          .form-group input {
            padding: 12px;
            border: none;
            border-radius: 25px;
            background: #f0f0f0; /* Light gray background for inputs */
            color: #223243;
            font-weight: 300;
            font-size: 1em;
            box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1),
              5px 5px 15px rgba(0, 0, 0, 0.35);
            transition: 0.5s;
            outline: none;
          }

          .form-group input:focus {
            border: 1px solid #00dfc4;
          }

          button {
            background: #00dfc4;
            color: #223243;
            padding: 10px 0;
            font-weight: 500;
            border: none;
            border-radius: 25px;
            cursor: pointer;
            box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1),
              5px 5px 15px rgba(0, 0, 0, 0.35);
          }

          p {
            color: rgba(34, 34, 34, 0.7);
            font-size: 0.75em;
            margin-top: 30px; /* Increased gap between card and links */
          }

          p a {
            color: #00dfc4;
            text-decoration: underline;
          }
        `}
      </style>

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input type="email"
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
        <Link to="/forgot-password" style={{ color: 'blue', textDecoration: 'underline' }}>
          Forgot Password?
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;