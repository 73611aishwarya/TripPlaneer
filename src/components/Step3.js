import React from 'react';

const Step3 = ({ onNext, onBack }) => {
  const [travelOption, setTravelOption] = React.useState('');
  const [subOption, setSubOption] = React.useState('');
  const [quote, setQuote] = React.useState('');

  const options = [
    { name: 'Bus', image: 'https://via.placeholder.com/150?text=Bus', subOptions: ['AC Sitter', 'Non-AC Sitter', 'Non-AC Sleeper', 'AC Sleeper'] },
    { name: 'Train', image: 'https://via.placeholder.com/150?text=Train', subOptions: ['AC', 'RAC', '2AC', 'Sitter'] },
    { name: 'Car', image: 'https://via.placeholder.com/150?text=Car', subOptions: ['Private Car', 'Rental Car'] },
    { name: 'Bike', image: 'https://via.placeholder.com/150?text=Bike', subOptions: ['Standard', 'Sport'] },
  ];

  const handleSelect = (option) => {
    setTravelOption(option);
    setSubOption(''); // Reset sub-option when travel option changes
    setQuote(''); // Reset quote when travel option changes
  };

  const handleSubSelect = (subOption) => {
    setSubOption(subOption);
    setQuote(`You have selected ${subOption} for ${travelOption}.`); // Set quote based on selection
  };

  const handleNext = () => {
    if (!travelOption || !subOption) {
      alert("Please select a travel option and a sub-option."); // Alert if no option is selected
      return;
    }
    onNext({ travelOption, subOption }); // Pass the selected options as an object
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
      {travelOption && (
        <div style={styles.subOptionsHeader}>
          <h3 style={styles.subOptionsTitle}>Choose from the below options:</h3>
        </div>
      )}
      {travelOption && (
        <div style={styles.subOptionsContainer}>
          {options.find(option => option.name === travelOption).subOptions.map(sub => (
            <div
              key={sub}
              style={{
                ...styles.subOption,
                backgroundColor: subOption === sub ? '#ffcc99' : '#f8f9fa', // Light orange for selected sub-option
                color: subOption === sub ? '#000000' : '#000000',
              }}
              onClick={() => handleSubSelect(sub)}
            >
              {sub}
            </div>
          ))}
        </div>
      )}
      {quote && <div style={styles.quote}>{quote}</div>}
      <div style={styles.buttonContainer}>
        <button style={styles.backButton} onClick={onBack}>Back</button>
        <button style={styles.button} onClick={handleNext} disabled={!travelOption || !subOption}>Next</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#e6f7ff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '40px', // Increased padding
    margin: '20px auto',
    maxWidth: '900px', // Increased max width
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
  },
  optionsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
 gap: '20px',
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
    transition: 'background-color 0.3s ease',
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
    fontSize: '18px',
    color: '#ffffff',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)',
  },
  subOptionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
    marginBottom: '20px', // Added margin for gap between buttons and sub-options
  },
  subOptionsHeader: {
    marginTop: '20px',
    textAlign: 'center',
  },
  subOptionsTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  subOption: {
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    margin: '5px 0',
    transition: 'background-color 0.3s ease',
  },
  quote: {
    marginTop: '15px',
    fontSize: '16px',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
  },
  button: {
    width: '40%',
    padding: '10px',
    fontSize: '14px',
    backgroundColor: '#007bff',
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