import React, { useState } from 'react';
import axios from 'axios';
// import '../css/Login.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/users/resetPassword', {
        email,
      });

      if (response.status === 200) {
        console.log('Password reset link sent successfully.');
        // You can display a success message or redirect the user to a confirmation page.
      } else {
        console.error('Password reset failed.');
        alert('Password reset failed. Please check your email and try again.');
      }
    } catch (error) {
      console.error('Password reset failed:', error.message);
      alert('Password reset failed. Please check your email and try again.');
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="login-form">
            <h2 className="text-center">Forgot Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Reset Password
                </button>
              </div>
            </form>
            <p className="text-center">
              Remember your password?{' '}
              <a href="login" data-toggle="modal" data-dismiss="modal">
                Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
