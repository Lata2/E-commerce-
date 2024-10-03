import React, { useState } from 'react';
import { Modal, Button, Input, message } from 'antd';
import './Location.css'; 
import { Locationapi } from '../../API/CoreApi';

function Location({ onClose }) {
  const [city, setCity] = useState('');
  const [pin, setPin] = useState('');

  const handleCityChange = (e) => setCity(e.target.value);
  const handlePinChange = (e) => setPin(e.target.value);

  const handleSubmit = async () => {
    const values = { city, pin };
    const response = await Locationapi(values);
    if (response) {
      message.success('Location updated successfully');
      onClose(); 
    } else {
      message.error('Location update failed');
    }
  };

  return (
    <div className='MainLocationPage'>
      <p>Select Your Location</p>
      <p>To Check Products & Delivery Options available at your location</p>
      <Input
        className='LocationInput'
        placeholder="Enter your city"
        value={city}
        onChange={handleCityChange}
        style={{ marginBottom: '10px' }}
      />
      <Input
        className='LocationInput'
        placeholder="Enter your pin"
        value={pin}
        onChange={handlePinChange}
        style={{ marginBottom: '10px' }}
      />
      <div style={{ textAlign: 'center', margin: '10px 0' }}></div>
      <Button type="primary" onClick={handleSubmit} style={{ marginTop: '10px' }}>
        Submit
      </Button>
    </div>
  );
}

export default Location;
