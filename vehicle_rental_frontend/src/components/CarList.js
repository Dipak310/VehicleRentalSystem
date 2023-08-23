import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sampleCarImage from '../Images/listing_img3.jpg'; // Import your sample car image
import '../css/CarList.css'; // Import your custom CSS for animations

function CarList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('http://localhost:8080/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Discover Our Cars</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cars.map(car => (
          <div key={car.carId} className="col">
            <div className="card car-card h-100 shadow car-animation">
              <img
                src={sampleCarImage} // Use the imported sample car image
                className="card-img-top car-image"
                alt={`${car.make} ${car.model}`}
              />
              <div className="card-body">
                <h5 className="card-title">{car.make} {car.model}</h5>
                <ul className="list-unstyled">
                  <li>
                    <strong>License Plate:</strong> {car.licensePlate}
                  </li>
                  <li>
                    <strong>Mileage:</strong> {car.mileage} miles
                  </li>
                  <li>
                    <strong>Fuel Type:</strong> {car.fuelType}
                  </li>
                  <li>
                    <strong>Transmission Type:</strong> {car.transmissionType}
                  </li>
                  <li>
                    <strong>Seating Capacity:</strong> {car.seatingCapacity} passengers
                  </li>
                  <li>
                    <strong>Daily Rental Rate: </strong> {car.dailyRentalRate.toFixed(2)}
                  </li>
                  <li>
                    <strong>Available:</strong> {car.available ? 'Yes' : 'No'}
                  </li>
                  <li>
                    <strong>Last Maintenance:</strong> {car.lastMaintenanceDate}
                  </li>
                </ul>
              </div>
              <div className="card-footer bg-transparent border-top-0">
                <a href={`/details/${car.carId}`} className="btn btn-primary">View Details</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarList;
