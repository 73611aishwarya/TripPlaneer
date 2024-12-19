import React, { useState } from 'react';
import './PaymentPage.css';  // Import the enhanced CSS file

const PaymentPage = () => {
  const [basePrice] = useState(500);  // Set the base price as a fixed value (e.g., 500 INR)
  const [selectedPayment, setSelectedPayment] = useState('');
  const [totalAmount, setTotalAmount] = useState(basePrice);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  // Define the payment options and associated taxes
  const paymentOptions = [
    { name: 'Credit Card', tax: 0.05 },
    { name: 'PhonePay', tax: 0.03 },
    { name: 'Bank Transfer', tax: 0.07 },
    { name: 'Mobile Payment', tax: 0.04 },
  ];

  // Handle payment option change
  const handlePaymentChange = (paymentOption) => {
    setSelectedPayment(paymentOption);
    if (paymentOption === 'Cash') {
      setTotalAmount(basePrice);  // No tax for Cash payment
    } else {
      const tax = paymentOptions.find(option => option.name === paymentOption).tax;
      setTotalAmount(basePrice * (1 + tax));  // Apply tax based on the selected option
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    if (selectedPayment) {
      setPaymentSuccess(true);
    } else {
      setPaymentSuccess(false);
    }
  };

  return (
    <div className="payment-container">
      <h1>Payment Details</h1>

      {/* Display payment options */}
      <h2>Select Payment Option</h2>
      <div className="payment-options">
        {paymentOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handlePaymentChange(option.name)}
            className={`payment-option ${selectedPayment === option.name ? 'selected' : ''}`}
          >
            {option.name} (Tax: {option.tax * 100}%)
          </button>
        ))}
        <button
          onClick={() => handlePaymentChange('Cash')}
          className={`payment-option ${selectedPayment === 'Cash' ? 'selected' : ''}`}
        >
          Cash (No Tax)
        </button>
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

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className={`submit-button ${selectedPayment ? '' : 'disabled'}`}
        disabled={!selectedPayment}
      >
        Submit Payment
      </button>

      {/* Display success/failure message */}
      {paymentSuccess !== null && (
        <div className={`payment-status ${paymentSuccess ? 'success' : 'failure'}`}>
          {paymentSuccess ? 'Payment Successful!' : 'Please select a payment method.'}
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
