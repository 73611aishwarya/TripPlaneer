import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout'; // Import the Layout component

const Main = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require('./homeimage1.jpg'),
    require('./mainimage2.avif'),
    require('./mainimage3.jpg')
  ];

  const handleBeginTour = () => {
    navigate('/step1'); // Navigate to Step1 when the button is clicked
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <Layout>
      <div style={styles.contentContainer}>
        <div style={styles.infoSection}>
          <h1 style={styles.heading}>Welcome to Easy Trip Planner!</h1>
          <p style={styles.subheading}>Click the Button And check the details.</p>
          <p style={styles.subheading}>Discover amazing features and content with us.</p>
          <button 
            style={styles.button} 
            onClick={handleBeginTour}
            on MouseEnter={(e) => e.currentTarget.style.backgroundColor = '#004494'} 
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
          >
            <span style={styles.buttonText}>Begin the Tour</span>
          </button>
        </div>
        <div style={styles.photoSection}>
          <img 
            src={images[currentImageIndex]} 
            alt="Changing" 
            style={styles.photo} 
            onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/600x300?text=Image+Not+Found"; }}
          />
        </div>
      </div>
      <div style={styles.offersContainer}>
        <div style={styles.offerCard}>
          <h3>Offer 1</h3>
          <p>Get 20% off on your first trip booking!</p>
          <p>Book now and enjoy a memorable experience with us.</p>
        </div>
        <div style={styles.offerCard}>
          <h3>Offer 2</h3>
          <p>Book now and get a free travel guide!</p>
          <p>Explore hidden gems and local favorites with our guide.</p>
        </div>
        <div style={styles.offerCard}>
          <h3>Offer 3</h3>
          <p>Refer a friend and earn travel credits!</p>
          <p>Share the joy of travel and earn rewards together.</p>
        </div>
      </div>
    </Layout>
  );
};

const styles = {
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#e6f7ff',
    marginTop: '20px',
  },
  infoSection: {
    flex: 1,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#0056b3',
    marginBottom: '10px',
    textAlign: 'center',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
  },
  subheading: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '15px',
    textAlign: 'center',
  },
  photoSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    maxWidth: '80%',
    maxHeight: '400px',
    height: 'auto',
    borderRadius: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  offersContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
  },
  offerCard: {
    background: '#ffffff',
    color: '#000',
    padding: '30px',
    borderRadius: '10px',
    flex: '1',
    margin: '0 10px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s',
  },
  button: {
    backgroundColor: '#0056b3',
    color: '#fff',
    padding: '15px 30px',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'transform 0.3s, background-color 0.3s',
    position: 'relative',
    overflow: 'hidden',
    marginTop: '20px',
  },
  buttonText: {
    position: 'relative',
    zIndex: 1,
  },
};

export default Main;