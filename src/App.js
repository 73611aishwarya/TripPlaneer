import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import ExplorePage from './ExplorePage';
import RegisterPage from './RegisterPage';
import ContactUsPage from './ContactUsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<HomePage />} />

          {/* Explore Page Route */}
          <Route path="/explore" element={<ExplorePage />} />

          {/* Login Page Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Register Page Route */}
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
