import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomePage.css"; // Assuming you have a CSS file for styling

function Fade() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    waitForAnimate: false
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717741517/Croma%20Assets/CMS/LP%20Page%20Banners/2024/BAU/HP_CC_TV_7June2024_i3bks8.png?tr=w-1024' alt="Slide 1" />
        </div>
        <div>
          <img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717823812/Croma%20Assets/CMS/LP%20Page%20Banners/2024/Sanity/HP/June/08062024/HP_CC_AC_8June2024_qng0z8.png?tr=w-1024' alt="Slide 2" />
        </div>
        <div>
          <img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710743257/Croma%20Assets/CMS/Testing/2024/March/18th/Exclusively%20Curated%20For%20You/Desktop/Jpg/1Gift_dflts4.png?tr=w-1024' alt="Slide 3" />
        </div>
        <div>
          <img src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1710743258/Croma%20Assets/CMS/Testing/2024/March/18th/Exclusively%20Curated%20For%20You/Desktop/Jpg/Indulge_rve6v9.png?tr=w-1024' alt="Slide 4" />
        </div>
       
      </Slider>

    </div>




  );
}

export default Fade;
