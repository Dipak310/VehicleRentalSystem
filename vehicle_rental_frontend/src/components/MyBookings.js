import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import axios from 'axios';
import NavbarLogin from './NavbarLogin';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const currentUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    // Fetch booking data for the current user using the customerId
    axios.get(`http://localhost:8080/bookings/customer/${currentUser.customerId}`)
      .then((response) => {
        setBookings(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [currentUser]);

  return (
    <>
      <NavbarLogin />
      <Container>
      <h1>Booking Details for {currentUser.username}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Pickup Date</th>
            <th>Return Date</th>
            <th>Total Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.bookingId}>
              <td>{booking.bookingId}</td>
              <td>{new Date(booking.pickupDate).toLocaleString()}</td>
              <td>{new Date(booking.returnDate).toLocaleString()}</td>
              <td>${booking.totalAmount}</td>
              <td>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
    </>
  );
};

export default BookingList;
