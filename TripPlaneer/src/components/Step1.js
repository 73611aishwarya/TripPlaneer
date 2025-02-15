import React, { useState, useEffect, useRef } from "react";

const Step1 = ({ onNext }) => {
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    startDate: "",
    endDate: "",
    distance: "",
  });

  const sourceRef = useRef(null);
  const destinationRef = useRef(null);

  useEffect(() => {
    if (!window.google) return;

    const options = { types: ["geocode"] };

    const sourceAutocomplete = new window.google.maps.places.Autocomplete(sourceRef.current, options);
    sourceAutocomplete.addListener("place_changed", () => {
      const place = sourceAutocomplete.getPlace();
      const sourceAddress = place.formatted_address || place.name;
      setFormData((prev) => ({ ...prev, source: sourceAddress }));
    });

    const destinationAutocomplete = new window.google.maps.places.Autocomplete(destinationRef.current, options);
    destinationAutocomplete.addListener("place_changed", () => {
      const place = destinationAutocomplete.getPlace();
      const destinationAddress = place.formatted_address || place.name;
      setFormData((prev) => ({ ...prev, destination: destinationAddress }));
    });
  }, []);

  useEffect(() => {
    if (formData.source && formData.destination) {
      calculateDistance(formData.source, formData.destination);
    }
  }, [formData.source, formData.destination]);

  const calculateDistance = (source, destination) => {
    if (!source || !destination || !window.google) return;

    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [source],
        destinations: [destination],
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK" && response.rows.length > 0) {
          const distanceText = response.rows[0].elements[0].distance?.text || "";
          setFormData((prev) => ({ ...prev, distance: distanceText }));
        } else {
          console.error("Error fetching distance:", status);
        }
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    const currentDate = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    if (!formData.source || !formData.destination || !formData.startDate || !formData.endDate || !formData.distance) {
      alert("Please fill in all fields (Source, Destination, Start Date, End Date, and Distance)!");
      return;
    }

    // Validate start date
    if (formData.startDate < currentDate) {
      alert("Start Date cannot be before today's date!");
      return;
    }

    // Validate end date
    if (formData.endDate < formData.startDate) {
      alert("End Date must be after the Start Date!");
      return;
    }

    onNext(formData);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Step 1: <span style={styles.headingAccent}>Enter Travel Details</span></h2>

      <label style={styles.label}>Source:</label>
      <input type="text" ref={sourceRef} placeholder="Enter Source Location" style={styles.input} />

      <label style={styles.label}>Destination:</label>
      <input type="text" ref={destinationRef} placeholder="Enter Destination" style={styles.input} />

      <label style={styles.label}>Start Date:</label>
      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        style={styles.input}
        min={new Date().toISOString().split("T")[0]} // Set minimum value as today's date
      />

      <label style={styles.label}>End Date:</label>
      <input
        type="date"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange}
        style={styles.input}
        min={formData.startDate || new Date().toISOString().split("T")[0]} // Set minimum value as start date or today's date
      />

      <label style={styles.label}>Distance:</label>
      <input type="text" value={formData.distance} readOnly placeholder="Distance will be calculated" style={styles.inputDisabled} />

      <button onClick={handleNext} style={styles.button}>Next</button>
    </div>
  );
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
  inputDisabled: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "1rem",
    backgroundColor: "#e9ecef",
    color: "#6c757d",
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
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default Step1;
