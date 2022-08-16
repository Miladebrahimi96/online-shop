import React, { useContext } from 'react';

//Styles
import style from "./MainStore.module.css";

//Contexts
import { ProductContext } from '../contexts/ProductContextProvider';
import Product from './shared/Product';

const Jewelery = () => {

    const products = useContext(ProductContext);
    
    const newProducts = products.filter(product => product.category === "jewelery");

    return (
        <div className={style.container}>
            {
                newProducts.map(product => <Product key={product.id} data={product}/>)
            }
        </div>
    );
};

export default Jewelery;
