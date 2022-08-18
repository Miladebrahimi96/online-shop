import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

//Components
import MainStore from './components/MainStore';
import ProductDetails from './components/ProductDetails';
import CartContextProvider from './contexts/CartContextProvider';
import ShopCart from './components/ShopCart';
import MensClothing from './components/Clothing';
import Jewelery from './components/Jewelery';
import Electronics from './components/Electronics';
import Burger from './components/shared/Burger';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';

//Contexts
import ProductContextProvider from './contexts/ProductContextProvider';

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Burger/>
        <Routes>
          <Route path='/products' element={<MainStore/>}/>
          <Route path='/products/clothing' element={<MensClothing/>}/>
          <Route path='/products/jewelery' element={<Jewelery/>}/>
          <Route path='/products/electronics' element={<Electronics/>}/>
          <Route path='/products/:id' element={<ProductDetails/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/cart' element={<ShopCart/>}/>
          <Route path='/*' element={<Navigate to="/products" />}/>
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;