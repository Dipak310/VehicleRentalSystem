import React, { useState } from 'react';
import axios from 'axios';

function CustomerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = () => {
    // Perform login request to the backend
    axios.post('http://localhost:8081/customers', { email, password })
      .then(response => {
        // Successful login
        setSuccess('Login successful!');
        setError('');
        // You can perform further actions, such as storing tokens in localStorage
      })
      .catch(error => {
        // Error during login
        setError('Invalid email or password');
        setSuccess('');
      });
  };

  return (
    <div>
      <h2>Customer Login</h2>
      {error && <div className="errorWrap">{error}</div>}
      {success && <div className="succWrap">{success}</div>}
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default CustomerLogin;
