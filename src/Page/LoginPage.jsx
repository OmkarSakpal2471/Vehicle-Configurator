import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar_tool from '../component/Navbar_tool';
const LoginPage = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data === true) {
          alert("Successfully logged in");
          navigate("/welcome"); // Redirect to welcome page after successful login
        } else {
          alert("Invalid username or password");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
        alert("An error occurred while logging in");
      });
  };

  const backgroundImageStyle = {
    backgroundImage: `url("Login.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Set the height to 100% of the viewport
    display: 'flex',
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',
    padding: '0 20px', // Add padding to the sides
  };

  const formContainerStyle = {
    background: 'rgba(255, 255, 255, 0.5)', // Glassy background color with transparency
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle elevation
    width: '80%', // Set the width of the form container
    maxWidth: '400px', // Limit maximum width to 400px
    textAlign: 'right', // Align form content to the right
    marginRight: '20px', // Add margin to push the form to the right
  };

  const inputStyle = {
    width: '100%',
    padding: '15px', // Increase padding for taller input fields
    margin: '10px 0', // Increase margin for spacing
    boxSizing: 'border-box',
    borderRadius: '8px', // Rounded corners
    border: '1px solid #ccc',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Glassy background color for input fields
  };

  const buttonStyle = {
    width: '100%',
    padding: '15px', // Increase padding for larger button size
    margin: '20px 0', // Increase margin for spacing
    boxSizing: 'border-box',
    borderRadius: '8px', // Rounded corners
    border: 'none',
    backgroundColor: '#4CAF50', // Green color for button background
    color: 'white', // White color for button text
    fontWeight: 'bold', // Bold text
    cursor: 'pointer', // Show pointer cursor on hover
  };

  return (
    <div> 
      <Navbar_tool/>
    <div style={backgroundImageStyle}>
      <div style={formContainerStyle}>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} style={inputStyle} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} style={inputStyle} />
          </label>
          <br />
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
