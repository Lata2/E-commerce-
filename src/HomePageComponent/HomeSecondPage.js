import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeSecondPage.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MultipleItems() {
    const data = [{
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746332/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Mobile_sdtrdf.png?tr=w-1024,h-1024,f-webp,q-80" alt="mobile'
    }, {
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746308/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Air_Conditioner_a4hg1z.png?tr=w-1024'
    }, {
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746346/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/TV_vdemgc.png?tr=w-1024'
    }, {
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746333/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Ref_biysg7.png?tr=w-1024'
    }, {
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746331/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Laptops_pzewpv.png?tr=w-1024'
    }, {
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746312/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Head_set_xjj934.png?tr=w-1024'
    }, {
        img: 'ttps://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746308/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Cooler_rlkah3.png?tr=w-1024'
    }, {
        img: 'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717746311/Croma%20Assets/CMS/LP%20Page%20Banners/2024/HP%20Category%20Ic0on/Homepage%20Cat%20Icons-Desktop/Home_theatres_kpwvft.png?tr=w-1024'
    }
    ]

    // const [image, setImage] = useState(data)
    const navi = useNavigate();
    const ViewPage = () => {
        navi('/mobileViews')
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
        autoplay: true,
        autoplaySpeed: 6000,
    };
    return (
        <div className="sliderContainer">

            <Slider {...settings}>
                {data.map(item => (
                    <div className="ImageSliderContainer" onClick={ViewPage}>
                        <img className="ImageSlider" src={item.img} />

                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default MultipleItems;
