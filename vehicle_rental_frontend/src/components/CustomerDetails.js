import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CustomerDetails() {
  const [customer, setCustomer] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    axios.get('/api/customers/123') // Replace with the correct customer ID
      .then(response => {
        setCustomer(response.data);
      })
      .catch(error => {
        console.error('Error fetching customer:', error);
      });
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Update customer request and handle response
    axios.put(`/api/customers/${customer.customerId}`, customer)
      .then(response => {
        console.log('Customer updated:', response.data);
        setEditing(false);
      })
      .catch(error => {
        console.error('Customer update error:', error);
      });
  };

  return (
    <div>
      <h2>Customer Details</h2>
      {editing ? (
        <form onSubmit={handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            value={customer.name || ''}
            onChange={e => setCustomer({ ...customer, name: e.target.value })}
          />
          {/* Other input fields for email, phone number, address */}
          <button type="submit">Save</button>
        </form>
      ) : (
        <div>
          <p>Name: {customer.name}</p>
          {/* Display other customer information */}
          <button onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default CustomerDetails;
