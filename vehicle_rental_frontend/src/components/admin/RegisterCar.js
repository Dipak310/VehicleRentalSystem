import React, { useState } from 'react';
import axios from 'axios';
import NavbarLogin from '../NavbarLogin';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
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
    lastMaintenanceDate: '',
    carImageLink: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    const requiredFields = [
      'model',
      'licensePlate',
      'mileage',
      'fuelType',
      'transmissionType',
      'seatingCapacity',
      'dailyRentalRate',
      'lastMaintenanceDate',
      'carImageLink',
    ];
    for (const field of requiredFields) {
      if (!carData[field]) {
        return false;
      }
    }
    return true;
  };

  const handleAddCar = () => {
    if (!isFormValid()) {
      alert('Please fill in all required fields.');
      return;
    }

    axios
      .post('http://localhost:8080/cars', carData)
      .then((response) => {
        console.log('Car added:', response.data);
        setCarData({
          model: '',
          licensePlate: '',
          mileage: 0,
          fuelType: '',
          transmissionType: '',
          seatingCapacity: 0,
          dailyRentalRate: 0,
          available: true,
          lastMaintenanceDate: '',
          carImageLink: '',
        });
        setFormErrors({});
      })
      .catch((error) => {
        console.error('Error adding car:', error);
      });
  };

  return (
    <>
      <NavbarLogin />
      <h1>New Car!!!</h1>
      <MDBContainer className='my-5'>
        <MDBCard>
          <MDBRow className='g-0 d-flex align-items-center'>
            <MDBCol md='4'>
              <MDBCardImage
                src='https://stimg.cardekho.com/pwa/img/my-account/pic/login-banner.svg'
                alt='car'
                className='rounded-t-5 rounded-tr-lg-0'
                fluid
              />
            </MDBCol>
            <MDBCol md='8'>
              <MDBCardBody>
                {Object.keys(formErrors).length > 0 && (
                  <div className='alert alert-danger'>
                    {Object.values(formErrors).map((error, index) => (
                      <p key={index} className='mb-0'>
                        {error}
                      </p>
                    ))}
                  </div>
                )}

                <MDBInput
                  wrapperClass='mb-4'
                  label='Model'
                  id='model'
                  type='text'
                  name='model'
                  value={carData.model}
                  onChange={handleInputChange}
                  required
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='License Plate'
                  id='licensePlate'
                  type='text'
                  name='licensePlate'
                  value={carData.licensePlate}
                  onChange={handleInputChange}
                  required
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Mileage'
                  id='mileage'
                  type='number'
                  name='mileage'
                  value={carData.mileage}
                  onChange={handleInputChange}
                  required
                />
                <div className='mb-4'>
                  <label htmlFor='fuelType' className='form-label'>
                    Fuel Type
                  </label>
                  <select
                    className='form-select'
                    id='fuelType'
                    name='fuelType'
                    value={carData.fuelType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value=''>Select Fuel Type</option>
                    <option value='Petrol'>Petrol</option>
                    <option value='Diesel'>Diesel</option>
                    <option value='Gasolin'>Gasolin</option>
                  </select>
                </div>
                <div className='mb-4'>
                  <label htmlFor='transmissionType' className='form-label'>
                    Transmission Type
                  </label>
                  <select
                    className='form-select'
                    id='transmissionType'
                    name='transmissionType'
                    value={carData.transmissionType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value=''>Select Transmission Type</option>
                    <option value='Automatic'>Automatic</option>
                    <option value='Manual'>Manual</option>
                  </select>
                </div>
                <MDBInput
                  wrapperClass='mb-4'
                  label='Seating Capacity'
                  id='seatingCapacity'
                  type='number'
                  name='seatingCapacity'
                  value={carData.seatingCapacity}
                  onChange={handleInputChange}
                  required
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Daily Rental Rate'
                  id='dailyRentalRate'
                  type='number'
                  name='dailyRentalRate'
                  value={carData.dailyRentalRate}
                  onChange={handleInputChange}
                  required
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
                  required
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Car Image Link'
                  id='carImageLink'
                  type='text'
                  name='carImageLink'
                  value={carData.carImageLink}
                  onChange={handleInputChange}
                  required
                />
                <MDBBtn
                  className='mb-4 w-100'
                  onClick={handleAddCar}
                  disabled={!isFormValid()}
                >
                  Add Car
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </MDBContainer>
    </>
  );
}

export default AddCar;
