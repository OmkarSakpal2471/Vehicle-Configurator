import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar_tool from '../component/Navbar_tool';

function Welcome() {
    let navigate = useNavigate();
  const [segment, setSegment] = useState([]);
  const [mfg, setMfg] = useState([]);
  const [model,setMdl]=useState([]);
  const [selectedSegment, setSelectedSegment] = useState(0);
  const [selectedMfg, setSelectedMfg] = useState(0);
  const [selectedModel, setSelectedModel] = useState(0);
  const [quantity, setQuantity] = useState();
  const [selectedModelName, setSelectedModelName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem('quantity', quantity);
    sessionStorage.setItem('Model_id', selectedModel);
    sessionStorage.setItem('Model_Name', selectedModelName);
    navigate(`/defaultconfig/${selectedModel}`);
  };

  useEffect(() => {
    const selectedModelObject = model.find((mdl) => mdl.model_id == selectedModel);
    const name = selectedModelObject ? selectedModelObject.model_name : '';
    setSelectedModelName(name);
    console.log("checkkk"+model+selectedModel);
    
  }, [selectedModel, model]);

  useEffect(() => {
    // Fetch segments
    const fetchSegment = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/segments");
        const data = await response.json();
        setSegment(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching segments:", error);
      }
    };
    fetchSegment();
  }, []);

  useEffect(() => {
    // Fetch cities for the selected seg
    const fetchMfg = async () => {
      if (selectedSegment) {
        try {
          const response = await fetch("http://localhost:8080/api/mfgbyid/" + selectedSegment);
          const data = await response.json();
          setMfg(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching Manufactorer:", error);
        }
      }
    };

    if (selectedSegment != 0) {
        fetchMfg();
    } else {
        setMfg([]); // Clear Mfg if no seg is selected
    }
    setSelectedMfg(""); // Reset selected mfg when seg changes
  }, [selectedSegment]);

  useEffect(() => {
    // Fetch cities for the selected seg
    const fetchModel = async () => {
      if (selectedSegment && selectedMfg) {
        try {
          const response = await fetch(`http://localhost:8080/api/Model/${selectedSegment}/${selectedMfg}`);
          const data = await response.json();
          setMdl(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching Model:", error);
        }
      }
    };
    
        
    
    if (selectedMfg != 0) {
        fetchModel();
    } else {
        setMdl([]); 
    }
    setSelectedModel(""); 
  }, [selectedMfg]);
  

  return (

    <div style={{ overflow: 'hidden', backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Navbar_tool style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  <form onSubmit={handleSubmit} style={{ 
      width: '400px',
      textAlign: 'center',
      padding: '20px',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)', /* Glassy effect */
      backgroundColor: 'rgba(255, 255, 255, 0.1)' /* Background transparency */
    }}>
    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="SegmentDropdown" style={{ marginRight: '10px',color:"white" }}>Select a Segment:</label>
      <select
        id="SegmentDropdown"
        value={selectedSegment}
        onChange={(e) => setSelectedSegment(e.target.value)}>
        <option value="">Select a Segment</option>
        {segment.map((seg) => (
          <option key={seg.seg_id} value={seg.seg_id}>
            {seg.seg_name}
          </option>
        ))}
      </select>
    </div>

    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="MfgDropdown" style={{ marginRight: '10px',color:"white"  }}>Select a Manufacturer:</label>
      <select
        id="MfgDropdown"
        value={selectedMfg}
        name="MfgName"
        onChange={(e) => setSelectedMfg(e.target.value)}>
        <option value="">Select a Manufacturer</option>
        {mfg.map((mfg) => (
          <option key={mfg.mfg_id} value={mfg.mfg_id}>
            {mfg.mfg_name}
          </option>
        ))}
      </select>
    </div>

    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="ModelDropdown" style={{ marginRight: '10px',color:"white"  }}>Select a Model:</label>
      <select
        id="ModelDropdown"
        name="ModelName"
        onChange={(e) => setSelectedModel(e.target.value)}>
        <option value="">Select a Model</option>
        {model.map((model) => (
          <option key={model.model_id} value={model.model_id}>
            {model.model_name}
          </option>
        ))}
      </select>
    </div>

    <div style={{ marginBottom: '15px' }}>
      <label htmlFor="Quantity" style={{ marginRight: '10px',color:"white"  }}>Quantity:</label>
      <textarea
        type="number"
        step="any"
        placeholder="Quantity"
        inputProps={{ min: { quantity } }}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
    </div>

    <br />
    <button type="submit">
      Submit
    </button>
  </form>
</div>


    </div>
    
  );
}

export default Welcome;