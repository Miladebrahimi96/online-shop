import React, { useContext } from 'react';

//Styles
import style from "./MainStore.module.css";

//Contexts
import { ProductContext } from '../contexts/ProductContextProvider';
import Product from './shared/Product';

const Clothing = () => {

    const products = useContext(ProductContext);
    console.log(products);

    const newProducts = products.filter(product => product.category === "men's clothing" || product.category === "women's clothing");

    return (
        <div className={style.container}>
            {
                newProducts.map(product => <Product key={product.id} data={product}/>)
            }
        </div>
    );
};

export default Clothing;
