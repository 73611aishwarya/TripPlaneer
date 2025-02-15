import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import ExplorePage from './ExplorePage';
import RegisterPage from './RegisterPage';
import ContactUsPage from './ContactUsPage';
import Main from './components/main';
import Summary from './components/Summary';
import Directions from './components/direction';
import HelpPage from './components/HelpPage';
import ForgotPassword from './ForgotPassword';
import AboutUs from './AboutUs';
import PaymentPage from './components/PaymentPage';
import TravelPlanner from './pages/TravelPlanner';// ✅ TravelPlanner Component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/main" element={<Main />} />
        <Route path="/summary/:travelPlanId" element={<Summary />} /> {/* ✅ Dynamic Summary */}
        <Route path="/paymentPage" element={<PaymentPage />} />
        <Route path="/help" element={<HelpPage />} />

        {/* ✅ Travel Planning Flow */}
        <Route path="/travel-planner" element={<TravelPlanner />} /> 
      </Routes>
    </Router>
  );
};

export default App;
