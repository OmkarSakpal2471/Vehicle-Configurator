import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar_tool from '../component/Navbar_tool';
import Card from "react-bootstrap/Card";

const DefaultConfig = () => {
  // Convert model_id to an integer
  let navigate = useNavigate();
  const {Model_id} = useParams();
  const [coreOptions, setCoreOptions] = useState([]);
  const [standardOptions, setstandardOptions] = useState([]);
  const [exteriorOptions, setexteriorOptions] = useState([]);
  const [interiorOptions, setinteriorOptions] = useState([]);
  const [price, setprice] = useState();
  const [Imagedis,setImage] = useState("");
  sessionStorage.setItem('price',price);
  const Modelname = sessionStorage.getItem("Model_Name");
  console.log(" this is imagename"+Modelname);
  const handleConfigure = (event) => {
    navigate(`/Configure`);
  };
  const handleConfirm = (event) => {
    navigate('/Invoice');
  };
  const handleModify = (event) => {
    navigate('/Welcome');
  };
  useEffect(() => {
    fetch(`http://localhost:8080/api/image/${Model_id}`)
        .then(data=>
          data.text()
          )
          .then(mydata=>{
           // console.log(mydata);
            setImage(mydata);
          })
        .catch(error => {
            console.error("Error fetching image:", error);
        });
}, [Model_id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const coreResponse = await fetch(`http://localhost:8080/api/componentbyc/${Model_id}`);
        if (!coreResponse.ok) {
          throw new Error('Failed to fetch core options');
        }
        const coreData = await coreResponse.json();
        setCoreOptions(coreData);
       // console.log(coreData);
      } catch (error) {
        console.error('Error fetching core options:', error);
        // Handle the error as needed, e.g., set error state
      }
      try {
        const standardResponse = await fetch(`http://localhost:8080/api/componentbys/${Model_id}`);
        if (!standardResponse.ok) {
          throw new Error('Failed to fetch core options');
        }
        const StandardData = await standardResponse.json();
        setstandardOptions(StandardData);
      } catch (error) {
        console.error('Error fetching core options:', error);
        // Handle the error as needed, e.g., set error state
      }
      try {
        const InteriorResponse = await fetch(`http://localhost:8080/api/componentbyi/${Model_id}`);
        if (!InteriorResponse.ok) {
          throw new Error('Failed to fetch core options');
        }
        const InData = await InteriorResponse.json();
        setinteriorOptions(InData);
      } catch (error) {
        console.error('Error fetching core options:', error);
        // Handle the error as needed, e.g., set error state
      }
      try {
        const ExteriorResponse = await fetch(`http://localhost:8080/api/componentbye/${Model_id}`);
        if (!ExteriorResponse.ok) {
          throw new Error('Failed to fetch core options');
        }
        const extData = await ExteriorResponse.json();
        setexteriorOptions(extData);
      } catch (error) {
        console.error('Error fetching core options:', error);
      }
        // Handle the error as needed, e.g., set error state
        fetch(`http://localhost:8080/api/price/${Model_id}`)
        .then((response) => response.json())
        .then((data) => {
            setprice(data);
        })
        .catch((error) => console.error('Error fetching data:', error));
    
    };

    fetchData();
  }, [Model_id]);

  return (
    <div   style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1526626607369-f89fe1ed77a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhcmtpbmclMjBsb3R8ZW58MHx8MHx8fDA%3D  ')", // Add your background image URL here
      backgroundSize: "cover", // Ensure the background image covers the entire container
      backgroundPosition: "center", // Center the background image
      height: "100vh", 
    }}>
      <Navbar_tool />
      <Card
        className="mb-3"
        style={{
          width: "80%",
          margin: "50px auto",
          background: "rgba(255, 255, 255, 0.8)", // Set a semi-transparent white background
          backdropFilter: "blur(10px)", // Apply a blur effect
          border: "1px solid rgba(255, 255, 255, 0.2)", // Add a subtle border
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="row g-0" wi>
        <div
      className="col-md-4 flex-column align-items-center"
      style={{ paddingRight: "20px", width: "65%", flex: "4" }}
    >
       <div>
        <h1 style={{padding:"20px",  marginBottom: "10px"}}className="text-center">{Modelname}</h1>
      </div>
      <div>
        <Card.Img
          variant="top"
          src={Imagedis}
          style={{
            objectFit: "cover",
            width: "100%", // Ensure the image takes 100% width within the column
            borderRadius: "15px",
            padding: "10px",
          }}
        />
      </div>
    </div>
          <div className="col-md-8" style={{ width: "40%", }}>
            <Card.Body>
              <div className="container" style={{ width: "100%" }}>
                <div className="login-box">
                  <div className="options-list">
                    <h5 className="card-title">Core Options</h5>
                    <ul>
                      {coreOptions.map((option, index) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>
                    <h5>Standard Options</h5>
                <ul>
                  {standardOptions.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>

                <h5>Interior Options</h5>
                <ul>
                  {interiorOptions.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>

                <h5>Exterior Options</h5>
                <ul>
                  {exteriorOptions.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>

                  </div>

                  <div className="price-section">
                    <div>
                      <b>Base Price : </b>
                      {price}
                    </div>
                    <div>
                      <b>S.T @12% :</b> {price * 0.12}
                    </div>
                    <div>
                      <b>TOTAL :</b> {price + price * 0.12}
                    </div>
                    <br />
                  </div>

                  <div className="buttons-container">
                    <button
                      style={{
                        marginRight: "10px",
                        padding: "8px 16px",
                        // borderRadius: "8px",
                        background: "#4CAF50",
                        paddingBottom:"5px",
                        marginBottom:"5px",
                        color: "white",
                      }}
                      onClick={handleConfirm}
                    >
                      Confirm Order
                    </button>
                    <button
                      style={{
                        marginRight: "10px",
                        padding: "8px 16px",
                        paddingBottom:"5px",
                        marginBottom:"5px",
                        // borderRadius: "8px",
                        background: "#008CBA",
                        color: "white",
                      }}
                      onClick={handleConfigure}
                    >
                      Configure
                    </button>
                    <button
                      style={{
                        padding: "8px 16px",
                        // borderRadius: "8px",
                        background: "#f44336",
                        paddingBottom:"5px",
                        color: "white",
                      }}
                      onClick={handleModify}
                    >
                      Modify
                    </button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  );
};


export default DefaultConfig;