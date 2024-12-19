import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { LoadScript, Autocomplete } from '@react-google-maps/api';

const Step1 = ({ onNext }) => {
  const [source, setSource] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [error, setError] = React.useState(''); // State for error message
  const [mapError, setMapError] = React.useState(''); // State for map loading error

  // Create refs for Autocomplete components
  const autocompleteSource = useRef(null);
  const autocompleteDestination = useRef(null);

  const handleNext = () => {
    // Check if source and destination are filled
    if (!source || !destination) {
      setError("Both Source and Destination fields are required."); // Set error message
      return;
    }
    setError(''); // Clear error if validation passes
    onNext({ source, destination });
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBIeYEetesE15bOgXFVfibBWCyheA0yJNs" // Your API key here
      onError={() => setMapError("Failed to load Google Maps. Please check your API key and billing status.")}
      libraries={['places']}
    >
      <div style={styles.container}>
        <h2 style={styles.title}>Step 1: Enter Travel Details</h2>
        
        {mapError && (
          <div className="alert alert-danger" role="alert" style={styles.alert}>
            {mapError}
          </div>
        )}
        
        {error && (
          <div className="alert alert-danger" role="alert" style={styles.alert}>
            {error}
          </div>
        )}
        
        <div style={styles.input}>
          <label htmlFor="source" className="form-label">Source</label>
          <Autocomplete
            onLoad={autocomplete => (autocompleteSource.current = autocomplete)}
            onPlaceChanged={() => {
              const place = autocompleteSource.current.getPlace();
              if (place && place.formatted_address) {
                setSource(place.formatted_address);
              } else {
                setError("Please select a valid source location.");
              }
            }}
          >
            <input
              id="source"
              type="text"
              className="form-control"
              placeholder="Enter source location"
              style={styles.inputField}
              aria-label="Source location"
            />
          </Autocomplete>
        </div>
        <div style={styles.input}>
          <label htmlFor="destination" className="form-label">Destination</label>
          <Autocomplete
            onLoad={autocomplete => (autocompleteDestination.current = autocomplete)}
            onPlaceChanged={() => {
              const place = autocompleteDestination.current.getPlace();
              if (place && place.formatted_address) {
                setDestination(place.formatted_address);
              } else {
                setError("Please select a valid destination location.");
              }
            }}
          >
            <input
              id="destination"
              type="text"
              className="form-control"
              placeholder="Enter destination location"
              style={styles.inputField}
              aria-label="Destination location"
            />
          </Autocomplete>
        </div>
        <button style={styles.button} onClick={handleNext}>Next</button>
      </div>
    </LoadScript>
  );
};

const styles = {
  container: {
    backgroundColor: '#e6f7ff', // Pastel pista color
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '30px', // Increased padding for better spacing
    margin: '20px auto',
    maxWidth: '600px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  input: {
    marginBottom: '20px', // Increased margin for better spacing
  },
  inputField: {
    width: '100%',
    height: '50px', // Increased height for better visibility
    fontSize: '18px', // Increased font size for better visibility
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '15px 20px', // Increased padding for better visibility
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '18 px', // Increased font size for better visibility
  },
  alert: {
    marginBottom: '20px', // Increased margin for better spacing
  },
};

export default Step1;