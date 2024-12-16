import React from 'react';

const Step3 = ({ onNext, onBack }) => {
  const [travelOption, setTravelOption] = React.useState('');
  const options = [
    { name: 'Bus', image: 'https://via.placeholder.com/150?text=Bus' },
    { name: 'Train', image: 'https://via.placeholder.com/150?text=Train' },
    { name: 'Car', image: 'https://via.placeholder.com/150?text=Car' },
    { name: 'Bike', image: 'https://via.placeholder.com/150?text=Bike' },
  ];

  const handleSelect = (option) => {
    setTravelOption(option);
  };

  const handleNext = () => {
    if (!travelOption) {
      alert("Please select a travel option."); // Alert if no option is selected
      return;
    }
    onNext({ travelOption }); // Pass the selected option as an object
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Step 3: Select Way of Travel</h2>
      <div style={styles.optionsContainer}>
        {options.map(option => (
          <div
            key={option.name}
            style={{
              ...styles.option,
              backgroundColor: travelOption === option.name ? '#007bff' : '#f8f9fa',
              color: travelOption === option.name ? '#ffffff' : '#000000',
            }}
            onClick={() => handleSelect(option.name)}
          >
            <div style={styles.imageContainer}>
              <img src={option.image} alt={option.name} style={styles.image} />
              <div style={styles.optionText}>{option.name}</div>
            </div>
          </div>
        ))}
      </div>
      {travelOption === '' && <p style={styles.warning}>Please select a travel option.</p>}
      <div style={styles.buttonContainer}>
        <button style={styles.backButton} onClick={onBack}>Back</button>
        <button style={styles.button} onClick={handleNext} disabled={!travelOption}>Next</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#e6f7ff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    margin: '20px auto',
    maxWidth: '800px',
  },
  title: {
    fontSize: '24px', // Reduced font size for title
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  optionsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Two columns
    gap: '20px', // Adjusted space between cards
    marginBottom: '20px',
  },
  option: {
    padding: '15px',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    height: '180px',
    width: '100%',
    position: 'relative',
  },
  imageContainer: {
    position: 'relative',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    objectFit: 'cover',
  },
  optionText: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '18px', // Reduced font size for option text
    color: '#ffffff',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
  },
  button: {
    width: '40%',
    padding: '10px',
    fontSize: '14px', backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 5%',
  },
  backButton: {
    width: '40%',
    padding: '10px',
    fontSize: '14px',
    backgroundColor: '#6c757d',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 5%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  warning: {
    color: 'red',
    textAlign: 'center',
    margin: '10px 0',
  },
};

export default Step3;