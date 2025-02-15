import React, { useState } from 'react';
import trainImage from './train1.jpg';
import busImage from './bus.jpg';
import carImage from './car.jpg';
import bikeImage from './bike.jpg';

const Step3 = ({ onBack, onNext }) => {
  const [modeOfTransport, setModeOfTransport] = useState('');
  const [subCategory, setSubCategory] = useState('');

  const options = [
    { name: 'Bus', image: busImage, subOptions: ['AC Sitter', 'Non-AC Sitter', 'Non-AC Sleeper', 'AC Sleeper'] },
    { name: 'Train', image: trainImage, subOptions: ['AC', 'RAC', '2AC', 'Sitter'] },
    { name: 'Car', image: carImage, subOptions: ['Private Car', 'Rental Car'] },
    { name: 'Bike', image: bikeImage, subOptions: ['Standard', 'Sport'] },
  ];

  const handleSelect = (option) => {
    setModeOfTransport(option);
    setSubCategory('');
  };

  const handleSubSelect = (subOption) => {
    setSubCategory(subOption);
  };

  const handleNext = () => {
    if (!modeOfTransport || !subCategory) {
      alert('Please select a mode of transport and a sub-category.');
      return;
    }
    onNext({ modeOfTransport, subCategory });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Step 3: <span style={styles.headingAccent}>Select Way of Travel</span></h2>
      <div style={styles.optionsContainer}>
        {options.map((option) => (
          <div
            key={option.name}
            style={{
              ...styles.option,
              backgroundColor: modeOfTransport === option.name ? '#007bff' : '#f8f9fa',
              color: modeOfTransport === option.name ? '#ffffff' : '#000000',
            }}
            onClick={() => handleSelect(option.name)}
          >
            <img src={option.image} alt={option.name} style={styles.image} />
            <div style={styles.optionText}>{option.name}</div>
          </div>
        ))}
      </div>
      {modeOfTransport && (
        <div style={styles.subOptionsContainer}>
          {options.find((option) => option.name === modeOfTransport).subOptions.map((sub) => (
            <div
              key={sub}
              style={{
                ...styles.subOption,
                backgroundColor: subCategory === sub ? '#ffcc99' : '#f8f9fa',
              }}
              onClick={() => handleSubSelect(sub)}
            >
              {sub}
            </div>
          ))}
        </div>
      )}
      <div style={styles.buttonContainer}>
        <button style={styles.backButton} onClick={onBack}>Back</button>
        <button style={styles.button} onClick={handleNext} disabled={!modeOfTransport || !subCategory}>
          Next
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#e6f7ff',
    padding: '40px',
    borderRadius: '12px',
    maxWidth: '900px',
    margin: '20px auto',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    color: '#007bff',
    fontSize: '2rem',
    marginBottom: '15px',
    fontWeight: 'bold',
  },
  headingAccent: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: '2.2rem',
    color: '#0056b3',
  },
  optionsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    width: '100%',
  },
  option: {
    padding: '15px',
    borderRadius: '8px',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
  },
  image: {
    width: '100%',
    borderRadius: '5px',
  },
  subOptionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    width: '100%',
  },
  subOption: {
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    margin: '5px 0',
    transition: 'background-color 0.2s ease-in-out',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    width: '100%',
  },
  button: {
    width: '40%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    borderRadius: '6px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  backButton: {
    width: '40%',
    padding: '12px',
    backgroundColor: '#6c757d',
    color: '#ffffff',
    borderRadius: '6px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
};

export default Step3;
