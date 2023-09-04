import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

function Testimonials() {
  const testimonials = [
    { id: 1, name: 'John Doe', feedback: 'Great service! Loved the car.' },
    { id: 2, name: 'Jane Smith', feedback: 'Smooth experience from booking to returning.' },
    // Add more testimonials
  ];

  return (
    <section className="testimonials-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">What Our Customers Say</h2>
        <Row className="justify-content-center">
          {testimonials.map(testimonial => (
            <Col key={testimonial.id} md={6} lg={4} className="mb-4">
              <Card className="testimonial-card shadow">
                <Card.Body>
                  <Card.Text>"{testimonial.feedback}"</Card.Text>
                  <div className="d-flex justify-content-between mt-3">
                    <Image
                      src="https://via.placeholder.com/50"
                      alt={testimonial.name}
                      roundedCircle
                    />
                    <Card.Title>{testimonial.name}</Card.Title>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
