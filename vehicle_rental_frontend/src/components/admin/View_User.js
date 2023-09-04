import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarLogin from '../NavbarLogin';

function ViewCustomers() {
  const [customers, setCustomers] = useState([]);
  const [editingCustomerId, setEditingCustomerId] = useState(null);
  const [editedData, setEditedData] = useState({});
  const [editMode, setEditMode] = useState(false); // Add edit mode state

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/customers');
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  // const handleUpdateCustomer = (customerId, updatedData) => {
  //   axios.put(`http://localhost:8080/customers/${customerId}`, updatedData)
  //     .then(response => {
  //       console.log('Customer updated:', response.data);
  //       fetchCustomers();
  //       setEditingCustomerId(null); // Clear editing mode after update
  //       setEditMode(false); // Disable edit mode after update
  //     })
  //     .catch(error => {
  //       console.error('Error updating customer:', error);
  //     });
  // };

  const handleUpdateCustomer = (customerId) => {
    const updatedData = {};

    if (editedData.firstName !== undefined) {
      updatedData.firstName = editedData.firstName;
    }

    if (editedData.lastName !== undefined) {
      updatedData.lastName = editedData.lastName;
    }
    if (editedData.email !== undefined) updatedData.email = editedData.email;
    if (editedData.role !== undefined) updatedData.role = editedData.role;
    if (editedData.phoneNumber !== undefined) updatedData.phoneNumber = editedData.phoneNumber;
    if (editedData.dateOfBirth !== undefined) updatedData.dateOfBirth = editedData.dateOfBirth;
    if (editedData.licenseNumber !== undefined) updatedData.licenseNumber = editedData.licenseNumber;
    if (editedData.username !== undefined) updatedData.username = editedData.username;
    if (editedData.password !== undefined) updatedData.password = editedData.password;
    if (editedData.loggedIn !== undefined) updatedData.loggedIn = editedData.loggedIn;



    // Repeat the above pattern for other fields...

    // Check if any field was edited before making the request
    if (Object.keys(updatedData).length > 0) {
      axios.put(`http://localhost:8080/customers/${customerId}`, updatedData)
        .then(response => {
          console.log('Customer updated:', response.data);
          fetchCustomers(); // Refresh the customer list
        })
        .catch(error => {
          console.error('Error updating customer:', error);
        });
    }
  };


  const handleRemoveCustomer = customerId => {
    axios.delete(`http://localhost:8080/customers/${customerId}`)
      .then(response => {
        console.log('Customer removed:', response.data);
        fetchCustomers();
      })
      .catch(error => {
        console.error('Error removing customer:', error);
      });
  };

  // const handleEditDataChange = (fieldName, value) => {
  //   setEditedData(prevData => ({
  //     ...prevData,
  //     [fieldName]: value
  //   }));
  // };

  const handleEditDataChange = (fieldName, value) => {
    setEditedData(prevData => ({
      ...prevData,
      [fieldName]: value,
    }));
  };


  return (
    <div>
      <NavbarLogin />
      <h2>Customer List</h2>
      <table className="table">
        <thead>
          <tr>
            {/* ... table headers ... */}

            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Phone Number</th>
            <th>Date of Birth</th>
            <th>License Number</th>
            <th>Username</th>
            <th>Password</th>
            <th>Logged In</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.customerId}>
              <td>{customer.customerId}</td>

              {/* <td>
  {editingCustomerId === customer.customerId ? (
    <input
      type="text"
      value={editedData.firstName !== undefined ? editedData.firstName : customer.firstName}
      onChange={e => handleEditDataChange('firstName', e.target.value)}
      disabled={!editMode}
    />
  ) : (
    customer.firstName
  )}
</td> */}


              <td>
                {editingCustomerId === customer.customerId ? (
                  <input
                    type="text"
                    value={editedData.firstName !== undefined ? editedData.firstName : customer.firstName}
                    onChange={e => handleEditDataChange('firstName', e.target.value)}
                    disabled={!editMode}
                  />
                ) : (
                  customer.firstName
                )}
              </td>

              <td>
                {editingCustomerId === customer.customerId ? (
                  <input
                    type="text"
                    value={editedData.lastName !== undefined ? editedData.lastName : customer.lastName}
                    onChange={e => handleEditDataChange('lastName', e.target.value)}
                    disabled={!editMode}
                  />
                ) : (
                  customer.lastName
                )}
              </td>

              <td>
                {editingCustomerId === customer.customerId ? (
                  <input
                    type="email"
                    value={editedData.email !== undefined ? editedData.email : customer.email}
                    onChange={e => handleEditDataChange('email', e.target.value)}
                    disabled={!editMode}
                  />
                ) : (
                  customer.email
                )}
              </td>

              <td>
                {editingCustomerId === customer.customerId ? (
                  <input
                    type="text"
                    value={editedData.role !== undefined ? editedData.role : customer.role}
                    onChange={e => handleEditDataChange('role', e.target.value)}
                    disabled={!editMode}
                  />
                ) : (
                  customer.role
                )}
              </td>


              <td>
                {editingCustomerId === customer.customerId ? (
                  <input
                    type="text"
                    value={editedData.phoneNumber !== undefined ? editedData.phoneNumber : customer.phoneNumber}
                    onChange={e => handleEditDataChange('phoneNumber', e.target.value)}
                    disabled={!editMode}
                  />
                ) : (
                  customer.phoneNumber
                )}
              </td>

              <td>
                {editingCustomerId === customer.customerId ? (
                  <input
                    type="text"
                    value={editedData.dateOfBirth !== undefined ? editedData.dateOfBirth : customer.dateOfBirth}
                    onChange={e => handleEditDataChange('dateOfBirth', e.target.value)}
                    disabled={!editMode}
                  />
                ) : (
                  customer.dateOfBirth
                )}
              </td>

              <td>
                {editingCustomerId === customer.customerId ? (
                  <input
                    type="text"
                    value={editedData.licenseNumber !== undefined ? editedData.licenseNumber : customer.licenseNumber}
                    onChange={e => handleEditDataChange('licenseNumber', e.target.value)}
                    disabled={!editMode}
                  />
                ) : (
                  customer.licenseNumber
                )}
              </td>

              <td>
                {editingCustomerId === customer.customerId ? (
                  <input
                    type="text"
                    value={editedData.username !== undefined ? editedData.username : customer.username}
                    onChange={e => handleEditDataChange('username', e.target.value)}
                    disabled={!editMode}
                  />
                ) : (
                  customer.username
                )}
              </td>

              <td>
                {editingCustomerId === customer.customerId ? (
                  <input
                    type="text"
                    value={editedData.password !== undefined ? editedData.password : customer.password}
                    onChange={e => handleEditDataChange('password', e.target.value)}
                    disabled={!editMode}
                  />
                ) : (
                  customer.password
                )}
              </td>

              <td>
                {editingCustomerId === customer.customerId ? (
                  <select
                    value={editedData.loggedIn !== undefined ? (editedData.loggedIn ? 'yes' : 'no') : (customer.loggedIn ? 'yes' : 'no')}
                    onChange={e => handleEditDataChange('loggedIn', e.target.value === 'yes')}
                    disabled={!editMode}
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                ) : (
                  customer.loggedIn ? 'Yes' : 'No'
                )}
              </td>

              {/* ... table data for other fields ... */}
              <td>
                {editingCustomerId === customer.customerId ? (
                  <button
                    className="btn btn-primary"
                    // onClick={() => {
                    //   handleUpdateCustomer(customer.customerId, editedData);
                    // }}

                    onClick={() => {
                      const updatedData = {};

                      // Add only the fields that were edited to updatedData
                      // if (editedData.firstName !== undefined) updatedData.firstName = editedData.firstName;
                      // if (editedData.lastName !== undefined) updatedData.lastName = editedData.lastName;
                      // // Add more fields similarly





                      handleUpdateCustomer(customer.customerId, updatedData);
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      setEditingCustomerId(customer.customerId);
                      setEditMode(true); // Enable edit mode when clicking Edit
                      setEditedData({}); // Clear any previously edited data
                    }}
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveCustomer(customer.customerId)}
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

export default ViewCustomers;
