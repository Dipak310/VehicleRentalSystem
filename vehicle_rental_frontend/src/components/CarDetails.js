import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, ListGroup, ListGroupItem, Image } from 'react-bootstrap';
import Banner from './Banner';
import Navbar from './Navbar';
import Footer from './Footer';

function CarDetails() {
  const { id } = useParams(); // Get the car ID from the URL parameter
  const [carDetails, setCarDetails] = useState(null);

  useEffect(() => {
    // Fetch car details from the backend API based on the provided ID
    axios.get(`http://localhost:8080/cars/${id}`)
      .then(response => {
        setCarDetails(response.data); // Update carDetails in the context
        localStorage.setItem('carDetails', JSON.stringify(response.data));
      })
      .catch(error => console.error('Error fetching car details:', error));
  }, [id, setCarDetails]);

  if (!carDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col md={6}>
            <div className="car-details">
              <Card>
                <Card.Header>
                  <h4>Car Details</h4>
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroupItem>
                    Model: <span>{carDetails.model}</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    License Plate: <span>{carDetails.licensePlate}</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Mileage: <span>{carDetails.mileage} miles</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Fuel Type: <span>{carDetails.fuelType}</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Transmission Type: <span>{carDetails.transmissionType}</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Seating Capacity: <span>{carDetails.seatingCapacity}</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Daily Rental Rate: <span>${carDetails.dailyRentalRate}</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Available: <span>{carDetails.available ? 'Yes' : 'No'}</span>
                  </ListGroupItem>
                  <ListGroupItem>
                    Last Maintenance Date: <span>{carDetails.lastMaintenanceDate}</span>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </div>
          </Col>
          <Col md={6}>
            <Image
              src={carDetails.carImageLink || 'default-image-url.jpg'}
              alt={`${carDetails.make} ${carDetails.model}`}
              fluid
              className="p-3 border"
            />
          </Col>
        </Row>
      </Container>
      <Banner />
    </>
  );
}

export default CarDetails;
