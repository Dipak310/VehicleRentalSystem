import React from 'react';

function Testimonials() {
  const testimonials = [
    { id: 1, name: 'John Doe', feedback: 'Great service! Loved the car.' },
    { id: 2, name: 'Jane Smith', feedback: 'Smooth experience from booking to returning.' },
    // Add more testimonials
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonials">
          {testimonials.map(testimonial => (
            <div className="testimonial" key={testimonial.id}>
              <p>"{testimonial.feedback}"</p>
              <span>- {testimonial.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
