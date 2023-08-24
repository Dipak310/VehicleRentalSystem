import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: 'Customer',
    phoneNumber: '',
    dateOfBirth: '',
    licenseNumber: '',
    username: '',
    password: '',
    loggedIn: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/customers', formData) // Updated API endpoint
      .then((response) => {
        console.log('Customer registered successfully!', response.data);
        // You can redirect the user to a success page or perform other actions here
      })
      .catch((error) => {
        console.error('Error registering customer:', error);
      });
  };

  return (
    <div>
      <h2>Register New Customer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Role</label>
          <div>
            <input
              type="radio"
              id="adminRole"
              name="role"
              value="Admin"
              checked={formData.role === 'Admin'}
              onChange={handleInputChange}
            />
            <label htmlFor="adminRole">Admin</label>
          </div>
          <div>
            <input
              type="radio"
              id="customerRole"
              name="role"
              value="Customer"
              checked={formData.role === 'Customer'}
              onChange={handleInputChange}
            />
            <label htmlFor="customerRole">Customer</label>
          </div>
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>License Number</label>
          <input
            type="text"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
