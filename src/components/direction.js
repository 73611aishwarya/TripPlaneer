import React from 'react';

const Directions = ({ onBack }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Directions</h2>
      <div style={styles.mapContainer}>
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f3b3%3A0x5045675218ceed0!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <h3 style={styles.subtitle}>Climate Conditions</h3>
      <p style={styles.details}>Current weather conditions for your route will be displayed here.</p>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={onBack}>Your Details</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    margin: '20px auto',
    maxWidth: '600px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  mapContainer: {
    marginBottom: '20px',
  },
  details: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  button: {
    width: '100%',
    padding: '15px',
    fontSize: '18px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export default Directions;