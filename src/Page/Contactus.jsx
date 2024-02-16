import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar_tool from '../component/Navbar_tool';

export default function Contactus() {
  const contactInfoStyle = {
    background: `url('Contactus.jpg')`, // Background image
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'center', // Center the background image
    color: '#000', // Text color
    padding: '20px', // Padding for spacing
    borderRadius: '10px', // Rounded corners
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Shadow effect for depth
    width: '300px', // Width of the contact info container
    margin: '0 auto', // Center horizontally
  };

  const strongStyle = {
    marginRight: '5px', // Margin to separate strong text from regular text
  };

  return (
    <div>
      <Navbar_tool/>
    <Container className="mt-5">
      <h2 className="text-center mb-4">Contact Information</h2>
      <Row className="justify-content-center">
        <Col md={6}>
          <div style={contactInfoStyle}>
            <p><strong style={strongStyle}>Email:</strong> ajinkya.anwade512000@gmail.com</p>
            <p><strong style={strongStyle}>Mobile Number:</strong> 7249821775</p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}