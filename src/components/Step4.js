import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Step4 = ({ onNext, onBack }) => {
  const [option, setOption] = React.useState('');

  const handleSelect = (selectedOption) => {
    setOption(selectedOption);
  };

  const handleNext = () => {
    if (!option) {
      alert("Please select an accommodation option."); // Alert if no option is selected
      return;
    }
    onNext({ accommodation: option }); // Pass the selected option as an object
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Choose Your Accommodation Option</h2>
      <div style={styles.optionsContainer}>
        {['Hotels', 'Villas', 'PGs', 'Others'].map((selectedOption) => (
          <div
            key={selectedOption}
            style={{
              ...styles.option,
              backgroundColor: option === selectedOption ? '#007bff' : '#f8f9fa',
              color: option === selectedOption ? '#ffffff' : '#000000',
            }}
            onClick={() => handleSelect(selectedOption)}
          >
            <h3>{selectedOption}</h3>
          </div>
        ))}
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.backButton} onClick={onBack}>Back</button>
        <button style={styles.button} onClick={handleNext} disabled={!option}>Next</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#FFFDD0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '30px',
    margin: '20px auto',
    maxWidth: '600px',
  },
  title: {
    fontSize: '24px', // Font size for title
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  optionsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: '20px',
    padding: '20px', // Padding for the options container
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent background for better visibility
  },
  option: {
    padding: '15px',
    borderRadius: '5px',
    margin: '10px 0',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s',
    width: '48%', // Width for two options per row
  },
  button: {
    width: '48%',
    padding: '10px', // Padding for buttons
    fontSize: '16px', // Font size for buttons
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 1%',
  },
  backButton: {
    width: '48%',
    padding: '10px', // Padding for back button
    fontSize: '16px', // Font size for back button
    backgroundColor: '#6c757d', // Gray background for the back button
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 1%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
};

export default Step4;