import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarLogin from '../components/NavbarLogin';

function CarList() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:8080/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleRemoveCar = carId => {
    axios.delete(`http://localhost:8080/cars/${carId}`)
      .then(response => {
        console.log('Customer removed:', response.data);
        fetchCars();
      })
      .catch(error => {
        console.error('Error removing customer:', error);
      });
  };

  return (
    <div>
      <NavbarLogin />
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
            <th>Delete</th>
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
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveCar(car.carId)}
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

export default CarList;
