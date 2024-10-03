import React, { useState ,useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './ChromaProject/ProductFolder/ProductPage';
import ProductViewpage from './ChromaProject/ProductFolder/ProductViewpage';
import HomeComponents from './HomePageComponent/HomeComponents';
import MobileViews from './NagivatePages/MobileViews';
import Header from './ChromaProject/HeaderFolder/Header';
import Footer from './ChromaProject/Footer';
import Cart from './ChromaProject/CartSection/Cart';
import LoginPage from './ChromaProject/HeaderFolder/LoginPage';
import Location from './ChromaProject/HeaderFolder/Location';
import WishList from './ChromaProject/HeaderFolder/WishList';

function App() {


const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
});
useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}, [cartItems]);
const removeFromCart = (id) => {
  setCartItems(prevCartItems => 
      prevCartItems.filter(item => item.id !== id)
  );
};
const moveToWishList = (id) => {
  const item = cartItems.find(item => item.id === id);
  if (item) {
      setCartItems(prevCartItems => 
          prevCartItems.filter(item => item.id !== id)
      );
      setWishListItems(prevWishListItems => [...prevWishListItems, item]);
  }
};



const [wishListItems, setWishListItems] = useState(() => {
    const savedWishList = localStorage.getItem('wishListItems');
    return savedWishList ? JSON.parse(savedWishList) : [];
});
useEffect(() => {
    localStorage.setItem('wishListItems', JSON.stringify(wishListItems));
}, [wishListItems]);
const removeFromWishList = (id) => {
  setWishListItems(prevWishListItems => 
      prevWishListItems.filter(item => item.id !== id)
  );
};
const addToCart = (id) => {
  const item = wishListItems.find(item => item.id === id);
  if (item) {
      setWishListItems(prevWishListItems => 
          prevWishListItems.filter(item => item.id !== id)
      );
      setCartItems(prevCartItems => [...prevCartItems, item]);
  }
};



  return (
    <div>
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <Routes>
          <Route path="/" element={<HomeComponents />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Location" element={<Location />} />
          <Route path="/mobileViews" element={<MobileViews />} />
          <Route path="/cart" element={<Cart data={cartItems} removeFromCart={removeFromCart}  moveToWishList={moveToWishList} />} />
          <Route path="/WishList" element={<WishList  data={wishListItems} removeFromWishList={removeFromWishList}   addToCart={addToCart} />} />
          <Route path="/ProductPage" element={<ProductPage setWishListItems={ setWishListItems} wishListItems={wishListItems} />} />
          <Route path="/productView" element={<ProductViewpage cartItems={cartItems} setCartItems={setCartItems}  />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
