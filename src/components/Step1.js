import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import { LoadScript, Autocomplete } from '@react-google-maps/api';

const Step1 = ({ onNext }) => {
  const [source, setSource] = React.useState('');
  const [destination, setDestination] = React.useState('');
  const [distance, setDistance] = React.useState(0); // State for distance
  const [error, setError] = React.useState(''); // State for error message
  const [mapError, setMapError] = React.useState(''); // State for map loading error

  // Create refs for Autocomplete components
  const autocompleteSource = useRef(null);
  const autocompleteDestination = useRef(null);

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
    </LoadScript>
  );
};

const styles = {
  container: {
    backgroundColor: '#e6f7ff', // Pastel pista color
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '600px',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  input: {
    marginBottom: '15px',
  },
  inputField: {
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
  },
  alert: {
    marginBottom: '15px',
  },
};

export default Step1;