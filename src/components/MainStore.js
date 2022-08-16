import React, { useContext } from 'react';

//Styles
import style from "./MainStore.module.css";

//Contexts
import { ProductContext } from '../contexts/ProductContextProvider';
import Product from './shared/Product';

const MainStore = () => {

    const products = useContext(ProductContext);
    console.log(products);

    return (
        <div className={style.container}>
            {
                products.map(product => <Product key={product.id} data={product}/>)
            }
        </div>
    );
};

export default MainStore;
