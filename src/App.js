import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

//Components
import MainStore from './components/MainStore';
import ProductDetails from './components/ProductDetails';
import CartContextProvider from './contexts/CartContextProvider';
import Navbar from './components/Navbar';
import ShopCart from './components/ShopCart';

//Contexts
import ProductContextProvider from './contexts/ProductContextProvider';

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/products' element={<MainStore/>}/>
          <Route path='/products/:id' element={<ProductDetails/>}/>
          <Route path='/cart' element={<ShopCart/>}/>
          <Route path='/*' element={<Navigate to="/products" />}/>
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;