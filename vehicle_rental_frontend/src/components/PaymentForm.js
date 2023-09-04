import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import NavbarLogin from '../components/NavbarLogin';

function PaymentComponent() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [amount, setAmount] = useState(0); // Initialize with 0
  const [bookingId, setBookingId] = useState('');
  const [transactionId, setTransactionId] = useState(''); // Added transactionId
  const [totalAmount, setTotalAmount] = useState(0); // Initialize totalAmount
  const booking = JSON.parse(localStorage.getItem('booking'));

  useEffect(() => {
    // Fetch totalAmount based on the booking ID
    axios.get(`http://localhost:8080/bookings/totalAmount/${booking.bookingId}`)
      .then(response => {
        setTotalAmount(response.data.totalAmount);
      })
      .catch(error => {
        console.error('Error fetching totalAmount:', error);
      });
  }, [booking.bookingId]); // Fetch when the booking ID changes

  const handlePayment = async () => {
    const paymentDetails = {
      cardNumber,
      expiryDate,
      cvv,
      paymentMethod,
      paymentDate: new Date().toISOString(), // Use the current date
      amount,
      booking: {
        bookingId: bookingId,
      },
      transactionId, // Include the transactionId
      totalAmount, // Include the totalAmount
    };

    try {
      const response = await axios.post('http://localhost:8080/payments', paymentDetails);

      console.log('Payment details:', paymentDetails);
      console.log('Backend response:', response.data);
    } catch (error) {
      console.error('Error sending payment:', error);
    }
  };

  return (
    <>
      < NavbarLogin />

      <Container>
      <h2>Make a Payment</h2>
      <Form>
        <Form.Group controlId="cardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="expiryDate">
          <Form.Label>Expiry Date</Form.Label>
          <Form.Control
            type="text"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="cvv">
          <Form.Label>CVV</Form.Label>
          <Form.Control
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="paymentMethod">
          <Form.Label>Payment Method</Form.Label>
          <Form.Control
            as="select"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="amount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder="Amount"
            value={totalAmount}
            onChange={(e) => setAmount(e.target.value)}
            readOnly
          />
        </Form.Group>
        <Form.Group controlId="bookingId">
          <Form.Label>Booking ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Booking ID"
            value={booking.bookingId}
            readOnly
          />
        </Form.Group>
        <Form.Group controlId="transactionId">
          <Form.Label>Transaction ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="totalAmount">
          <Form.Label>Total Amount</Form.Label>
          <Form.Control
            type="text"
            placeholder="Total Amount"
            value={totalAmount}
            readOnly
          />
        </Form.Group>
        <Button variant="primary" onClick={handlePayment}>
          Pay Now
        </Button>
      </Form>
    </Container>
    </>
  );
}

export default PaymentComponent;
