import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Navbar_tool from '../component/Navbar_tool';

const DefaultConfig = () => {
  // Convert model_id to an integer
  let navigate = useNavigate();
  const { Model_id } = useParams();
  const [coreOptions, setCoreOptions] = useState([]);
  const [standardOptions, setstandardOptions] = useState([]);
  const [exteriorOptions, setexteriorOptions] = useState([]);
  const [interiorOptions, setinteriorOptions] = useState([]);
  const [price, setprice] = useState();
  sessionStorage.setItem('price', price);

  const handleConfigure = (event) => {
    navigate(`/Configure/${Model_id}`);
  };
  const handleConfirm = (event) => {
    navigate('/Invoice');
  };
  const handleModify = (event) => {
    navigate('/Welcome');
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const coreResponse = await fetch(`http://localhost:8080/api/componentbyc/${Model_id}`);
        if (!coreResponse.ok) {
          throw new Error('Failed to fetch core options');
        }
        const coreData = await coreResponse.json();
        setCoreOptions(coreData);
        console.log(coreData);
      } catch (error) {
        console.error('Error fetching core options:', error);
      }
      // ... (similar try-catch blocks for other data fetching)

      // Fetch price data
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
    <>
      <Navbar_tool />

      <Card className="mb-3" style={{ maxWidth: '540px', margin: '50px auto', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1587476821668-7e1391103e49?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ objectFit: 'cover', borderTopLeftRadius: '15px', borderBottomLeftRadius: '15px' }}
            />
          </div>
          <div className="col-md-8">
            <Card.Body>
              <div className="container" style={{ width: '100%' }}>
                <div className="login-box">
                  <div className="options-list">
                    <h5 className="card-title">Core Options</h5>
                    <ul>
                      {coreOptions.map((option, index) => (
                        <li key={index}>{option}</li>
                      ))}
                    </ul>

                    {/* Similar sections for other options */}
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
                    <button style={{ marginRight: '10px', padding: '8px 16px', borderRadius: '8px', background: '#4CAF50', color: 'white' }} onClick={handleConfirm}>
                      Confirm Order
                    </button>
                    <button style={{ marginRight: '10px', padding: '8px 16px', borderRadius: '8px', background: '#008CBA', color: 'white' }} onClick={handleConfigure}>
                      Configure
                    </button>
                    <button style={{ padding: '8px 16px', borderRadius: '8px', background: '#f44336', color: 'white' }} onClick={handleModify}>
                      Modify
                    </button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </div>
        </div>
      </Card>
    </>
  );
};

export default DefaultConfig;
