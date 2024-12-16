// export default HomePage;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Ensure you have the corresponding CSS
import mumbaiImage from './images/mumbaiImage.jpg' ;
import satara from './images/kaas.jpg';
import goaImage from './images/goa.jpg';
import logoImage from './images/logo.jpg';


function HomePage() {
  const [heroText, setHeroText] = useState('Welcome to Easy Trip Planner'); // Dynamic hero text

  // Sample destinations data (can be fetched from an API or defined here)
  const destinations = [
    { name: 'Mumbai', description: 'The City of Dreams', image: mumbaiImage},
    { name: 'Satara', description: 'The Heart of Maharashtra', image: satara },
    { name: 'Goa', description: 'Sun, Sea, and Sand', image:  goaImage},
  ];

  // Button click handler to change hero text dynamically
  const handleStartExploring = () => {
    setHeroText('Let’s Explore Amazing Places Together!');
    
  };

  return (
    <div className="home-page">
      {/* Header Section */}
      <header className="navbar">
        <div className="logo">
        <img src={logoImage} className="logo-image" alt="Trip Planner Logo" />
          Easy Trip Planner
        </div>
        <nav>
          <ul>
            <li><Link to="/aboutus">About Us</Link></li>
            {/* <li><Link to="/login">Login</Link></li> */}
            <li><Link to="/feedback">Feedback</Link></li>
            <li><a href="#logout">Logout</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section with Dynamic Content */}
      <main className="hero">
        <h1>{heroText}</h1>
        <p>Plan your dream trips with ease and explore the world!</p>
        <button className="explore-button" onClick={handleStartExploring}>
        <Link to="/explore" style={{ textDecoration: 'none', color: 'inherit' }}>
          Start Exploring
        </Link>
        </button>
        <button className="login-button">
      <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
        Login
      </Link>
    </button>
      </main>

      {/* Featured Destinations Section - Dynamic Rendering */}
      <section className="featured-destinations">
        <h2>Popular Destinations</h2>
        <div className="destination-cards">
          {destinations.map((destination, index) => (
            <div key={index} className="card">
              <img src={destination.image} alt={destination.name} />
              <div className="card-info">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <Link to="/explore" className="learn-more">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <p>© 2024 Travel Planner. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
