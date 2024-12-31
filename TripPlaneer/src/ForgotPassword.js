import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [step, setStep] = useState(1); // Step 1: Email Entry, Step 2: Reset Password
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Skip email verification logic, move to step 2
    setStep(2);
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    // Here you can add API call logic to reset the password
    alert("Your password has been reset successfully!");
    navigate('/login'); // Redirect to login page
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Forgot Password</h2>

      {step === 1 && (
        <form onSubmit={handleEmailSubmit}>
          <div>
            <label>Enter your email address:</label>
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ padding: '8px', marginTop: '10px', width: '300px' }}
            />
          </div>
          <br />
          <button type="submit" style={{ padding: '10px 20px' }}>
            Proceed
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handlePasswordReset}>
          <div>
            <label>New Password:</label>
            <br />
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              style={{ padding: '8px', marginTop: '10px', width: '300px' }}
            />
          </div>
          <br />
          <div>
            <label>Confirm Password:</label>
            <br />
            <input
              type="password"
              placeholder="Re-enter new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              style={{ padding: '8px', marginTop: '10px', width: '300px' }}
            />
          </div>
          <br />
          <button type="submit" style={{ padding: '10px 20px' }}>
            Reset Password
          </button>
        </form>
      )}
    </div>
  );
}

export default ForgotPassword;
