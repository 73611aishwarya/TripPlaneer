import React from 'react';
import './AboutUs.css'; // Make sure to import the CSS file

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <header className="about-us-header">
                <h1>About Us</h1>
            </header>

            <section className="about-us-content">
                <p className="intro-text">
                    Welcome to Easy Trip Planner, your ultimate travel companion designed to simplify and enhance your travel planning experience. Our mission is to make travel accessible, enjoyable, and stress-free for everyone, from seasoned explorers to first-time adventurers.
                </p>
                
                <h2 className="section-title">Our Vision</h2>
                <p className="section-text">
                    At Easy Trip Planner, we envision a world where travel planning is seamless and personalized. We believe that every journey should be memorable, and our platform is dedicated to helping you discover new destinations, engage with local cultures, and create unforgettable experiences.
                </p>

                <h2 className="section-title">What We Offer</h2>
                <ul className="offerings-list">
                    <li>Customized travel itineraries based on your preferences and interests.</li>
                    <li>Real-time information on flights, accommodations, and local attractions.</li>
                    <li>Integration with various travel services, including meal delivery and ride-hailing.</li>
                    <li>A vibrant community where travelers can share experiences, tips, and recommendations.</li>
                    <li>Tools for budgeting and expense tracking to help you manage your travel costs.</li>
                </ul>

                <h2 className="section-title">Our Team</h2>
                <p className="section-text">
                    Our team is composed of passionate travel enthusiasts and technology experts who are committed to providing you with the best travel planning experience. We continuously strive to improve our platform by incorporating user feedback and the latest technological advancements.
                </p>

                <h2 className="section-title">Join Us</h2>
                <p className="section-text">
                    We invite you to join our community of travelers and start planning your next adventure with Easy Trip Planner. Whether you're looking to explore a new city, try local cuisine, or meet new people, we are here to help you every step of the way.
                </p>

                <h2 className="section-title">Contact Us</h2>
                <p className="contact-text">
                    If you have any questions, suggestions, or feedback, please feel free to reach out to us at <a href="mailto:support@easytripplanner.com">support@easytripplanner.com</a>. We would love to hear from you!
                </p>
            </section>
        </div>
    );
};

export default AboutUs;
