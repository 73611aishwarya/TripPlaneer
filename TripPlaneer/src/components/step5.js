import React, { useEffect, useState } from "react";

const Step5 = ({ travelData, accommodationDetails, onPrevious, onNext }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (!travelData?.destination) return;

    const { destination } = travelData;
    fetchWeather(destination);
  }, [travelData]);

  const fetchWeather = async (city) => {
    const API_KEY = "399e0dc7fdc03a7ddf92de60b1560157";
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeather(data.main ? data : null);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeather(null);
    }
  };

  const handleNext = () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("User ID not found. Please log in.");
      return;
    }
    onNext({ userId });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Step 5: Estimated Budget & Destination Info</h2>
      <p style={styles.text}>Total Estimated Budget: ₹{travelData.budget}</p>
      {weather ? (
        <div>
          <h3>Current Weather in {travelData.destination}</h3>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Weather data not available</p>
      )}
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={onPrevious}>Back</button>
        <button style={styles.button} onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#e6f7ff",
    padding: "40px",
    borderRadius: "8px",
    maxWidth: "600px",
    margin: "20px auto",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "18px",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Step5;