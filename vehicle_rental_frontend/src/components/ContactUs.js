import React, { useState } from 'react';
import '../css/ContactUs.css'; // Import your custom CSS
import { Navbar } from 'react-bootstrap';
import NavbarLogin from '../components/NavbarLogin'

function ContactUs() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const renderContactDetails = () => {
    switch (selectedOption) {
      case 'email':
        return <p className="contact-details" >Email: onkarbhawar111@gmail.com</p>;
      case 'phone':
        return <p className="contact-details">Phone: +91-8177910636</p>;
      case 'message':
        return <p className="contact-details">Message: Send us a message through WhatsApp on the +91-8177910636.</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <NavbarLogin />
      <div className="contact-container">
      <div className="contact-content">
        <h2 className="contact-heading">Contact Us</h2>
        <p className="contact-description">
          Have a question or need assistance?
        </p>
        <p>Feel free to reach out to our friendly
          customer support team.
          </p>
          <p>We're here to help you with all your car rental needs.</p>
        <div className="contact-options">
          <div className="contact-option">
            <input
              type="radio"
              id="email"
              name="contactOption"
              value="email"
              checked={selectedOption === 'email'}
              onChange={() => handleOptionChange('email')}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="contact-option">
            <input
              type="radio"
              id="phone"
              name="contactOption"
              value="phone"
              checked={selectedOption === 'phone'}
              onChange={() => handleOptionChange('phone')}
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="contact-option">
            <input
              type="radio"
              id="message"
              name="contactOption"
              value="message"
              checked={selectedOption === 'message'}
              onChange={() => handleOptionChange('message')}
            />
            <label htmlFor="message">Message</label>
          </div>
        </div>
        {renderContactDetails()}
      </div>
      <div className="contact-image-container">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/001/263/984/small/contact-us-concept.jpg"
          alt="Contact Us"
          className="contact-image"
        />
      </div>
    </div>
    </>
  );
}

export default ContactUs;
