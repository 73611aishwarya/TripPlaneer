import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import ExplorePage from './ExplorePage';
import RegisterPage from './RegisterPage';
import ContactUsPage from './ContactUsPage';
import Main from './components/main'; // Adjusted import path for Main component
import Step1 from './components/Step1'; // Import Step1 component
import Step2 from './components/Step2'; // Import Step2 component
import Step3 from './components/Step3'; // Import Step3 component
import Step4 from './components/Step4'; // Import Step4 component
import Summary from './components/Summary'; // Import Summary component
import Directions from './components/direction'; // Import Directions component
import HelpPage from './components/HelpPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<HomePage />} />

        {/* Explore Page Route */}
        <Route path="/explore" element={<ExplorePage />} />

        {/* Login Page Route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Register Page Route */}
        <Route path="/register" element={<RegisterPage />} />

        {/* Contact Us Page Route */}
        <Route path="/contact" element={<ContactUsPage />} />

        {/* Main Page Route */}
        <Route path="/main" element={<Main />} />

        {/* Step Routes */}
        <Route path="/step1" element={<StepWrapper step={1} />} />
        <Route path="/step2" element={<StepWrapper step={2} />} />
        <Route path="/step3" element={<StepWrapper step={3} />} />
        <Route path="/step4" element={<StepWrapper step={4} />} />
        <Route path="/summary" element={<SummaryWrapper />} />
<<<<<<< HEAD
        <Route path="/direction" element={<DirectionsWrapper />} />
=======
        <Route path="/direction" element={<Directions />} />
        <Route path="/HelpPage" element={<HelpPage/>}/>
>>>>>>> origin/main
      </Routes>
    </Router>
  );
};

const StepWrapper = ({ step }) => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const [totalBudget, setTotalBudget] = useState(0);

  const handleNext = (data) => {
    setDetails(prevDetails => ({ ...prevDetails, ...data }));
    if (step === 4) {
      navigate('/summary', { state: { details: { ...details, ...data }, totalBudget } }); // Pass updated details
    } else {
      navigate(`/step${step + 1}`); // Navigate to the next step
    }
  };

  const handleBack = () => {
    navigate(`/step${step - 1}`); // Navigate to the previous step
  };

  return (
    <>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} onBack={handleBack} />}
      {step === 3 && <Step3 onNext={handleNext} onBack={handleBack} />}
      {step === 4 && <Step4 onNext={handleNext} onBack={handleBack} />}
    </>
  );
};

const SummaryWrapper = () => {
  const location = useLocation();
  const { details = {}, totalBudget = 0 } = location.state || {}; // Retrieve passed state

  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/direction'); // Navigate to Directions
  };

  const handleBack = () => {
    navigate('/step4'); // Navigate back to Step 4
  };

  return (
    <Summary 
      details={details} 
      totalBudget={totalBudget} 
      accommodation={details.accommodation} // Ensure accommodation is passed correctly
      onProceed={handleProceed} 
      onBack={handleBack} 
    />
  );
};

const DirectionsWrapper = () => {
  const location = useLocation();
  const { details = {}, totalBudget = 0 } = location.state || {}; // Retrieve passed state

  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/summary', { state: { details, totalBudget } }); // Navigate back to Summary
  };

  return <Directions onBack={handleBack} />;
};

export default App;