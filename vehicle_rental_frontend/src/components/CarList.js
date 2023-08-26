import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel, Container, Card, Button } from 'react-bootstrap';
import '../css/carlist.css';
import Navbar from './Navbar';
import Footer from './Footer';
import sampleCarImage from '../Images/recent-car-6.jpg';
import img1 from '../Images/recent-car-1.jpg';
import img2 from '../Images/recent-car-2.jpg';
import img3 from '../Images/recent-car-3.jpg';

function CarList() {
  const [cars, setCars] = useState([]);
  const [carImages, setCarImages] = useState({});
  const sampleCarImages = [img1, img2, img3];

  useEffect(() => {
    // Fetch car data from the backend when the component mounts
    axios.get('http://localhost:8080/cars')
      .then(response => {
        setCars(response.data);
        // After fetching car data, fetch car images for each car
        fetchCarImages(response.data);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  const fetchCarImages = (cars) => {
    // Fetch car images for each car and store them in the carImages state
    const carImagePromises = cars.map(async (car) => {
      try {
        // Fetch the image using the carId and carImages.id
        const response = await axios.get(`http://localhost:8080/cars/${car.carId}/images/${carImages.id}`, {
          responseType: 'arraybuffer', // Treat the response as binary data
        });
  
        // Convert the image data to a Base64 string
        const imageBase64 = Buffer.from(response.data, 'binary').toString('base64');
        
        return { carId: car.carId, imageData: `data:image/jpeg;base64,${imageBase64}` };
      } catch (error) {
        console.error('Error fetching car images:', error);
        return { carId: car.carId, imageData: null };
      }
    });
  
    Promise.all(carImagePromises)
      .then((results) => {
        const imageMap = {};
        results.forEach((result) => {
          const { carId, imageData } = result;
          if (imageData) {
            imageMap[carId] = imageData;
          }
        });
        setCarImages(imageMap);
      })
      .catch((error) => {
        console.error('Error fetching car images:', error);
      });
  };
  
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center">Auto Car Carousel</h2>
        <Carousel id="carCarousel" interval={1000}> {/* Autoplay interval set to 3 seconds (3000 milliseconds) */}
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
                  <Card.Img src={carImages[car.carId] || sampleCarImage} alt={`${car.make} ${car.model}`} />
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
