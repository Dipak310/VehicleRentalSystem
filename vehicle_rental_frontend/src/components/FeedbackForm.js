import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [booking, setBooking] = useState({});
  const [rating, setRating] = useState(5);
  const [comments, setComments] = useState('');

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
    // Submit feedback request and handle response
    axios.post(`/api/feedback`, {
      bookingId: booking.bookingId,
      rating,
      comments
    })
    .then(response => {
      console.log('Feedback submitted:', response.data);
    })
    .catch(error => {
      console.error('Feedback submission error:', error);
    });
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <p>Booking ID: {booking.bookingId}</p>
      <form onSubmit={handleFormSubmit}>
        <label>Rating:</label>
        <select value={rating} onChange={e => setRating(e.target.value)}>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
        <label>Comments:</label>
        <textarea value={comments} onChange={e => setComments(e.target.value)} />
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
