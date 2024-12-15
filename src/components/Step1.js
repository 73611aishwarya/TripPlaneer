import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Step1 = ({ onNext }) => {
  const [source, setSource] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [distance, setDistance] = React.useState(0); // State for distance
  const [error, setError] = React.useState(''); // State for error message

  // Simulated distance calculation function
  const calculateDistance = (source, destination) => {
    // For demonstration, we'll just return a fixed distance of 126 km
    if (source && destination) {
      return 126; // Fixed distance for demonstration
    }
    return 0;
  };

  // Update distance whenever source or destination changes
  React.useEffect(() => {
    const calculatedDistance = calculateDistance(source, destination);
    setDistance(calculatedDistance);
  }, [source, destination]);

  const handleNext = () => {
    // Check if source and destination are filled
    if (!source || !destination) {
      setError("Both Source and Destination fields are required."); // Set error message
      return;
    }
    setError(''); // Clear error if validation passes
    onNext({ source, destination, distance });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Step 1: Enter Travel Details</h2>
      
      {error && (
        <div className="alert alert-danger" role="alert" style={styles.alert}>
          {error}
        </div>
      )}
      
      <div style={styles.input}>
        <label htmlFor="source" className="form-label">Source</label>
        <input
          id="source"
          type="text"
          className="form-control"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          placeholder="Enter source location"
          style={styles.inputField}
        />
      </div>
      <div style={styles.input}>
        <label htmlFor="destination" className="form-label">Destination</label>
        <input
          id="destination"
          type="text"
          className="form-control"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Enter destination location"
          style={styles.inputField}
        />
      </div>
      <div style={styles.input}>
        <label htmlFor="distance" className="form-label">Total Distance (km)</label>
        <input
          id="distance"
          type="text"
          className="form-control"
          value={distance}
          readOnly // Make the distance field read-only
          style={styles.inputField}
        />
      </div>
      <button style={styles.button} onClick={handleNext}>Next</button>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#FFFDD0', // Pastel pista color
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    margin: '20px auto',
    maxWidth: '600px',
    transition: 'transform 0.3s ease', // Animation for the container
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  alert: {
    marginBottom: '20px',
    fontSize: '16px', // Increased font size for alert
  },
  input: {
    marginBottom: '20px',
  },
  inputField: {
    fontSize: '18px', // Increased font size
    padding: '12px', // Increased padding
    width: '100%',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    boxSizing: 'border-box',
    transition: 'border-color 0.3s, box-shadow 0.3s', // Animation for input fields
  },
  button: {
    width: '100%',
    padding: '12px',
    fontSize: '18px',
    backgroundColor: '#007bff', // Bootstrap primary color
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s', // Animation for button
  },
};

export default Step1;