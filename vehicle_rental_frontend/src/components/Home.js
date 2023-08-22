import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from './Navbar';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Home() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  
  // Initialize useNavigate
  const navigate = useNavigate();

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleGetCar = (e) => {
    e.preventDefault();
    // Redirect to the cars list page
    navigate('/cars');
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="card shadow">
              <div className="card-body">
                <h2>Find Your Perfect Car</h2>
                <form onSubmit={handleGetCar}>
                  <div className="form-group">
                    <label>Location:</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Trip Duration:</label>
                    <DatePicker
                      selected={startDate}
                      onChange={handleDateChange}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      inline
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Get Car</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
