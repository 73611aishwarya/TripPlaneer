import React, { useState } from 'react';
import './ContactUsPage.css';

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally here you would send the form data to a backend or API
    console.log('Form submitted:', formData);
    alert('Your message has been sent!');
  };

  return (
    <div className="contact-us-page">
      <header className="navbar">
        <div className="logo">
          <img src="./assets/images/logo.png" alt="Logo" className="logo-image" />
          MH Trip Planner
        </div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/explore">Explore</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="#logout">Logout</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Contact Form Section */}
      <main className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              required
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </main>

      {/* Footer Section */}
      <footer>
        <p>© 2024 Travel Planner. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUsPage;
