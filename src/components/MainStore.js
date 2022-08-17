import React, { useContext, useState } from 'react';

//components
import Loading from "./shared/Loading";

//Styles
import style from "./MainStore.module.css";

//Contexts
import { ProductContext } from '../contexts/ProductContextProvider';
import Product from './shared/Product';

const MainStore = () => {

    const products = useContext(ProductContext);

    const [search, setSearch] = useState("");

    //Serach input
    const searchHandler = e => setSearch(e.target.value);
    const searchProducts = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            {
                products.length ?
                <>
                    <div className={style.inputContainer}>
                        <input type="text" value={search} onChange={searchHandler} placeholder="Search Products"/>
                    </div>
                    <div className={style.container}>
                        {
                            searchProducts.map(product => <Product key={product.id} data={product}/>)
                        }
                    </div>
                </>:
                <Loading />
            }
        </>
    );
};

export default MainStore;
