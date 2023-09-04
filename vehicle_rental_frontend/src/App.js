import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import CarList from './components/CarList';
import BookingForm from './components/BookingForm';
import CustomerDetails from './components/CustomerDetails';
import AddressForm from './components/AddressForm';
import PaymentForm from './components/PaymentForm';
import CarFeatureList from './components/CarFeatureList';
import RentalLocationList from './components/RentalLocationList';
import InvoiceDetails from './components/InvoiceDetails';
import FeedbackForm from './components/FeedbackForm';
import Otherelement from './components/OtherComponent';
import Login from './components/Login';
import Logout from './components/Logout'
import RegisterForm from './components/RegisterForm';
import ForgotPassword from './components/ForgetPassword';
import SignUpForm from './components/SignUpForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import NavbarLogin from './components/NavbarLogin';
import PrivateRoute from './components/PrivateRoute';
import ManageVehicles from './components/ManageVehicles'; // Import the ManageVehicles component
import ManageCars from './components/ManageCars';
import LoginHomePage from './components/LoginHomePage';
import Registeration from './components/Registeration';
import CarDetails from './components/CarDetails';
//import { AuthProvider } from 'react-auth0';

import AdminDashboard from './components/admin/AdminDashboard';
import View_User from './components/admin/View_User';
import RegisterCar from './components/admin/RegisterCar';
import Manage_bookings from './components/admin/Manage_bookings';
import PaymentInfo from './components/admin/PaymentInfo';
import Footer from './components/Footer';
import BookingList from './components/MyBookings';
import Payment from './components/PaymentForm';

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
    
      <Route path="/cars" element={<CarList />} />
      <Route path="/bookings" element={<BookingForm  />} />
      <Route path="/customers" element={<CustomerDetails />} />
      <Route path="/addresses" element={<AddressForm />} />
      <Route path="/payments" element={<PaymentForm />} />
      <Route path="/car-features" element={<CarFeatureList />} />
      <Route path="/rental-locations" element={<RentalLocationList />} />
      <Route path="/invoices" element={<InvoiceDetails />} />
      <Route path="/feedback" element={<FeedbackForm />} />
      <Route path="/other" element={<Otherelement />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/loginhomepage" element={<LoginHomePage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/registration" element={<Registeration />} />
      <Route path="/forget-password" element={<ForgotPassword />} />
      <Route path='/carDetails/:id' element={<CarDetails/>}></Route>
      <Route path='/mybookings' element={<BookingList/>}></Route>
      <Route path='/payment' element={<PaymentForm/>}></Route>

      <Route path="/admind" element={<AdminDashboard />} />
      <Route path="/view_users" element={<View_User/>}/>
      <Route path="/register_cars" element={<RegisterCar />} /> {/* Add this route */}
      <Route path="/manage_book" element={<Manage_bookings />} /> {/* Add this route */}
      <Route path="/paymentInfo" element={<PaymentInfo/>}/>

      <Route path="/" element={<Home />} />
  {/* <Route path="/contact" exact render={() => <PrivateRoute path="/contact" component={ContactUs} />} /> */}
  <Route path="/contact" element={<ContactUs />}/>
  {/* <Route path="/about" exact render={() => <PrivateRoute path="/about" component={AboutUs} />} /> */}
  <Route path="/about" element={<AboutUs />}/>

  <Route path="/manage-vehicles" element={<ManageVehicles />} /> {/* Add this route */}
  <Route path="/manage-cars" element={<ManageCars />} /> {/* Add this route */}


      {/* Add other routes */}
      
      </Routes>
      <Footer />
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
