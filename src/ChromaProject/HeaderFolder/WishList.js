import React from 'react';
import { Button, Rate } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import './WishList.css';
import config from '../../Config/Config';

export default function WishList({ data = [], removeFromWishList, addToCart }) {
    return (
        <div style={{ backgroundColor: 'rgb(247, 240, 240)' ,width:'100%'}}>
            <div className='MainWishListContainer'>
                <h3>My WishList</h3>
                {data.map(item => (
                    <div key={item.id} className='WishListContainer'>
                        <div className='ImageWishListContainer'>
                            <img className='ImageWishList' src={config.apiBaseURL + item.image} alt={item.name} />
                        </div>
                        <div className='DetailsWishListContainer'>
                            <h4>{item.name}</h4>
                            <p style={{ fontSize: 'x-small' }}>Product Id: {item.id}</p>
                            <p style={{ fontSize: 'small' }}>₹{item.prize} <span > ₹<del>{item.delPrize}</del></span></p>
                            <Rate />
                            <p style={{ fontSize: 'xx-small' }}><CalendarOutlined /> Added on 17 June 2024</p>
                        </div>
                        <div className='WishListButtonContainer'>
                            <Button 
                                className='WishListButton' 
                                type="primary"
                                onClick={() => addToCart(item.id)}
                            >
                                Add To Cart
                            </Button>
                            <Button 
                                className='WishListButton'
                                onClick={() => removeFromWishList(item.id)}
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
