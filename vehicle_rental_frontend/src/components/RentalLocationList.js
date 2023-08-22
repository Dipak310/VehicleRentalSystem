import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RentalLocationList() {
  const [rentalLocations, setRentalLocations] = useState([]);

  useEffect(() => {
    axios.get('/api/rental-locations')
      .then(response => {
        setRentalLocations(response.data);
      })
      .catch(error => {
        console.error('Error fetching rental locations:', error);
      });
  }, []);

  return (
    <div>
      <h2>Rental Locations</h2>
      <ul>
        {rentalLocations.map(location => (
          <li key={location.locationId}>
            <h3>{location.name}</h3>
            <p>{location.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RentalLocationList;
