import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../utils/api';


function BookingForm() {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  useEffect(() => {
    axios.get('/api/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create booking request and handle response
    axios.post('/api/bookings', {
      carId: selectedCar,
      pickupDate,
      returnDate
    })
    .then(response => {
      console.log('Booking successful:', response.data);
    })
    .catch(error => {
      console.error('Booking error:', error);
    });
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Select a Car:</label>
        <select value={selectedCar} onChange={e => setSelectedCar(e.target.value)}>
          <option value="">Select a car</option>
          {cars.map(car => (
            <option key={car.carId} value={car.carId}>
              {car.make} {car.model}
            </option>
          ))}
        </select>
        <label>Pickup Date:</label>
        <input type="date" value={pickupDate} onChange={e => setPickupDate(e.target.value)} />
        <label>Return Date:</label>
        <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;
