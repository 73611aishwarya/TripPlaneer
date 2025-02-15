import React, { useEffect } from 'react';

const Directions = ({ onBack }) => {
  useEffect(() => {
    const loadMap = () => {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: { lat: 19.076, lng: 72.8777 }, // Centered around Pune
      });
      directionsRenderer.setMap(map);

      const request = {
        origin: 'Pune, India',
        destination: 'Nashik, India',
        travelMode: window.google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(result);
        } else {
          console.error('Error fetching directions: ', result);
        }
      });
    };

    // Load the Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBIeYEetesE15bOgXFVfibBWCyheA0yJNs&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = loadMap;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Directions</h2>
      <div id="map" style={styles.mapContainer}></div>
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
    height: '400px',
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