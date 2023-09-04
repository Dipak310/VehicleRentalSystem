import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarLogin from '../components/NavbarLogin';

function Logout() {
    const navigate = useNavigate();
    const { logout } = useAuth();
  
    const handleLogout = () => {
      // Call the logout function from the AuthContext
      logout();
      // After logging out, redirect to the login page
      navigate('/');
    };

    return (
        <>
        < NavbarLogin />
            <div className="container mt-5">
            <h2>Logout</h2>
            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
        </div>
        </>
    );
}

export default Logout;
