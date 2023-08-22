import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CarList() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8081/cars') // Update the API endpoint
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        setError('Error fetching car data');
      });
  }, []);

  return (
    <div>
      <h2>Car List</h2>
      {error && <div className="errorWrap">{error}</div>}

      <table className="table">
        <thead>
          <tr>
            <th>Car ID</th>
            <th>Model</th>
            <th>License Plate</th>
            <th>Mileage</th>
            <th>Fuel Type</th>
            <th>Transmission Type</th>
            <th>Seating Capacity</th>
            <th>Daily Rental Rate</th>
            <th>Available</th>
            <th>Last Maintenance Date</th>
          </tr>
        </thead>
        <tbody>
          {cars.map(car => (
            <tr key={car.carId}>
              <td>{car.carId}</td>
              <td>{car.model}</td>
              <td>{car.licensePlate}</td>
              <td>{car.mileage}</td>
              <td>{car.fuelType}</td>
              <td>{car.transmissionType}</td>
              <td>{car.seatingCapacity}</td>
              <td>{car.dailyRentalRate}</td>
              <td>{car.available ? 'Yes' : 'No'}</td>
              <td>{car.lastMaintenanceDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarList;
