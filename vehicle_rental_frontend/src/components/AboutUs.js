import React from 'react';
import '../css/AboutUs.css'; // Import your custom CSS
import NavbarLogin from '../components/NavbarLogin';

function AboutUs() {
  return (
    <>
      <NavbarLogin />
      <div className="about-container">
      <div className="about-content">
        <h2 className="about-heading">About Us</h2>
        <p className="about-description">
          Welcome to our premier car rental company, dedicated to providing you with the best
          rental experience. With a wide range of vehicles, top-notch customer service,
          and affordable rates, we make every journey unforgettable.
        </p>
        <p className="about-description">
          Our mission is to revolutionize the way people travel by offering convenient and flexible
          car rental options. Whether you're planning a road trip, a business meeting, or just need
          a vehicle for your daily commute, we have the perfect car for you.
        </p>
        <p className="about-description">
          At our car rental company, we prioritize safety, reliability, and exceptional customer service.
          Our fleet of vehicles is meticulously maintained to ensure a smooth and hassle-free rental experience.
        </p>
        <div className="about-description">
          Thank you for considering us for your travel needs. We look forward to serving you and making
          your journey memorable. Explore our range of vehicles and start your next adventure with us!
        
        
        </div>
      </div>
      <div className="about-image-container">
        <img
          src="https://www.financialexpress.com/wp-content/uploads/2017/06/optimus.jpg"
          alt="Car Rental Services"
          className="about-image"
        />
      </div>
    </div>
    </>
  );
}

export default AboutUs;
