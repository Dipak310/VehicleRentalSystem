import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import CarList from './components/CarList';
import BookingForm from './components/BookingForm';
import CustomerDetails from './components/CustomerDetails';
import AddressForm from './components/AddressForm';
import AdminDetails from './components/AdminDetails';
import PaymentForm from './components/PaymentForm';
import CarFeatureList from './components/CarFeatureList';
import RentalLocationList from './components/RentalLocationList';
import InvoiceDetails from './components/InvoiceDetails';
import FeedbackForm from './components/FeedbackForm';
import Otherelement from './components/OtherComponent';
import Login from './components/Login';
import Logout from './components/Logout'

import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import ManageVehicles from './components/ManageVehicles'; // Import the ManageVehicles component
import ManageCars from './components/ManageCars';
//import { AuthProvider } from 'react-auth0';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    <Routes>
    
      <Route path="/cars" element={<CarList />} />
      <Route path="/bookings" element={<BookingForm  />} />
      <Route path="/customers" element={<CustomerDetails />} />
      <Route path="/addresses" element={<AddressForm />} />
      <Route path="/admins" element={<AdminDetails />} /> 
      <Route path="/payments" element={<PaymentForm />} />
      <Route path="/car-features" element={<CarFeatureList />} />
      <Route path="/rental-locations" element={<RentalLocationList />} />
      <Route path="/invoices" element={<InvoiceDetails />} />
      <Route path="/feedback" element={<FeedbackForm />} />
      <Route path="/other" element={<Otherelement />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />

      <Route path="/" element={<Home />} />
  <Route path="/contact" exact render={() => <PrivateRoute path="/contact" component={ContactUs} />} />
  <Route path="/about" exact render={() => <PrivateRoute path="/about" component={AboutUs} />} />

  <Route path="/manage-vehicles" element={<ManageVehicles />} /> {/* Add this route */}
  <Route path="/manage-cars" element={<ManageCars />} /> {/* Add this route */}


      {/* Add other routes */}
      
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
