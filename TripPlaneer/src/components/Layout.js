import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <div style={styles.tabs}>
          <span style={styles.tab}>Logout</span>
          <Link to="/help" style={styles.tab}>Help</Link> {/* Updated to use Link */}
          <Link to="/" style={styles.tab}>Home</Link> {/* Assuming Home is the main page */}
          <span style={styles.tab}>Feedback</span>
        </div>
        <div style={styles.tripPlanner}>Easy Trip Planner</div>
      </header>
      <main>{children}</main>
      <footer style={styles.footer}>
        <p style={styles.quote}>“Travel is the only thing you buy that makes you richer.”</p>
        <p style={styles.quote}>“The journey not the arrival matters.”</p>
        <p style={styles.quote}>“To travel is to live.”</p>
        <p style={styles.quote}>“Adventure may hurt you, but monotony will kill you.”</p>
      </footer>
    </div>
  );
};

const styles = {
  pageContainer: {
    backgroundColor: '#f0f0f0',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
    padding: '10px 20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0 , 0.2)',
    borderBottom: '2px solid #0056b3',
  },
  tabs: {
    display: 'flex',
    gap: '20px',
  },
  tab: {
    cursor: 'pointer',
    color: '#000',
    fontWeight: 'bold',
    transition: 'color 0.3s',
    textDecoration: 'none', // Ensure links don't have underline
  },
  tripPlanner: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fff',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
  footer: {
    backgroundColor: '#87CEEB',
    color: '#000',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 -2px 4px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    bottom: '0',
    width: '100%',
  },
  quote: {
    margin: '10px 0',
    fontStyle: 'italic',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  },
};

export default Layout;