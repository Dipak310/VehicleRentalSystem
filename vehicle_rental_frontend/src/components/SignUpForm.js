import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUpForm() {
  const navigate = useNavigate();

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
      localStorage.setItem('user', JSON.stringify(user));

      if (user) {
        console.log('Login successful. Welcome!');
        console.log(user);
        setErrorMessage('');
        if(user.role == "admin"){
          navigate('/admind');
        }
        else{
          navigate('/loginhomepage'); 
        }
      } else {
        setErrorMessage('Invalid Details');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Invalid Details');
      setSuccessMessage('');
      console.error('Login failed:', error.message);
    }
  };

  return (
    <section className="text-center text-lg-start">
      <style>
        {`
        .cascading-right {
          margin-right: -50px;
        }

        @media (max-width: 991.98px) {
          .cascading-right {
            margin-right: 0;
          }
        }

        .custom-image {
          height: 10%;
        }
        `}
      </style>

      <div className="container py-4">
        <div className="row g-0 align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div
              className="card cascading-right"
              style={{
                background: 'hsla(0, 0%, 100%, 0.55)',
                backdropFilter: 'blur(30px)',
              }}
            >
              <div className="card-body p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Login now</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example33"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="form2Example33">
                      Subscribe to our newsletter
                    </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4">
                    Login
                  </button>

                 
                  {successMessage && (
                    <div className="alert alert-success">{successMessage}</div>
                  )}

                  
                  {errorMessage && (
                    <div className="alert alert-danger">{errorMessage}</div>
                  )}

                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>

                
                <p className="text-center">
                  Don't have an account?{' '}
                  <a href="registration" data-toggle="modal" data-dismiss="modal">
                    Signup Here
                  </a>
                </p>
                <p className="text-center">
                  <a href="forget-password" data-toggle="modal" data-dismiss="modal">
                    Forgot Password?
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0">
            <img
              src="https://images.pexels.com/photos/804130/pexels-photo-804130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-100 rounded-4 shadow-4 custom-image"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUpForm;
