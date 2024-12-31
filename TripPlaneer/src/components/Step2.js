import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const Step2 = ({ onNext, onBack }) => {
  const [people, setPeople] = React.useState(''); // State for number of people
  const [days, setDays] = React.useState(''); // State for number of days
  const [error, setError] = React.useState(''); // State for error message

  const handleNext = () => {
    if (!people || !days) {
      setError("Both fields are required and must be filled out."); // Set error message
      return;
    }
    setError(''); // Clear error if validation passes
    onNext({ numberOfPeople: parseInt(people, 10), numberOfDays: parseInt(days, 10) }); // Pass values as integers
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Step 2: Enter Travel Details</h2>
      
      {error && (
        <div className="alert alert-danger" role="alert" style={styles.alert}>
          {error}
        </div>
      )}
      
      <div style={styles.input}>
        <label htmlFor="people" className="form-label">
          Number of People
        </label>
        <input
          id="people"
          type="number"
          className="form-control"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          placeholder="Enter number of people"
          style={styles.inputField}
        />
      </div>
      <div style={styles.input}>
        <label htmlFor="days" className="form-label">
          Number of Days
        </label>
        <input
          id="days"
          type="number"
          className="form-control"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          placeholder="Enter number of days"
          style={styles.inputField}
        />
      </div>
      
      <div style={styles.buttonContainer}>
        <button style={styles.backButton} onClick={onBack}>Back</button>
        <button style={styles.nextButton} onClick={handleNext}>Next</button>
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
    maxWidth: '600px',
    transition: 'transform 0.3s ease', // Animation for the container
  },
  title: {
    fontSize: '32px', // Increased font size
    fontWeight: 'bold',
    marginBottom: '30px', // Increased margin
    textAlign: 'center',
  },
  input: {
    marginBottom: '25px', // Increased margin
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
  alert: {
    marginBottom: '20px',
    fontSize: '16px', // Increased font size for alert
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '30px', // Increased margin
  },
  backButton: {
    width: '48%', // Adjust width for spacing
    padding: '15px', // Increased padding
    fontSize: '20px', // Increased font size
    backgroundColor: '#6c757d', // Bootstrap secondary color
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s', // Animation for button
  },
  nextButton: {
    width: '48%', // Adjust width for spacing
    padding: '15px', // Increased padding
    fontSize: '20px', // Increased font size
    backgroundColor: '#007bff', // Bootstrap primary color
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s', // Animation for button
  },
};

// Add hover effect for buttons
const buttonHoverStyle = {
  ':hover': {
    backgroundColor: '#0056b3', // Darker shade for next button
    transform: 'scale(1.05)', // Slightly enlarge button on hover
  },
};

// Add focus effect for input fields
const inputFocusStyle = {
  ':focus': {
    borderColor: '#007bff',
    boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)', // Blue shadow on focus
  },
};

export default Step2;