import { useState, useEffect } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/step5";
import SummaryStep from "../components/Summary";
import { useNavigate } from "react-router-dom";

const predefinedCosts = {
  transport: {
    flight: 5000,
    train: 1500,
    bus: 800,
    car: 2000,
  },
  accommodation: {
    hotel: 3000,
    hostel: 1000,
    apartment: 2000,
  },
  dailyExpense: 500,
};

const TravelPlanner = () => {
  const [travelData, setTravelData] = useState({
    source: "",
    destination: "",
    people: 1,
    days: 1,
    startDate: "",
    endDate: "",
    transport: "flight",  // Default value for transport
    budget: 0,
  });

  const [accommodationDetails, setAccommodationDetails] = useState({
    accommodation: "",
  });

  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const calculateBudget = () => {
    const transportCost = predefinedCosts.transport[travelData.transport] || 0;
    const accommodationCost =
      predefinedCosts.accommodation[accommodationDetails.accommodation] || 0;
    const dailyExpense = predefinedCosts.dailyExpense;

    const totalBudget =
      transportCost +
      accommodationCost * travelData.days +
      dailyExpense * travelData.people * travelData.days;

    setTravelData((prev) => ({ ...prev, budget: totalBudget }));
  };

  useEffect(() => {
    calculateBudget();
  }, [
    travelData.transport,
    accommodationDetails.accommodation,
    travelData.days,
    travelData.people,
  ]);

  const handleNext = (newData, moveNext = true) => {
    setTravelData((prev) => ({ ...prev, ...newData }));
    if (moveNext) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleAccommodationNext = (details) => {
    setAccommodationDetails(details);
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const handleSubmit = async () => {
    try {
      const userId = parseInt(localStorage.getItem("userId"), 10);  // Convert userId to an integer
      if (!userId) {
        alert("User is not authenticated!");
        return;
      }

      // Include userId in the payload
      const response = await fetch("http://tripplanner1.ap-south-1.elasticbeanstalk.com/api/TravelPlan", {
        method: "POST",
        body: JSON.stringify({ ...travelData, ...accommodationDetails, userId }),  // Add userId here
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Failed to save travel plan");

      // Success message instead of checking for travelPlanId
      alert("Travel plan saved successfully!");

      // Optionally, navigate to a different page (e.g., home or summary)
      navigate("/main"); // Replace with your desired route

    } catch (error) {
      console.error("Error saving travel details:", error);
      alert("Failed to save travel plan!");
    }
  };

  return (
    <div style={styles.container}>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 travelData={travelData} onNext={handleNext} onPrevious={handlePrevious} />}
      {step === 3 && <Step3 travelData={travelData} onNext={handleNext} onPrevious={handlePrevious} />}
      {step === 4 && (
        <Step4
          travelData={travelData}
          onPrevious={handlePrevious}
          onNext={handleAccommodationNext}
        />
      )}
      {step === 5 && (
        <Step5
          travelData={travelData}
          accommodationDetails={accommodationDetails}
          calculateBudget={calculateBudget}
          onPrevious={handlePrevious}
          onNext={() => {
            calculateBudget();
            setStep(6);
          }}
        />
      )}
      {step === 6 && (
        <SummaryStep
          travelData={travelData}
          accommodationDetails={accommodationDetails}
          onPrevious={() => setStep(5)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "600px",
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

export default TravelPlanner;
