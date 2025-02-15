import React from "react";

const Step2 = ({ travelData = {}, onNext, onPrevious }) => {
  console.log("Travel Data in Step2:", travelData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Convert the value to a number if the input name is 'people' or 'days'
    const newValue = name === "people" || name === "days" ? parseInt(value, 10) : value;
    const newData = { ...travelData, [name]: newValue };
    onNext(newData, false);
  };

  const handleNext = () => {
    if (!travelData.people || !travelData.days) {
      alert("Please fill in all fields!");
      return;
    }
    // Check if people or days are zero
    if (travelData.people <= 0 || travelData.days <= 0) {
      alert("Number of People and Number of Days can't be zero or negative!");
      return;
    }
    onNext(travelData, true);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Step 2: <span style={styles.headingAccent}>Travel Details</span></h2>

      <label style={styles.label}>Number of People:</label>
      <input
        type="number"
        name="people"
        placeholder="Enter Number of People"
        value={travelData.people || ""}
        onChange={handleChange}
        style={styles.input}
      />

      <label style={styles.label}>Number of Days:</label>
      <input
        type="number"
        name="days"
        placeholder="Enter Number of Days"
        value={travelData.days || ""}
        onChange={handleChange}
        style={styles.input}
      />

      <div style={styles.buttonContainer}>
        <button onClick={onPrevious} style={styles.button}>Previous</button>
        <button onClick={handleNext} style={styles.button}>Next</button>
      </div>
    </div>
  );
};

Step2.defaultProps = {
  travelData: {
    people: "",
    days: "",
  },
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    maxWidth: "500px",
    margin: "auto",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    textAlign: "center",
    color: "#007bff",
    fontSize: "2rem",
    marginBottom: "15px",
    fontWeight: "bold",
  },
  headingAccent: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "2.2rem",
    color: "#0056b3",
  },
  label: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "12px 20px",
    fontSize: "1.1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    textAlign: "center",
  },
};

export default Step2;
