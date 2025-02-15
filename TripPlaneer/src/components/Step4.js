import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import hotelImage from "./hotel.jpg";
import villaImage from "./villa.jpg";
import pgImage from "./pg.jpg";
import othersImage from "./other.jpg";

const Step4 = ({ onPrevious, onNext }) => {
  const [accommodation, setAccommodation] = useState("");
  const [subAccommodation, setSubAccommodation] = useState("");

  const accommodationOptions = {
    Hotels: { image: hotelImage, subOptions: ["1 Star", "2 Star", "3 Star", "5 Star"] },
    Villas: { image: villaImage, subOptions: ["1 BHK", "2 BHK", "3 BHK"] },
    PGs: { image: pgImage, subOptions: ["1 Room", "2 Rooms", "3 Rooms"] },
    Others: { image: othersImage, subOptions: ["Own House", "Relative House", "Other"] },
  };

  const handleSelect = (option) => {
    setAccommodation(option);
    setSubAccommodation(""); // Reset sub-option when changing accommodation
  };

  const handleNext = () => {
    if (!accommodation || !subAccommodation) {
      alert("Please select an accommodation and a sub-option.");
      return;
    }
    onNext({ accommodation, subAccommodation });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Step 4: <span style={styles.headingAccent}>Choose Your Accommodation Option</span></h2>
      <div style={styles.optionsContainer}>
        {Object.keys(accommodationOptions).map((option) => (
          <div
            key={option}
            style={{
              ...styles.option,
              backgroundColor: accommodation === option ? "#007bff" : "#f8f9fa",
              color: accommodation === option ? "#ffffff" : "#000000",
            }}
            onClick={() => handleSelect(option)}
          >
            <img src={accommodationOptions[option].image} alt={option} style={styles.image} />
            <h3>{option}</h3>
          </div>
        ))}
      </div>

      {accommodation && (
        <>
          <h3 style={styles.subOptionsTitle}>Choose from the below options:</h3>
          <div style={styles.subOptionsContainer}>
            {accommodationOptions[accommodation].subOptions.map((sub) => (
              <div
                key={sub}
                style={{
                  ...styles.subOption,
                  backgroundColor: subAccommodation === sub ? "#ffcc99" : "#f8f9fa",
                }}
                onClick={() => setSubAccommodation(sub)}
              >
                {sub}
              </div>
            ))}
          </div>
        </>
      )}

      <div style={styles.buttonContainer}>
        <button style={styles.backButton} onClick={onPrevious}>Back</button>
        <button style={styles.button} onClick={handleNext} disabled={!accommodation || !subAccommodation}>
          Next
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    padding: "40px",
    margin: "20px auto",
    maxWidth: "900px",
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
  optionsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    width: "100%",
  },
  option: {
    padding: "15px",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
  },
  image: {
    width: "100%",
    borderRadius: "5px",
  },
  subOptionsTitle: {
    fontSize: "18px",
    marginTop: "20px",
  },
  subOptionsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
  },
  subOption: {
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.2s ease-in-out",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
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

export default Step4;
