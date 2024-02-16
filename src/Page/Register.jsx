import React, { useState } from 'react';
import './RegistrationStyle.css'; // Import the CSS file
import Navbar_tool from '../component/Navbar_tool';
import { useNavigate } from 'react-router-dom';
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    username: '',
    emailid: '',
    password: '',
    comp_name: '',
    address: '',
    telephone: '',
    holding: '',
    name_auth_person: '',
    designation: '',
    auth_tel: '',
    auth_cell: '',
    comp_st_no: '',
    vat_no: '',
    pan: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let demo = JSON.stringify(formData);
    console.log(demo);
    fetch("http://localhost:8080/api/signup", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: demo
    });
    navigate('/LoginPage');
  };

  return (
    <div className="entire_page">
      <Navbar_tool />
      <form method="post" onSubmit={handleSubmit}>
        <h1 className="title">Registration Page</h1>
        <div className="container">
          <div className="container1 container-class">
            <div className="label-input-pair">
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" id="username" onChange={handleChange} placeholder="Enter your username" required />
            </div>
            <div className="label-input-pair">
              <label htmlFor="emailid">Email:</label>
              <input type="email" name="emailid" id="emailid" onChange={handleChange} placeholder="Enter your email" required />
            </div>
            <div className="label-input-pair">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" onChange={handleChange} placeholder="Enter your password" required />
            </div>
            <div className="label-input-pair">
              <label htmlFor="comp_name">Company Name:</label>
              <input type="text" name="comp_name" id="comp_name" onChange={handleChange} placeholder="Enter your company name" required />
            </div>
            <div className="label-input-pair">
              <label htmlFor="pan">PAN:</label>
              <input type="text" name="pan" id="pan" onChange={handleChange} placeholder="Enter PAN" required pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}" title="Enter valid PAN number" />
            </div>
          </div>
          <div className="container2 container-class">
            <div className="label-input-pair">
              <label htmlFor="address">Address:</label>
              <input type="text" name="address" id="address" onChange={handleChange} placeholder="Enter your address" required />
            </div>
            <div className="label-input-pair">
              <label htmlFor="telephone">Telephone:</label>
              <input type="tel" name="telephone" id="telephone" onChange={handleChange} placeholder="Enter your telephone number" required pattern="[0-9]{10}" title="Enter valid 10-digit telephone number" />
            </div>
            <div className="label-input-pair">
              <label htmlFor="holding">Holding:</label>
              <input type="text" name="holding" id="holding" onChange={handleChange} placeholder="Enter your holding" required />
            </div>
            <div className="label-input-pair">
              <label htmlFor="name_auth_person">Name of Authorized Person:</label>
              <input type="text" name="name_auth_person" id="name_auth_person" onChange={handleChange} placeholder="Enter name of authorized person" required />
            </div>
            <div className="label-input-pair">
              <label htmlFor="designation">Designation:</label>
              <input type="text" name="designation" id="designation" onChange={handleChange} placeholder="Enter your designation" required />
            </div>
          </div>
          <div className="container3 container-class">
            <div className="label-input-pair">
              <label htmlFor="auth_tel">Authorized Telephone:</label>
              <input type="tel" name="auth_tel" id="auth_tel" onChange={handleChange} placeholder="Enter authorized telephone number" required pattern="[0-9]{10}" title="Enter valid 10-digit telephone number" />
            </div>
            <div className="label-input-pair">
              <label htmlFor="auth_cell">Authorized Cell:</label>
              <input type="tel" name="auth_cell" id="auth_cell" onChange={handleChange} placeholder="Enter authorized cell number" required pattern="[0-9]{10}" title="Enter valid 10-digit cell number" />
            </div>
            <div className="label-input-pair">
              <label htmlFor="comp_st_no">Company ST Number:</label>
              <input type="text" name="comp_st_no" id="comp_st_no" onChange={handleChange} placeholder="Enter company ST number" required />
            </div>
            <div className="label-input-pair">
              <label htmlFor="vat_no">VAT Number:</label>
              <input type="text" name="vat_no" id="vat_no" onChange={handleChange} placeholder="Enter VAT number" required />
            </div>
          </div>
        </div>
        <button type="submit" id="bt1">Submit</button>
      </form>
    </div>
  );
}

export default Register;