import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PaymentForm() {
  const [booking, setBooking] = useState({});
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  useEffect(() => {
    axios.get('/api/bookings/123') // Replace with the correct booking ID
      .then(response => {
        setBooking(response.data);
      })
      .catch(error => {
        console.error('Error fetching booking:', error);
      });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Process payment request and handle response
    axios.post(`/api/payments`, {
      bookingId: booking.bookingId,
      creditCardNumber,
      expirationDate,
      cvv
    })
    .then(response => {
      console.log('Payment successful:', response.data);
    })
    .catch(error => {
      console.error('Payment error:', error);
    });
  };

  return (
    <div>
      <h2>Payment Form</h2>
      <p>Booking ID: {booking.bookingId}</p>
      <p>Total Amount: {booking.totalAmount}</p>
      <form onSubmit={handleFormSubmit}>
        <label>Credit Card Number:</label>
        <input type="text" value={creditCardNumber} onChange={e => setCreditCardNumber(e.target.value)} />
        {/* Other input fields for expiration date, CVV, etc. */}
        <button type="submit">Pay</button>
      </form>
    </div>
  );
}

export default PaymentForm;
