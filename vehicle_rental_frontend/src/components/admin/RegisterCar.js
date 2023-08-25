import React, { useState } from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';

function AddCar() {
  const [carData, setCarData] = useState({
    model: '',
    licensePlate: '',
    mileage: 0,
    fuelType: '',
    transmissionType: '',
    seatingCapacity: 0,
    dailyRentalRate: 0,
    available: true,
    lastMaintenanceDate: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleAddCar = () => {
    axios
      .post('http://localhost:8080/cars', carData) // Replace with your actual API URL
      .then((response) => {
        console.log('Car added:', response.data);
        // Reset form fields after successful submission
        setCarData({
          model: '',
          licensePlate: '',
          mileage: 0,
          fuelType: '',
          transmissionType: '',
          seatingCapacity: 0,
          dailyRentalRate: 0,
          available: true,
          lastMaintenanceDate: ''
        });
      })
      .catch((error) => {
        console.error('Error adding car:', error);
      });
  };

  return (
    <>
    <h1>New Car!!!</h1>
    <MDBContainer className='my-5'>
      <MDBCard>
        <MDBRow className='g-0 d-flex align-items-center'>
          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='car' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBInput wrapperClass='mb-4' label='Model' id='model' type='text' name='model' value={carData.model} onChange={handleInputChange} />
              <MDBInput wrapperClass='mb-4' label='License Plate' id='licensePlate' type='text' name='licensePlate' value={carData.licensePlate} onChange={handleInputChange} />
              <MDBInput wrapperClass='mb-4' label='Mileage' id='mileage' type='number' name='mileage' value={carData.mileage} onChange={handleInputChange} />
              <MDBInput wrapperClass='mb-4' label='Fuel Type' id='fuelType' type='text' name='fuelType' value={carData.fuelType} onChange={handleInputChange} />
              {/* ... Add more input fields for other properties */}
              <MDBInput
              wrapperClass='mb-4'
              label='Transmission Type'
              id='transmissionType'
              type='text'
              name='transmissionType'
              value={carData.transmissionType}
              onChange={handleInputChange}
            />
            <MDBInput
              wrapperClass='mb-4'
              label='Seating Capacity'
              id='seatingCapacity'
              type='number'
              name='seatingCapacity'
              value={carData.seatingCapacity}
              onChange={handleInputChange}
            />
             <MDBInput
              wrapperClass='mb-4'
              label='Daily Rental Rate'
              id='dailyRentalRate'
              type='number'
              name='dailyRentalRate'
              value={carData.dailyRentalRate}
              onChange={handleInputChange}
            />
            <MDBCheckbox
              wrapperClass='mb-4'
              label='Available'
              name='available'
              checked={carData.available}
              onChange={handleInputChange}
            />

             <MDBInput
              wrapperClass='mb-4'
              label='Last Maintenance Date'
              id='lastMaintenanceDate'
              type='date'
              name='lastMaintenanceDate'
              value={carData.lastMaintenanceDate}
              onChange={handleInputChange}
            />
              <MDBBtn className='mb-4 w-100' onClick={handleAddCar}>Add Car</MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
    </>
  );
}

export default AddCar;
