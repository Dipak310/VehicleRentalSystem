import React from 'react';
import Footer from './Footer';
import CarList from './CarList';
import Testimonials from './Testimonials';
import NavbarLogin from './NavbarLogin';

// Import other components as needed

function HomeOne() {
  return (
    <div>
      {/* <Header /> */}
      <NavbarLogin />

      {/* <Banner /> */}
      <CarList />
      <Testimonials />

      {/* Other sections/components */}
      {/* <Footer /> */}
    </div>
  );
}

export default HomeOne;
