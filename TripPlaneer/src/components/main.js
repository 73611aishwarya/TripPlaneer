import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const Main = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    require('./homeimage1.jpg'),
    require('./mainimage2.avif'),
    require('./mainimage3.jpg')
  ];

  const handleBeginTour = () => {
    navigate('/travel-planner');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
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
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#004494'} 
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
        {offerData.map((offer, index) => (
          <div key={index} style={styles.offerCard}>
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

const offerData = [
  { title: "Offer 1", description: "Get 20% off on your first trip booking! Book now and enjoy a memorable experience with us." },
  { title: "Offer 2", description: "Book now and get a free travel guide! Explore hidden gems and local favorites with our guide." },
  { title: "Offer 3", description: "Refer a friend and earn travel credits! Share the joy of travel and earn rewards together." }
];

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
    justifyContent: 'center',
    gap: '20px',
    padding: '40px',
    flexWrap: 'wrap',
  },
  offerCard: {
    background: '#ffffff',
    color: '#000',
    padding: '30px',
    borderRadius: '15px',
    flex: '1',
    minWidth: '280px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
  },
  offerCardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
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
    marginTop: '20px',
  },
  buttonText: {
    position: 'relative',
    zIndex: 1,
  },
};

export default Main;
