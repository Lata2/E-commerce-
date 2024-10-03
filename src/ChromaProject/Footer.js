import React from 'react';
import './Footer.css';
import { Divider, Row, Col } from 'antd';
import { YoutubeOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

function Footer() {
    return (
        <div className='MainFooterContainer'>
            <div className='DevideContainers'>
                <p>Contact With Us</p>
                <input placeholder='Email Address' className='EmailInputBox' />
                <div className='SocialIcons'>
                    <YoutubeOutlined className='SocialIcon' />
                    <FacebookOutlined className='SocialIcon' />
                    <InstagramOutlined className='SocialIcon' />
                    <LinkedinOutlined className='SocialIcon' />
                    <TwitterOutlined className='SocialIcon' />
                </div>
                <p className='copyright'>© Copyright 2023 Croma. All rights reserved</p>
            </div>

            <Divider type="vertical" className='DividerLine' />

            <div className='DevideContainers'>
                <Row >
                    <Col span={12} className='Containt'>
                        <p>USEFUL LINKS

                            About Croma</p>
                        <p>
                            Help And Support</p>
                    <p>
                            FAQs</p>
                        <p>
                            Buying Guide</p>
                        <p>
                            Return Policy</p>
                        <p>
                            B2B Orders</p>
                        <p>
                            Store Locator</p>
                        <p>
                            E-Waste</p>
                        <p>
                            Franchise Opportunity</p>

                    </Col>
                    <Col span={12} className='Containt'>
                       
                        <p>
                            Site Map</p>
                    <p>
                           Career at Choma</p>
                        <p>
                           Turms of Use</p>
                        <p>
                            Desclaimer</p>
                        <p>
                           Privacy Policy</p>
                        <p>
                            Unbox</p>
                        <p>
                           Gitcard</p>
                        <p>
                            Chroma-E-Star</p>

                    </Col>
                </Row>

            </div>

            <Divider type="vertical" className='DividerLine' />

            <div className='DevideContainers'>
            <Row >
                    <Col span={12} className='Containt'>
                        <p>PRODUCTS
Televisions & Accessories

                            </p>
                        <p>
                            Help And Support</p>
                    <p>
                            FAQs</p>
                        <p>
                            Buying Guide</p>
                        <p>
                            Return Policy</p>
                        <p>
                            B2B Orders</p>
                        <p>
                            Store Locator</p>
                        <p>
                            E-Waste</p>
                        <p>
                            Franchise Opportunity</p>

                    </Col>
                    <Col span={12} className='Containt'>
                       
                        <p>
                           Grooming & Personal Care</p>
                    <p>
                           Career at Choma</p>
                        <p>
                           Turms of Use</p>
                        <p>
                            Desclaimer</p>
                        <p>
                           Privacy Policy</p>
                        <p>
                            Unbox</p>
                        <p>
                           Gitcard</p>
                        <p>
                            Chroma-E-Star</p>

                    </Col>
                </Row>

            </div>
        </div>
    );
}

export default Footer;
