import React, { useContext } from 'react';

//components
import Loading from "./shared/Loading";

//Styles
import style from "./MainStore.module.css";

//Contexts
import { ProductContext } from '../contexts/ProductContextProvider';
import Product from './shared/Product';

const MainStore = () => {

    const products = useContext(ProductContext);
    console.log(products);

    return (
        <>
            {
                products.length ?
                <div className={style.container}>
                    {
                        products.map(product => <Product key={product.id} data={product}/>)
                    }
                </div>:
                <Loading />
            }
        </>
    );
};

export default MainStore;
