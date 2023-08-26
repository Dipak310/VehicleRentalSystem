import React from 'react';
import Footer from './Footer';
import CarList from './CarList';
import Testimonials from './Testimonials';
import Navbar from './Navbar';

// Import other components as needed

function HomeOne() {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />

      {/* <Banner /> */}
      <CarList />
      <Testimonials />

      {/* Other sections/components */}
      {/* <Footer /> */}
    </div>
  );
}

export default HomeOne;
