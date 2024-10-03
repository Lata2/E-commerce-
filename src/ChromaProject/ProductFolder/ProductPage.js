import React, { useEffect, useState } from 'react';
import './ProductPage.css';
import { Row, Col } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProductCategory } from '../../API/CoreApi';
import config from '../../Config/Config';

function ProductPage({ setWishListItems, wishListItems = [] }) {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, [location.state]);

    const fetchProducts = async () => {
        try {
            const response = await ProductCategory();
            let filteredProducts = response;

            if (location.state && location.state.category) {
                filteredProducts = response.filter(item => item.category === location.state.category);
            }

            if (location.state && location.state.search) {
                filteredProducts = filteredProducts.filter(item =>
                    item.name.toLowerCase().includes(location.state.search.toLowerCase())
                );
            }

            setProducts(filteredProducts);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const ProductView = (productId) => {
        const foundProduct = products.find(item => item.id === productId);
        if (foundProduct) {
            navigate('/productView', { state: { product: foundProduct } });
        } else {
            console.warn(`Product with id ${productId} not found.`);
        }
    };

    const toggleLike = (product) => {
        setWishListItems(prevWishListItems => {
            const isLiked = prevWishListItems.some(item => item.id === product.id);
            if (isLiked) {
                return prevWishListItems.filter(item => item.id !== product.id);
            } else {
                return [...prevWishListItems, product];
            }
        });
    };

    return (
        <div className='MainHomePageContainer'>
            <Row gutter={[16, 16]}>
                {products.map((item, index) => (
                    <Col key={index} span={8}>
                        <div className='ProductContainer'>
                            <div className='ImageContainer'>
                                <HeartOutlined
                                    className={`LikeIcon ${wishListItems.some(wishListItem => wishListItem.id === item.id) ? 'liked' : ''}`}
                                    onClick={() => toggleLike(item)}
                                />
                                <img
                                    className='Image'
                                    src={config.apiBaseURL + item.image}
                                    alt={item.name}
                                    onClick={() => ProductView(item.id)}
                                />
                            </div>
                            <div className='ProductDetails'>
                                <h3>{item.name}</h3>
                                <p>Price: {item.prize}</p>
                                <p>Original Price: <del>{item.delPrize}</del></p>
                                <p>Standard Delivery by Tue, 11th Jun</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default ProductPage;
