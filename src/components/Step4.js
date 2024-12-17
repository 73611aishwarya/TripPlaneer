import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import hotelImage from './hotel.jpg'; // Import hotel image
import villaImage from './villa.jpg'; // Import villa image
import pgImage from './pg.jpg'; // Import PG image
import othersImage from './other.jpg'; // Import other accommodation image

const Step4 = ({ onNext, onBack }) => {
  const [option, setOption] = React.useState('');
  const [subOption, setSubOption] = React.useState('');

  const accommodationOptions = {
    Hotels: { image: hotelImage, subOptions: ['1 Star', '2 Star', '3 Star', '5 Star'] },
    Villas: { image: villaImage, subOptions: ['1 BHK', '2 BHK', '3 BHK'] },
    PGs: { image: pgImage, subOptions: ['1 Room', '2 Rooms', '3 Rooms'] },
    Others: { image: othersImage, subOptions: ['Own House', 'Relative House', 'Other'] },
  };

  const handleSelect = (selectedOption) => {
    setOption(selectedOption);
    setSubOption(''); // Reset sub-option when accommodation option changes
  };

  const handleSubSelect = (selectedSubOption) => {
    setSubOption(selectedSubOption);
  };

  const handleNext = () => {
    if (!option || !subOption) {
      alert("Please select an accommodation option and a sub-option."); // Alert if no option is selected
      return;
    }
    onNext({ accommodation: option, subAccommodation: subOption }); // Pass the selected options as an object
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Choose Your Accommodation Option</h2>
      <div style={styles.optionsContainer}>
        {Object.keys(accommodationOptions).map(selectedOption => (
          <div
            key={selectedOption}
            style={{
              ...styles.option,
              backgroundColor: option === selectedOption ? '#007bff' : '#f8f9fa',
              color: option === selectedOption ? '#ffffff' : '#000000',
            }}
            onClick={() => handleSelect(selectedOption)}
          >
            <div style={styles.imageContainer}>
              <img src={accommodationOptions[selectedOption].image} alt={selectedOption} style={styles.image} />
              <h3>{selectedOption}</h3>
            </div>
          </div>
        ))}
      </div>
      {option && (
        <div style={styles.subOptionsHeader}>
          <h3 style={styles.subOptionsTitle}>Choose from the below options:</h3>
        </div>
      )}
      {option && (
        <div style={styles.subOptionsContainer}>
          {accommodationOptions[option].subOptions.map(sub => (
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
      <div style={styles.buttonContainer}>
        <button style={styles.backButton} onClick={onBack}>Back</button>
        <button style={styles.button} onClick={handleNext} disabled={!option || !subOption}>Next</button>
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
    padding : '15px',
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
};

export default Step4;