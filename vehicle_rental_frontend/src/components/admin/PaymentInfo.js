import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewPayments() {
  const [payments, setPayments] = useState([]);
  const [editingPaymentId, setEditingPaymentId] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/payments');
      setPayments(response.data);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  const handleUpdatePayment = (paymentId) => {
    const updatedData = {};

    if (editedData.paymentDate !== undefined) {
      updatedData.paymentDate = editedData.paymentDate;
    }

    if (editedData.amount !== undefined) {
      updatedData.amount = editedData.amount;
    }

    if (editedData.paymentMethod !== undefined) {
      updatedData.paymentMethod = editedData.paymentMethod;
    }

    // Add more fields similarly...

    // Check if any field was edited before making the request
    if (Object.keys(updatedData).length > 0) {
      axios.put(`http://localhost:8080/payments/${paymentId}`, updatedData)
        .then(response => {
          console.log('Payment updated:', response.data);
          fetchPayments();
        })
        .catch(error => {
          console.error('Error updating payment:', error);
        });
    }
  };

  const handleRemovePayment = (paymentId) => {
    axios.delete(`http://localhost:8080/payments/${paymentId}`)
      .then(response => {
        console.log('Payment removed:', response.data);
        fetchPayments();
      })
      .catch(error => {
        console.error('Error removing payment:', error);
      });
  };

  const handleEditDataChange = (fieldName, value) => {
    setEditedData(prevData => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <div>
      <h2>Payment List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Booking ID</th>
            <th>Payment Date</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Transaction ID</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.paymentId}>
              <td>{payment.paymentId}</td>
              <td>{payment.booking.bookingId}</td>

              <td>
  {editingPaymentId === payment.paymentId ? (
    <input
      type="datetime-local"
      value={editedData.paymentDate !== undefined ? editedData.paymentDate : payment.paymentDate}
      onChange={e => handleEditDataChange('paymentDate', e.target.value)}
      disabled={!editMode}
    />
  ) : (
    payment.paymentDate
  )}
</td>

<td>
  {editingPaymentId === payment.paymentId ? (
    <input
      type="number"
      step="0.01"
      value={editedData.amount !== undefined ? editedData.amount : payment.amount}
      onChange={e => handleEditDataChange('amount', parseFloat(e.target.value))}
      disabled={!editMode}
    />
  ) : (
    payment.amount
  )}
</td>

<td>
  {editingPaymentId === payment.paymentId ? (
    <input
      type="text"
      value={editedData.paymentMethod !== undefined ? editedData.paymentMethod : payment.paymentMethod}
      onChange={e => handleEditDataChange('paymentMethod', e.target.value)}
      disabled={!editMode}
    />
  ) : (
    payment.paymentMethod
  )}
</td>

<td>{payment.transactionId}</td>

              {/* ... other table data ... */}
              <td>
                {editingPaymentId === payment.paymentId ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      handleUpdatePayment(payment.paymentId);
                      setEditingPaymentId(null);
                      setEditMode(false);
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      setEditingPaymentId(payment.paymentId);
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
                  onClick={() => handleRemovePayment(payment.paymentId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewPayments;
