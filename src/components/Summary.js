import React from 'react';

const Summary = ({ details, totalBudget = 15000, accommodation, onProceed, onBack }) => {
  const handleDirections = () => {
    onProceed(); // Call the onProceed function to navigate to Directions
  };

  const handlePaymentInfo = () => {
    alert("Payment information will be displayed here."); // Alert message for payment information
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Details</h2>
      <div style={styles.card}>
        <h3 style={styles.cardTitle}>Travel Details</h3>
        <p><strong>Source:</strong> {details.source}</p>
        <p><strong>Destination:</strong> {details.destination}</p>
        <p><strong>Number of People:</strong> {details.numberOfPeople}</p>
        <p><strong>Number of Days:</strong> {details.numberOfDays}</p>
        <p><strong>Way of Going:</strong> {details.travelOption}</p>
        <p><strong>Accommodation Type:</strong> {accommodation}</p>
      </div>

      <div style={styles.budgetCard}>
        <h3 style={styles.cardTitle}>Total Budget</h3>
        <p style={styles.budget}>₹{totalBudget}</p>
      </div>

      <div style={styles.placesCard}>
        <h3 style={styles.cardTitle}>Places to Visit</h3>
        <ul style={styles.placesList}>
          <li>Place 1</li>
          <li>Place 2</li>
          <li>Place 3</li>
        </ul>
      </div>

      <div style={styles.buttonContainer}>
        <button style={styles.backButton} onClick={onBack}>Back</button>
        <button style={styles.button} onClick={handleDirections}>View Directions</button>
        <button style={styles.paymentButton} onClick={handlePaymentInfo}>Check for Payment Information</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '66%',
    margin: '0 auto',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '15px',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  budgetCard: {
    backgroundColor: '#e9f7ef',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  placesCard: {
    backgroundColor: '#fce4ec',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  budget: {
    fontSize: '22px',
    color: '#28a745',
  },
  placesList: {
    listStyleType: 'none',
    padding: 0,
    marginBottom: '15px',
  },
  button: {
    width: '30%',
    padding: '8px',
    fontSize: '14px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 2.5%',
  },
  backButton: {
    width: '30%',
    padding: '8px',
    fontSize: '14px',
    backgroundColor: '#6c757d',
 color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 2.5%',
  },
  paymentButton: {
    width: '30%',
    padding: '8px',
    fontSize: '14px',
    backgroundColor: '#808080', // Gray color for payment button
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 2.5%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default Summary;