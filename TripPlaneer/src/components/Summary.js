import React from "react";

const SummaryStep = ({ travelData, accommodationDetails, onPrevious, onSubmit }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Review Your <span style={styles.headingAccent}>Travel Plan</span></h2>
      <div style={styles.summaryBox}>
        {Object.entries({ ...travelData, ...accommodationDetails }).map(([key, value]) => (
          <div key={key} style={styles.itemRow}>
            <span style={styles.key}>{key}:</span>
            <span style={styles.value}>{typeof value === "object" ? JSON.stringify(value, null, 2) : value}</span>
          </div>
        ))}
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.backButton} onClick={onPrevious}>Back</button>
        <button style={styles.button} onClick={onSubmit}>Confirm & Save</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f8f9fa",
    padding: "40px",
    borderRadius: "12px",
    maxWidth: "900px",
    margin: "20px auto",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
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
  summaryBox: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "left",
    fontSize: "16px",
    overflowX: "auto",
  },
  itemRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid #ddd",
  },
  key: {
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    color: "#555",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: "20px",
  },
  backButton: {
    width: "40%",
    padding: "12px",
    backgroundColor: "#6c757d",
    color: "#ffffff",
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
  button: {
    width: "40%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  },
};

export default SummaryStep;
