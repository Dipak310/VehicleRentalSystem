import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import '../css/navbarStyles.css'; // Import your CSS file for additional styling
import logo from '../Images/logo.png';
import AuthContext from './AuthContext';
import Logout from './Logout';

const CustomNavbar = () => {
  // Retrieve user data from localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="Revv Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cars">Cars</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          </Nav>
          <Nav>
            {user.logged_in ? (
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item onClick={Logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link as={Link} to="/signup">Login</Nav.Link>
                <Nav.Link as={Link} to="/registration">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
