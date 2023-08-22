import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; // Import your Navbar component here

function ManageVehicles() {
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    // Fetch vehicle data from the backend
    axios.get('/api/vehicles')
      .then(response => {
        setVehicles(response.data);
      })
      .catch(error => {
        setError('Error fetching vehicle data');
      });
  }, []);

  const handleDelete = (id) => {
    // Send delete request to the backend
    axios.delete(`/api/vehicles/${id}`)
      .then(response => {
        setMsg('Vehicle record deleted successfully');
        // Refresh the vehicle data
        setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
      })
      .catch(error => {
        setError('Error deleting vehicle record');
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        {/* Display success or error messages */}
        {error && <div className="errorWrap">{error}</div>}
        {msg && <div className="succWrap">{msg}</div>}

        {/* Display vehicle details */}
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Vehicle Title</th>
              <th>Brand</th>
              <th>Price Per day</th>
              <th>Fuel Type</th>
              <th>Model Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr key={vehicle.id}>
                <td>{index + 1}</td>
                <td>{vehicle.VehiclesTitle}</td>
                <td>{vehicle.BrandName}</td>
                <td>{vehicle.PricePerDay}</td>
                <td>{vehicle.FuelType}</td>
                <td>{vehicle.ModelYear}</td>
                <td>
                  <a href={`/edit-vehicle/${vehicle.id}`}><i className="fa fa-edit"></i></a>&nbsp;&nbsp;
                  <button onClick={() => handleDelete(vehicle.id)}><i className="fa fa-close"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageVehicles;
