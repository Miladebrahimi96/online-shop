import React from 'react';

//Components
import MainStore from './components/MainStore';
//Contexts
import ProductContextProvider from './contexts/ProductContextProvider';

const App = () => {
  return (
    <ProductContextProvider>
      <MainStore />
    </ProductContextProvider>
  );
};

export default App;