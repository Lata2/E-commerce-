import React, { useState } from "react";
import Slider from "react-slick";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import './ProductViewPage.css';
import { Button } from "antd";
import { useLocation } from "react-router-dom";
import config from "../../Config/Config";

function ProductView({ cartItems, setCartItems }) {
  const location = useLocation();
  const product = location.state.product;

  const [selectedImage, setSelectedImage] = useState(config.apiBaseURL + product.image);

  const addToCart = () => {
    setCartItems([...cartItems, product]);
  };

  const images = [
    { img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1705412815/Croma%20Assets/Communication/Mobiles/Images/303530_1_rfohza.png?tr=w-225' },
    { img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1704435135/Croma%20Assets/Communication/Mobiles/Images/303530_pqt839.png?tr=w-225' },
    { img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713883900/Croma%20Assets/Communication/Mobiles/Images/303530_9_wh6sio.png?tr=w-225' },
    { img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1704435137/Croma%20Assets/Communication/Mobiles/Images/303530_7_avf997.png?tr=w-225' },
    { img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1704435131/Croma%20Assets/Communication/Mobiles/Images/303530_5_iphbjx.png?tr=w-225' },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    vertical: true,
    verticalSwiping: true,
    cssEase: "linear"
  };

  const handleImageClick = (image) => {
    setSelectedImage(image.img);
  };

  return (
    <div className="upperMainProductViewPageContainer">
      <div className="MainProductViewPageContainer">
        <div className="SlickProductViewslidersContainer">
          <Slider {...settings} className="slider-Container">
            {images.map((image, index) => (
              <div
                className="Slider-Image-Container"
                key={index}
                onClick={() => handleImageClick(image)}
              >
                <img className="Slider-Image" src={image.img} alt={`Product slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="ProductImageContainer">
          <Zoom>
            <img
              key={product.id}
              className="ImageProduct"
              src={selectedImage}
              alt={product.name}
            />
          </Zoom>
        </div>
        <div className="ProductAboutContainer">
          <h2>{product.name}</h2>
          <div style={{ columnGap: '20%' }}>
            <h3>{product.prize}</h3>
            <h5><del>{product.delPrize}</del></h5>
            <span style={{ fontSize: 'xx-small' }}>(Incl. all Taxes)</span>
          </div>
        </div>
      </div>
      <div className="ButtonContainer">
        <Button className="Button">Buy Now</Button>
        <Button key={product.id} className="Button" onClick={addToCart}>Add To Cart</Button>
      </div>
    </div>
  );
}

export default ProductView;
