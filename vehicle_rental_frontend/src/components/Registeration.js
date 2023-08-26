import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
        phoneNumber: '',
        dateOfBirth: '',
        licenseNumber: '',
        username: '',
    });

    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/signup');

        axios
            .post('http://localhost:8080/customers', formData) // Updated API endpoint
            .then((response) => {
                window.alert('Customer registered successfully!', response.data);
                setSuccessMessage('Registration successful!'); // Set success message
                setErrorMessage(''); // Clear any previous error messages
                // You can redirect the user to a success page or perform other actions here
            })
            .catch((error) => {
                console.error('Error registering customer:', error);
                setErrorMessage('Registration failed. Please try again.'); // Set error message
                setSuccessMessage(''); // Clear any previous success messages
            });
    };

    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                id="form3Example1fg"
                                                className="form-control form-control-lg"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example1fg">First Name</label>
                                        </div>

                                        {/* Last Name */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                id="form3Example1fg"
                                                className="form-control form-control-lg"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example1fg">Last Name</label>
                                        </div>

                                        {/* Email */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="email"
                                                id="form3Example2fg"
                                                className="form-control form-control-lg"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example2fg">Email</label>
                                        </div>

                                        {/* Role */}
                                        <div className="form-outline mb-4">
                                            <div>
                                                <input
                                                    type="radio"
                                                    id="adminRole"
                                                    name="role"
                                                    value="Admin"
                                                    checked={formData.role === 'Admin'}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-check-label" htmlFor="adminRole">Admin</label>
                                            </div>
                                            <div>
                                                <input
                                                    type="radio"
                                                    id="customerRole"
                                                    name="role"
                                                    value="customer"
                                                    checked={formData.role === 'customer'}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-check-label" htmlFor="customerRole">Customer</label>
                                            </div>
                                        </div>

                                        {/* Phone Number */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="tel"
                                                id="form3Example3fg"
                                                className="form-control form-control-lg"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example3fg">Phone Number</label>
                                        </div>

                                        {/* Date of Birth */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="date"
                                                id="form3Example4fg"
                                                className="form-control form-control-lg"
                                                name="dateOfBirth"
                                                value={formData.dateOfBirth}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example4fg">Date of Birth</label>
                                        </div>

                                        {/* License Number */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                id="form3Example1rg"
                                                className="form-control form-control-lg"
                                                name="licenseNumber"
                                                value={formData.licenseNumber}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example1rg">License Number</label>
                                        </div>

                                        {/* Username */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="text"
                                                id="form3Example2rg"
                                                className="form-control form-control-lg"
                                                name="username"
                                                value={formData.username}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example2rg">Username</label>
                                        </div>

                                        {/* Password */}
                                        <div className="form-outline mb-4">
                                            <input
                                                type="password"
                                                id="form3Example3rg"
                                                className="form-control form-control-lg"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            <label className="form-label" htmlFor="form3Example3rg">Password</label>
                                        </div>


                                        <div className="form-check d-flex justify-content-center mb-5">
                                            <input
                                                className="form-check-input me-2"
                                                type="checkbox"
                                                value=""
                                                id="form2Example3cg"
                                            />
                                            <label className="form-check-label" htmlFor="form2Example3g">
                                                I agree to all statements in{' '}
                                                <a href="#!" className="text-body">
                                                    <u>Terms of service</u>
                                                </a>
                                            </label>
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button
                                                type="submit"
                                                className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                            >
                                                Register
                                            </button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">
                                            Have already an account?{' '}
                                            <a href="signup" className="fw-bold text-body">
                                                <u>Login here</u>
                                            </a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RegisterForm;
