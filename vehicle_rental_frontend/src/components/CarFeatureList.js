import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CarFeatureList() {
  const [carFeatures, setCarFeatures] = useState([]);

  useEffect(() => {
    axios.get('/api/car-features')
      .then(response => {
        setCarFeatures(response.data);
      })
      .catch(error => {
        console.error('Error fetching car features:', error);
      });
  }, []);

  return (
    <div>
      <h2>Car Features</h2>
      <ul>
        {carFeatures.map(feature => (
          <li key={feature.featureId}>{feature.featureName}</li>
        ))}
      </ul>
    </div>
  );
}

export default CarFeatureList;
