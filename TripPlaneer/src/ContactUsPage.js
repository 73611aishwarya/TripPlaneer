import React, { useState } from 'react';
import './ContactUsPage.css';

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false); // API Loading State

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    const contactData = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      sentAt: new Date().toISOString() // Correct date format
    };
  
    try {
      const response = await fetch("http://tripplanner1.ap-south-1.elasticbeanstalk.com/api/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*"
        },
        body: JSON.stringify(contactData)
      });
  
      if (!response.ok) throw new Error("Failed to send message");
  
      alert("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message, please try again.");
    } finally {
      setLoading(false);
    }
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
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </main>

      <footer>
        <p>© 2024 Travel Planner. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ContactUsPage;
