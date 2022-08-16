import React, { useContext } from 'react';

//Contexts
import { ProductContext } from '../contexts/ProductContextProvider';
import Product from './shared/Product';

const MainStore = () => {

    const products = useContext(ProductContext);
    console.log(products);

    return (
        <div>
            {
                products.map(product => <Product key={product.id} data={product}/>)
            }
        </div>
    );
};

export default MainStore;
