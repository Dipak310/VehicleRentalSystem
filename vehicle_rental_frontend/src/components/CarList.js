import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch data from backend when component mounts
    axios.get('/api/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map(car => (
          <li key={car.carId}>{car.make} {car.model}</li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
