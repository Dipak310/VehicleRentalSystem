import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel, Container, Card, Button, Image } from 'react-bootstrap';
import '../css/carlist.css';
import img1 from '../Images/recent-car-1.jpg';
import img2 from '../Images/recent-car-2.jpg';
import img3 from '../Images/recent-car-3.jpg';

function CarList() {
  const [cars, setCars] = useState([]);
  const sampleCarImages = [img1, img2, img3];

  useEffect(() => {
    // Fetch car data from the backend when the component mounts
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
      <div className="container mt-3">
        <Carousel id="carCarousel" interval={1000}>
          {sampleCarImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image} className="d-block w-100" alt={`Car ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <Container className="my-5">
        <h2 className="text-center mb-4">Discover Our Cars</h2>
        {cars.length > 0 && (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {cars.map(car => (
              <div key={car.carId} className="col">
                <Card className="h-100 shadow car-animation">
                  <Card.Img
                    as={Image}
                    src={car.carImageLink || 'default-image-url.jpg'}
                    alt={`${car.make} ${car.model}`}
                    fluid
                    style={{ height: '200px' }} // Adjust the height as needed
                  />
                  <Card.Body>
                    <Card.Title>{car.make} {car.model}</Card.Title>
                    <ul className="list-unstyled">
                      <li>
                        <strong>Fuel Type:</strong> {car.fuelType}
                      </li>
                      <li>
                        <strong>Seating Capacity:</strong> {car.seatingCapacity} passengers
                      </li>
                      <li>
                        <strong>Daily Rental Rate:</strong> ${car.dailyRentalRate.toFixed(2)}
                      </li>
                      <li>
                        <strong>Available:</strong> {car.available ? 'Yes' : 'No'}
                      </li>
                    </ul>
                  </Card.Body>
                  <Card.Footer className="bg-transparent border-top-0">
                    <Button href={`/carDetails/${car.carId}`} variant="primary">View Details</Button>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}

export default CarList;
