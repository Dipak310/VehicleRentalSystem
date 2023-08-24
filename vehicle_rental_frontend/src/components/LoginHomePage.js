import React from 'react';
import Footer from './Footer';
import CarList from './CarList';
import Testimonials from './Testimonials';
import Navbar from './Navbar';
import HomeOne from './Home';

// Import other components as needed

function LoginHomePage() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar title="logout" name="logout" />

      {/* <Banner /> */}
      <CarList />
      <Testimonials />

      {/* Other sections/components */}
      <Footer />
    </div>
  );
}

export default LoginHomePage;
