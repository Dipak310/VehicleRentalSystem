import React from 'react';
import { Link } from 'react-router-dom';
import '../css/navbarStyles.css'; // Import your CSS file for styling
import logo from '../Images/logo.png';

const Navbar = () => {
  const isLoggedIn = false; // Replace with your authentication logic

  return (
    <header class="header">
    <div class="logo">
        <a href="/"><img src={logo} alt="Revv Logo"/></a>
    </div>
    <nav class="nav">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="cars">Cars</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="login">Login</a></li>
            <li><a href="register">Register</a></li>
        </ul>
    </nav>
</header>
  );
};

export default Navbar;
