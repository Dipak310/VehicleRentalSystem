import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/navbarStyles.css'; // Import your CSS file for styling
import logo from '../Images/logo.png';

const Navbar = ({ isLoggedIn, username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from local storage or perform any logout actions
    localStorage.removeItem('user');

    // Redirect to the Home route or any other desired route after logout
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Revv Logo" />
        </Link>
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cars">Cars</Link></li>
          <li><Link to="/offers">Offers</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {isLoggedIn ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li>
                {username && <span className="username">{username}</span>}
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
