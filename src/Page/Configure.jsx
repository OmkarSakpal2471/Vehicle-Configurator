import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import DynConfig from './DynConfig';

function Configure() {
  let navigate = useNavigate();
//const {Model_id} = useParams();
    const [coreOptions, setCoreOptions] = useState([]);
    const [selectedData, setSelectedData] = useState("std");
    const [currentModelId, setCurrentModelId] = useState(null);
    const Model_id =sessionStorage.getItem("Model_id");
    
    const handleButtonClick = (data) => {
      console.log('Selected Data:', data);
      setSelectedData(data);
    };
    const handleConfirm = (event) => {
      navigate('/Invoice');
    };
    const handleCancel = (event) => {
      navigate(`/DefaultConfig/${Model_id}`);
    };
    useEffect(() => {
      setCurrentModelId(Model_id); // Set the currentModelId when Model_id changes
      const fetchData = async () => {
        try {
          const coreResponse = await fetch(`http://localhost:8080/api/componentbyc/${Model_id}`);
          if (!coreResponse.ok) {
            throw new Error('Failed to fetch core options');
          }
          const coreData = await coreResponse.json();
          console.log(coreData);
          setCoreOptions(coreData);
        } catch (error) {
          console.error('Error fetching core options:', error);
          // Handle the error as needed, e.g., set error state
        }
      };
      fetchData();
  }, [Model_id]);

    return (
        <div>
           <div>
      <h2>Core Options</h2>
      <ul>
        {coreOptions.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
      </div> 
      <div>
      <DynConfig Model_id={Model_id} sltdata={selectedData}></DynConfig>
      </div>
      <div>
      <button variant="contained" color="success" style={{ marginRight: 20, marginBottom: 90 }} onClick={()=>{handleButtonClick("std")}}>Standard</button>
      <button variant="contained" color="success" style={{ marginRight: 20, marginBottom: 90 }} onClick={()=>{handleButtonClick("interior")}}>Interior</button>
      <button variant="contained" color="success" style={{ marginRight: 20, marginBottom: 90 }} onClick={()=>{handleButtonClick("exterior")}}>Exterior</button>
      <button variant="contained" color="success" style={{ marginRight: 20, marginBottom: 90 }} onClick={handleCancel}>Cancel</button>
      <button variant="contained" color="success" style={{ marginRight: 20, marginBottom: 90 }} onClick={handleConfirm}>Confirm Order</button>
      </div> </div>
    )
}

export default Configure