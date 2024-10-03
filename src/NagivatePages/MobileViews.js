import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './MobileViews.css';
import '../HomePageComponent/HomeThirdpage.css';
import '../HomePageComponent/HomeFourthpage.css';
import '../HomePageComponent/HomeFifthPage.css';


function MobileViews() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
    autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="Mainmobile-views-container">
        <div className="mobile-views-container">
            <h3>Mobile Phones</h3>
            <div className="banner">
                <img
                    src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242615/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Main%20Banner/D_main-banner_hat0zq.png?tr=w-2048'
                    alt="Mobile Phones Banner"
                />
            </div>
            <div className="content">
                <h3>Treat yourself to a new Mobile Phone</h3>
                <p>
                    Experience the world at your fingertips! Work, socialise, book a ride, play games, listen to music, watch your favourite shows, take a photo, or simply make a call! Buy a Mobile Phone from Croma that does it all and then some.
                </p>
            </div>
            <div className="content">
                <h3>Know Your Mobile Phones</h3>
            </div>
            <div className="sliderContainerMobilePage">
                <Slider {...settings}>
                <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689855041/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/blog/Which-processor-is-best-for-gaming-on-mobile_20July2023_rkc04t.png?tr=w-1024' /></div>
                <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1699530687/Croma%20Assets/CMS/LP%20Page%20Banners/2023/BAU%20Update/Hacks-to-set-up-your-new-android-phone_20July2023_d57i98.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689855041/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/blog/Android-vs-iOS_20July2023_y1cots.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689855040/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/blog/Must-have-accessories-for-your-iPhone_20July2023_mrllce.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689855040/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/blog/Mobile-Buying-Guide_20July2023_gbfrzl.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689855040/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/blog/A-checklist-for-setting-up-new-phone_20July2023_yhr8gt.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689855041/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/blog/How-to-reset-your-mobile-phone_20July2023_fzhbcg.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1689855039/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/blog/5-easy-ways-to-clean-your-phone_20July2023_y56huc.png?tr=w-1024' /></div>
                </Slider>
            </div>
            <h3>Most Popular Smartphones</h3>
            <div className='MainHomeThirdPageContainer'>
                <div className='HomeThirdPageContainer'>
                    <img className='ImageHomeThirdPageContainer' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717426157/Croma%20Assets/CMS/LP%20Page%20Banners/2024/PCP/Mobile/June/03062024/PCP_2Split_Mobile_VivoV30e5G-_3June2024_sb5bhc.png?tr=w-1024' />
                </div>
                <div className='HomeThirdPageContainer'>

                    <img className='ImageHomeThirdPageContainer' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717426155/Croma%20Assets/CMS/LP%20Page%20Banners/2024/PCP/Mobile/June/03062024/PCP_2Split_Mobile_iPhone13_3June2024_vm5fyn.png?tr=w-1024' />
                </div>
            </div>
            <div className='AppliancesimageContainer'>
                <img className='Appliancesimage' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1717779926/Croma%20Assets/CMS/LP%20Page%20Banners/2024/PCP/Mobile/June/07062024/PCP_Singlesplit_Vivo_7June2024_rhvhnz.png?tr=w-1024' />
            </div>
            <div>
                <h3>Choose Your Type</h3>
                <div className='MainOurNewFavouritesContainer'>

                     <div className='OurNewFavouritesContainer'>
                        <img className='ImageOurNewFavouritesContainer' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242611/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Choose%20Your%20Type/3split_PCP_righttype_iPhone_15May2023_dfaihn.png?tr=w-1024' />
                    </div>
                     <div className='OurNewFavouritesContainer'>
                     <img className='ImageOurNewFavouritesContainer'  src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242611/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Choose%20Your%20Type/3split_PCP_righttype_Android_15May2023_m5mclk.png?tr=w-1024' />
                    </div>
                     <div className='OurNewFavouritesContainer'>
                     <img className='ImageOurNewFavouritesContainer'  src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242608/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Choose%20Your%20Type/3split_PCP_righttype_Feature_15May2023_say3ow.png?tr=w-1024' />

                    </div>
                </div>
            </div>
            <div className="content">
                <h3>Your Smartphone, Your Use</h3>
            </div>
            <div className="sliderContainerMobilePage">
                <Slider {...settings}>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698219485/Croma%20Assets/CMS/Bugs/01012023/040423/mob%20pcp/4split_PCP_smartphonesfor_Productivity_25Oct2023_seszo7.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698219477/Croma%20Assets/CMS/Bugs/01012023/040423/mob%20pcp/4split_PCP_smartphonesfor_5GNetwork_25Oct2023_i1z2wc.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698219482/Croma%20Assets/CMS/Bugs/01012023/040423/mob%20pcp/4split_PCP_smartphonesfor_Daylonguse_25Oct2023_hilmcr.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698219480/Croma%20Assets/CMS/Bugs/01012023/040423/mob%20pcp/4split_PCP_smartphonesfor_Bingewatching_25Oct2023_ofkw6y.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1698219482/Croma%20Assets/CMS/Bugs/01012023/040423/mob%20pcp/4split_PCP_smartphonesfor_Gaming_25Oct2023_w5stjf.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242611/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Your%20Smartphone%2C%20Your%20Use/4split_PCP_smartphonesfor_content-creation_15May2023_zczhv8.png?tr=w-1024' /></div>
                    {/* <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1697631771/Croma%20Assets/CMS/PCP/Mobile%20PCP/18-10-2023/4spli_PCP_shopbybrand_nothing_180ct2023_xy128n.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1666000242/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/NEW%20PCP%20DESIGN%20-%20OCT/Updated/4spli_PCP_shopbybrand_vivo_27sep2022_knaawj.png?tr=w-1024' /></div>
                */}
                </Slider>
            </div>
            <div className="content">
                <h3>For Your Budget</h3>
            </div>
            <div className="sliderContainerMobilePage">
                <Slider {...settings}>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242609/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_below5K_15May2023_k8wvhd.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242610/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_5Kto10K_15May2023_xm9iqq.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242606/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_10Kto20K_15May2023_fuop6n.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242607/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_20Kto30K_15May2023_yrfh2g.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242609/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_30Kto50K_15May2023_qspz8w.png?tr=w-1024' /></div>
                    <div className="ImageSliderContainerMobilePage"><img className="ImageSliderMobile" src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1684242607/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/For%20Your%20Budget/4Split_PCP_shopbyprice_above50K_15May2023_bznsjt.png?tr=w-1024' /></div>
                </Slider>
            </div>
        </div>
        </div>
    );
}

export default MobileViews;
