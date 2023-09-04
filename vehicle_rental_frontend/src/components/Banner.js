import React, { useEffect, useState } from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const car = JSON.parse(localStorage.getItem('carDetails'));

  const [formData, setFormData] = useState({
    pickup_date: '', // Initialize with empty string
    return_date: '', // Initialize with empty string
    status: 'Available', // Set a default value
    total_amount: 0, // Set a default value
    car: car, // You need to set this based on the selected car
    customer: user,
    location: 'location1', // Default location
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Format the dates and include them in the formData
    const formattedFormData = {
      ...formData,
      pickupDate: new Date(formData.pickup_date).toISOString(),
      returnDate: new Date(formData.return_date).toISOString(),
    };

    axios.post('http://localhost:8080/bookings', formattedFormData)
      .then(response => {
        navigate('/payment');
        // window.alert('Booking successful:', response.data);
        localStorage.setItem('booking', JSON.stringify(response.data));
      })
      .catch(error => {
        console.error('Error booking car:', error);
      });
  };

  useEffect(()=>{
    console.log(formData);
  },[formData])

  const handleInputChange = (event ,property) => {
    setFormData({...formData,[property]: event.target.value});
  };

  return (
    <Container>
      <h2 className="mt-5">Book Car Now</h2>
      <Form id="carAvailabilityForm" className="mt-4" onSubmit={handleFormSubmit}>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="startDate">Start Date:</Label>
              <Input
                type="date"
                id="startDate"
                name="startDate"
                onChange={(e) => handleInputChange(e,'pickup_date')}
                required
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="endDate">End Date:</Label>
              <Input
                type="date"
                id="endDate"
                name="endDate"
                onChange={(e) => handleInputChange(e,'return_date')}
                required
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="location">Location:</Label>
              <Input
                type="select"
                id="location"
                name="location"
                value={formData.location}
                onChange={(e) => handleInputChange(e,'location')}
              >
                <option value="location1">Mumbai</option>
                <option value="location2">Pune</option>
                <option value="location3">Delhi</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Button color="primary" id="searchButton" type="submit">
          Book Now
        </Button>
      </Form>
      <div id="searchResults"></div>
    </Container>
  );
}

export default Banner;
