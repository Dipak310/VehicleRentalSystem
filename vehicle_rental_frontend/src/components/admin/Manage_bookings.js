import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarLogin from '../NavbarLogin';

function Manage_bookings() {
  const [bookings, setBookings] = useState([]);
  const [editingBookingId, setEditingBookingId] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('http://localhost:8080/bookings');
      // Ensure that response.data is an array before setting it as state
      if (Array.isArray(response.data)) {
        setBookings(response.data);
      } else {
        console.error('Error: Response data is not an array');
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleUpdateBooking = (bookingId) => {
    const updatedData = {};

    if (editedData.pickupDate !== undefined) updatedData.pickupDate = editedData.pickupDate;
    if (editedData.returnDate !== undefined) updatedData.returnDate = editedData.returnDate;
    // Add more fields similarly

    if (Object.keys(updatedData).length > 0) {
      axios.put(`http://localhost:8080/bookings/${bookingId}`, updatedData)
        .then(response => {
          console.log('Booking updated:', response.data);
          fetchBookings();
        })
        .catch(error => {
          console.error('Error updating booking:', error);
        });
    }
  };

  const handleRemoveBooking = bookingId => {
    axios.delete(`http://localhost:8080/bookings/${bookingId}`)
      .then(response => {
        console.log('Booking removed:', response.data);
        fetchBookings();
      })
      .catch(error => {
        console.error('Error removing booking:', error);
      });
  };

  const handleEditDataChange = (fieldName, value) => {
    setEditedData(prevData => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleConfirmBooking = (bookingId) => {
    // Send a request to update the status to "Confirmed"
    axios.put(`http://localhost:8080/bookings/${bookingId}`, { status: 'Confirmed' })
      .then(response => {
        console.log('Booking confirmed:', response.data);
        fetchBookings();
      })
      .catch(error => {
        console.error('Error confirming booking:', error);
      });
  };

  return (
    <>
      <NavbarLogin />
      <div>
      <h2>Booking List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Pickup Date</th>
            <th>Return Date</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Confirm</th> {/* Add a new table header for Confirm button */}
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking.bookingId}>
              <td>{booking.bookingId}</td>
              <td>
                {editingBookingId === booking.bookingId ? (
                  <input
                    type="datetime-local"
                    value={editedData.pickupDate !== undefined ? editedData.pickupDate : booking.pickupDate}
                    onChange={e => handleEditDataChange('pickupDate', e.target.value)}
                    disabled={!editMode}
                  />
                ) : (
                  booking.pickupDate
                )}
              </td>
              <td>
                {editingBookingId === booking.bookingId ? (
                  <input
                    type="datetime-local"
                    value={editedData.returnDate !== undefined ? editedData.returnDate : booking.returnDate}
                    onChange={e => handleEditDataChange('returnDate', e.target.value)}
                    disabled={!editMode}
                  />
                ) : (
                  booking.returnDate
                )}
              </td>
              <td>
                {editingBookingId === booking.bookingId ? (
                  <input
                    type="text"
                    value={editedData.totalAmount !== undefined ? editedData.totalAmount : booking.totalAmount}
                    onChange={e => handleEditDataChange('totalAmount', e.target.value)}
                    disabled={!editMode}
                  />
                ) : (
                  booking.totalAmount
                )}
              </td>
              <td>
                {editingBookingId === booking.bookingId ? (
                  <input
                    type="text"
                    value={editedData.status !== undefined ? editedData.status : booking.status}
                    onChange={e => handleEditDataChange('status', e.target.value)}
                    disabled={!editMode}
                  />
                ) : (
                  booking.status
                )}
              </td>
              <td>
                {editingBookingId === booking.bookingId ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      handleUpdateBooking(booking.bookingId);
                      setEditingBookingId(null);
                      setEditMode(false);
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      setEditingBookingId(booking.bookingId);
                      setEditMode(true);
                      setEditedData({});
                    }}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveBooking(booking.bookingId)}
                >
                  Delete
                </button>
              </td>
              <td>
                {/* Add a button to confirm the booking */}
                {booking.status !== 'Confirmed' && (
                  <button
                    className="btn btn-success"
                    onClick={() => handleConfirmBooking(booking.bookingId)}
                  >
                    Confirm
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default Manage_bookings;
