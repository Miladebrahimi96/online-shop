import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

//Components
import MainStore from './components/MainStore';
import ProductDetails from './components/ProductDetails';

//Contexts
import ProductContextProvider from './contexts/ProductContextProvider';

const App = () => {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path='/products' element={<MainStore/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
        <Route path='/*' element={<Navigate to="/products" />}/>
      </Routes>
    </ProductContextProvider>
  );
};

export default App;