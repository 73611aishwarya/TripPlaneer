import React, { useState } from "react";

const HelpPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const faqData = [
    {
      question: "How do I plan my trip using Easy Trip Planner?",
      answer: "Use the trip planner tool to enter destinations, dates, and preferences. We'll generate a tailored itinerary for you!",
    },
    {
      question: "Can I customize my trip itinerary?",
      answer: "Yes, you can add or remove activities, change timings, and include specific places you'd like to visit.",
    },
    {
      question: "How do I book travels and hotels?",
      answer: "Navigate to the 'Booking' section to browse and book hotels and other travel options.",
    },
    {
      question: "Can I save my trip plans for future reference?",
      answer: "Yes, log in to your account to save and revisit your trip plans anytime.",
    },
    {
      question: "What is the cancellation policy?",
      answer: "The cancellation policy depends on the specific booking. Check the terms and conditions for each service.",
    },
    {
      question: "How can I contact customer support?",
      answer: "Click on the 'Contact Support' button or email us at support@easytripplanner.com.",
    },
    {
      question: "Can I modify my bookings after confirmation?",
      answer: "Yes, modifications are allowed based on the provider’s terms. Visit the 'Manage Bookings' section.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept credit/debit cards, PayPal, and other secure payment methods.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const styles = {
    page: {
      backgroundColor: "#87CEEB", // Light sky blue color
      minHeight: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    container: {
      padding: "40px",
      maxWidth: "800px",
      margin: "0 auto",
      background: "rgba(255, 255, 255, 0.95)",
      borderRadius: "10px",
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      textAlign: "center",
      color: "#0056b3",
      fontSize: "36px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    faqSection: {
      marginTop: "20px",
    },
    faqItem: {
      marginBottom: "15px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      overflow: "hidden",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    },
    faqHeader: {
      backgroundColor: "#f7f7f7",
      padding: "15px",
      cursor: "pointer",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "18px",
      fontWeight: "bold",
      transition: "background-color 0.3s",
    },
    faqHeaderHovered: {
      backgroundColor: "#e9f5ff",
    },
    faqAnswer: {
      padding: "0 15px",
      fontSize: "16px",
      color: "#555",
      backgroundColor: "#ffffff",
      maxHeight: "0",
      overflow: "hidden",
      transition: "all 0.3s ease-out",
    },
    faqAnswerOpen: {
      maxHeight: "200px",
      padding: "15px",
    },
    contactButton: {
      display: "block",
      margin: "20px auto",
      padding: "12px 20px",
      backgroundColor: "#0056b3",
      color: "#ffffff",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
    },
    contactInfo: {
      textAlign: "center",
      marginTop: "10px",
 fontSize: "16px",
      color: "#555",
    },
    footer: {
      marginTop: "30px",
      textAlign: "center",
      fontSize: "14px",
      color: "#555",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.header}>Help Center</h1>
        <div style={styles.faqSection}>
          {faqData.map((faq, index) => (
            <div key={index} style={styles.faqItem} onClick={() => toggleFAQ(index)}>
              <div style={{ ...styles.faqHeader, ...(openFAQ === index ? styles.faqHeaderHovered : {}) }}>
                {faq.question}
                <span>{openFAQ === index ? "-" : "+"}</span>
              </div>
              <div style={{ ...styles.faqAnswer, ...(openFAQ === index ? styles.faqAnswerOpen : {}) }}>
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
        <button style={styles.contactButton} onClick={() => setShowContactInfo(!showContactInfo)}>
          Contact Us
        </button>
        {showContactInfo && (
          <div style={styles.contactInfo}>
            <p>Email: support@easytripplanner.com</p>
            <p>Phone: +1-800-123-4567</p>
          </div>
        )}
        <div style={styles.footer}>
          <p>© 2024 Easy Trip Planner. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;