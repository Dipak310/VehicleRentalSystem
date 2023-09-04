import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons'; // Import an icon of your choice
import logo from '../Images/logo.png';
import handleLogout from '../components/Logout';

const CustomNavbar = () => {
  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Image src={logo} alt="Revv Logo" fluid />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/loginhomepage">Home</Nav.Link>
            <Nav.Link as={Link} to="/cars">Cars</Nav.Link>
            <Nav.Link as={Link} to="/mybookings">My Bookings</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
          </Nav>
          {/* Display the username with an icon */}
          <Nav.Item className="d-flex align-items-center">
            <PersonCircle size={24} className="mr-2" />
            <span className="text-light">Welcome, {user.username}</span>
          </Nav.Item>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
