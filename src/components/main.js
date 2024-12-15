import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleBeginTour = () => {
    navigate('/step1'); // Navigate to Step1 when the button is clicked
  };

  const handleExplore = () => {
    navigate('/step1'); // Navigate to Step1 when the Explore button is clicked
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Website!</h1>
      <p style={styles.subheading}>Discover amazing features and content.</p>
      <button style={styles.button} onClick={handleBeginTour}>
        Begin the Tour
      </button>
     
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    margin: '0.5rem 0',
  },
  subheading: {
    fontSize: '1.2rem',
    margin: '0.5rem 0 1.5rem',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    margin: '10px', // Add some margin for spacing
  },
};

export default Main;