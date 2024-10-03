import React from 'react';
import { Button, Col, Rate, Row } from 'antd';
import './Cart.css';
import config from '../../Config/Config';

function Cart({ data = [], removeFromCart, moveToWishList }) {
    console.log(data, 'Cart Items');

    return (
        <div className='MainCartContainer'>
            <h3 style={{marginTop:'8%',marginLeft:'2%'}}>YOUR CART</h3>

            <div className='CartContainer'>
                <div className='MainProductImagePrizeContainer'>
                    {data.map(item => (
                        <div key={item.id} className='ProductImagePrizeContainer'>
                            <div className='addProductsContainer'>
                                <div className='MainaddProductsImage'>
                                    <img className='addProductsImage' src={config.apiBaseURL + item.image} alt={item.name} />
                                </div>
                                <div className='MainProductDescription'>
                                    <h1 className='ProductDescription'>{item.name}</h1>
                                    <Rate className='Rating' />
                                    <p>Standard Delivery by </p>
                                    <p>17 June 2024 | Free</p>
                                    <div className='button-container'>
                                        <Button className='button' onClick={() => moveToWishList(item.id)}>Move To WishList</Button>
                                        <Button className='button' onClick={() => removeFromCart(item.id)}>Remove</Button>
                                    </div>
                                </div>
                                <div className='MainProductPrizeAdd'>
                                    <p className='ProductPrizeAdd'>₹ {item.prize}</p>
                                    <p style={{ fontSize: 'x-small' }}>(Incl. all Taxes)</p>
                                    <hr />
                                    <p style={{ fontSize: 'x-small' }}>MRP ₹{item.delPrize}<br />
                                        (Save ₹{item.delPrize - item.prize})</p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='MainProductBillContainer'>
                    <div className='ProductBillContainer'>
                        <h5>Order Summary ({data.length} item{data.length > 1 ? 's' : ''})</h5>
                        <Row>
                            <Col className='ColContaint' span={17}>Original Price</Col>
                            <Col className='ColContaint'>₹{data.reduce((acc, item) => acc + item.delPrize, 0)}</Col>
                        </Row>
                        <Row>
                            <Col className='ColContaint' span={17}>Total</Col>
                            <Col className='ColContaint'>₹{data.reduce((acc, item) => acc + item.prize, 0)}</Col>
                        </Row>
                        <Button className='CheakButton'>Checkout</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
