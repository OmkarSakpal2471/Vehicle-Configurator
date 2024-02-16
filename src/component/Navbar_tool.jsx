import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar_tool() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
        <Nav.Link as={Link} to="/Aboutus">About us</Nav.Link>
        <Nav.Link as={Link} to="/Contactus">Contact us</Nav.Link>
        </Nav>
        <Nav>
          {/* Use Link component to navigate to LoginPage */}
          <Nav.Link as={Link} to="/LoginPage">Login</Nav.Link>
          <Nav.Link as={Link} to="/Register">Register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbar_tool;
