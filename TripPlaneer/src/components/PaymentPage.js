import React, { useState } from 'react';
import './PaymentPage.css';  // Import the enhanced CSS file

const PaymentPage = () => {
  const [basePrice] = useState(500);  // Set the base price as a fixed value (e.g., 500 INR)
  const [selectedPayment, setSelectedPayment] = useState('');
  const [totalAmount, setTotalAmount] = useState(basePrice);

  // Define the payment options
  const paymentOptions = [
    { name: 'Credit Card', image: require('./creditcard.avif') }, // Adjust path as needed
    { name: 'PhonePay', image: require('./phonepe.png') }, // Adjust path as needed
    { name: 'Bank Transfer', image: require('./bank.png') }, // Adjust path as needed
    { name: 'Mobile Payment', image: require('./mobilepe.avif') }, // Adjust path as needed
  ];

  // Handle payment option change
  const handlePaymentChange = (paymentOption) => {
    setSelectedPayment(paymentOption);
    setTotalAmount(basePrice);  // Assuming no tax for simplicity
  };

  // Function to handle Logout
  const handleLogout = () => {
    console.log('User  logged out');
  };

  // Function to handle Details
  const handleDetails = () => {
    console.log('Navigating to details page');
  };

  // Function to handle Ticket Booking
  const handleTicketBooking = () => {
    console.log('Booking ticket');
  };

  return (
    <div className="payment-container">
      <h1>Select Payment Option</h1>

      {/* Display payment options as image cards */}
      <div className="payment-options">
        {paymentOptions.map((option, index) => (
          <div
            key={index}
            onClick={() => handlePaymentChange(option.name)}
            className={`payment-option ${selectedPayment === option.name ? 'selected' : ''}`}
          >
            <img src={option.image} alt={option.name} className="payment-image" />
            <p>{option.name}</p>
          </div>
        ))}
        <div
          onClick={() => handlePaymentChange('Cash')}
          className={`payment-option ${selectedPayment === 'Cash' ? 'selected' : ''}`}
        >
          <img src={require('./cash.jpg')} alt="Cash" className="payment-image" />
          <p>Cash</p>
        </div>
      </div>

      {/* Show the selected payment method */}
      {selectedPayment && (
        <div className="selected-payment-info">
          <p>You have selected: <strong>{selectedPayment}</strong></p>
        </div>
      )}

      {/* Display total amount */}
      <div className="total-amount">
        <h3>Total Amount: ₹{totalAmount.toFixed(2)}</h3>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons">
        <button onClick={handleLogout}>Logout</button>
        <button className="gray-button" onClick={handleDetails}>Details</button>
        <button onClick={handleTicketBooking}>Ticket Booking</button>
      </div>
    </div>
  );
};

export default PaymentPage;