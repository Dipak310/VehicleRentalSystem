import React, { useState } from 'react';
import axios from 'axios';
import '../css/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/users/authenticateUser', {
        email,
        password,
      });

      const user = response.data;

      if (user) {
        // Display success message
        setSuccessMessage('Login successful. Welcome!');
        setErrorMessage('');

        // Redirect or perform actions on successful login
        console.log('Logged in as:', user);
      } else {
        // Display error message
        setErrorMessage('Invalid Details');
        setSuccessMessage('');
      }
    } catch (error) {
      // Display error message
      setErrorMessage('Invalid Details');
      setSuccessMessage('');
      console.error('Login failed:', error.message);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="login-form">
            <h2 className="text-center">Login</h2>
            
            {/* Display success message */}
            {successMessage && <div className="alert alert-success">{successMessage}</div>}
            
            {/* Display error message */}
            {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </div>
            </form>
            <p className="text-center">
              Don't have an account?{' '}
              <a href="register" data-toggle="modal" data-dismiss="modal">
                Signup Here
              </a>
            </p>
            <p className="text-center">
              <a
                href="forget-password"
                data-toggle="modal"
                data-dismiss="modal"
              >
                Forgot Password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
