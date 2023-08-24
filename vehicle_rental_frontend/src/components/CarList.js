import React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import sampleCarImage from '../Images/recent-car-6.jpg'; // Import your sample car image
import '../css/carlist.css'; // Import your custom CSS for animationsyyyyyyy
import img1 from '../Images/recent-car-1.jpg';
import img2 from '../Images/recent-car-2.jpg';
import img3 from '../Images/recent-car-3.jpg';

// function CarList() {
//   const cars = [
//     { id: 1, name: 'Car Model 1', imageUrl: 'car1.jpg' },
//     { id: 2, name: 'Car Model 2', imageUrl: 'car2.jpg' },
//     // Add more cars
//   ];

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
    <>
    <div class="container mt-5">
    <h2 class="text-center">Auto Car Carousel</h2>
    <div id="carCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={img1} class="d-block w-100" alt="Car 1"/>
        </div>
        <div class="carousel-item">
          <img src={img2} class="d-block w-100" alt="Car 2"/>
        </div>
        <div class="carousel-item">
          <img src={img3} class="d-block w-100" alt="Car 3"/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>

    {/* <section class="car-listing">
    <h2>Featured Cars</h2>
    <div class="car-grid">
        <div class="car">
            <img src={sampleCarImage} alt="Car 1"/>
            <h3>Car Model 1</h3>
            <p>Starting at $50/day</p>
            <a href="#" class="btn">Rent Now</a>
        </div>
        <div class="car">
            <img src={sampleCarImage} alt="Car 2"/>
            <h3>Car Model 2</h3>
            <p>Starting at $60/day</p>
            <a href="#" class="btn">Rent Now</a>
        </div>
    </div>
</section> */}

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
    </>
    
  );
}

export default CarList;
