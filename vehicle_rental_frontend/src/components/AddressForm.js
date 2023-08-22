import React, { useState } from 'react';
import axios from 'axios';

const AddressForm = () => {
  const [streetAddress, setStreetAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an address object based on form inputs
    const newAddress = {
      streetAddress,
      city,
      state,
      postalCode,
    };

    // Send the address to the backend
    axios.post('/api/addresses', newAddress)
      .then(response => {
        console.log('Address successfully submitted:', response.data);
        // Clear form fields or show a success message
      })
      .catch(error => {
        console.error('Error submitting address:', error);
        // Handle error, show an error message, etc.
      });
  };

  return (
    <div>
      <h2>Address Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for streetAddress, city, state, postalCode */}
        <button type="submit">Submit Address</button>
      </form>
    </div>
  );
};

export default AddressForm;
