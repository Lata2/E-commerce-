// import React, { useState, useEffect } from 'react';
// import ProductView from '../ProductFolder/ProductViewpage';
// import Cart from './Cart';

// function App() {
 
//     const [cartItems, setCartItems] = useState(() => {
//         const savedCartItems = localStorage.getItem('cartItems');
//         return savedCartItems ? JSON.parse(savedCartItems) : [];
//     });

//     // Save cart items to localStorage whenever they change
//     useEffect(() => {
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//     }, [cartItems]);

//     return (
//         <div>
//             <ProductView cartItems={cartItems} setCartItems={setCartItems} />
//             <Cart data={cartItems} />
//         </div>
//     );
// }

// export default App;
