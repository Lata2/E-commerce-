// Header.jsx

import React, { useEffect, useState } from 'react';
import './Header.css';
import {
  MenuOutlined,
  HeartOutlined,
  CloseOutlined,
  AudioOutlined,
  EnvironmentOutlined,
  UserOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { Input, Space, Menu, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import Location from './Location';
import { GetLocation } from '../../API/CoreApi';
import SpeechRecognitionComponent from './SpeechRecognition'; // Import SpeechRecognitionComponent

function Header({ cartItems }) {
  const [loc, setLocation] = useState([]); 
  const [menuVisible, setMenuVisible] = useState(false);
  const [loginModalVisible, setLoginModalVisible] = useState(false); 
  const [locationModalVisible, setLocationModalVisible] = useState(false); 
  const [searchValue, setSearchValue] = useState('');
  const [listening, setListening] = useState(false); // State to control speech recognition
  const navigate = useNavigate();

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    try {
      const response = await GetLocation();
      setLocation(response);
      console.log(response, 'location');
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleWishlistClick = () => {
    navigate('/WishList');
  };

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuItemClick = (category) => {
    navigate('/ProductPage', { state: { category } });
    setMenuVisible(false);
  };

  const handleSearch = (value) => {
    navigate('/ProductPage', { state: { search: value } });
  };

  const handleUserClick = () => {
    setLoginModalVisible(true);
  };

  const handleLoginModalClose = () => {
    setLoginModalVisible(false);
  };

  const handleLocationClick = () => {
    setLocationModalVisible(true);
  };

  const handleLocationModalClose = () => {
    setLocationModalVisible(false);
  };

  const { Search } = Input;

  return (
    <div className='MainHeaderContainer'>
      <div className='HeaderContainer'>
        <div className='LogoContainer'>
          <img
            className='logo'
            onClick={handleLogoClick}
            src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg'
            alt='Croma Logo'
          />
        </div>
        <div className='MenuContainer'>
          {menuVisible ? (
            <CloseOutlined className='Icon' onClick={handleMenuClick} />
          ) : (
            <MenuOutlined className='Icon' onClick={handleMenuClick} />
          )}
          Menu
          {menuVisible && (
            <Menu style={{ width: 90 }} mode="vertical" items={[
              { key: 'sub1', label: 'Laptop', onClick: () => handleMenuItemClick(1) },
              { key: 'sub2', label: 'Mobile', onClick: () => handleMenuItemClick(2) },
              { key: 'sub4', label: 'Watch', onClick: () => handleMenuItemClick(3) },
            ]} />
          )}
        </div>
        <div className='SearchContainer'>
          <Space direction="vertical">
            <Search
              className='SearchBox'
              placeholder="input search text"
              onSearch={handleSearch}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              suffix={
                <AudioOutlined
                  style={{ fontSize: 16, color: listening ? 'red' : '#1677ff' }}
                  onClick={() => setListening(!listening)} // Toggle listening state
                />
              }
            />
            {listening && <SpeechRecognitionComponent setSearchValue={setSearchValue} listening={listening} setListening={setListening} />}
          </Space>
        </div>
        <div className='LocationContainer'>
          <EnvironmentOutlined className='Icon' onClick={handleLocationClick} />
          {loc.map((item) => (
            <React.Fragment key={item.pin}>
              <span style={{ color: 'white' }}>{item.city}</span>,<span style={{ color: 'white' }}>{item.pin}</span>
            </React.Fragment>
          ))}
        </div>
        <div className='ShoppingLoginContainer'>
          <UserOutlined className='userIcon' onClick={handleUserClick} />
          <HeartOutlined className='userIcon' onClick={handleWishlistClick} />
          <div style={{ position: 'relative' }}>
            <ShoppingCartOutlined className='userIcon' onClick={handleCartClick} />
            {cartItems.length > 0 && (
              <div className='cart-count'>{cartItems.length}</div>
            )}
          </div>
        </div>
      </div>
      <Modal visible={loginModalVisible} onCancel={handleLoginModalClose} footer={null}>
        <LoginPage />
      </Modal>
      <Modal visible={locationModalVisible} onCancel={handleLocationModalClose} footer={null}>
        <Location onClose={handleLocationModalClose} />
      </Modal>
    </div>
  );
}

export default Header;
