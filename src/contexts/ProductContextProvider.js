import React, {useState, useEffect, createContext} from 'react';

//APIs
import { getProducts } from '../services/api';

export const ProductContext = createContext();

const ProductContextProvider = ({childern}) => {

    const [products, setProducts] = useState([]);

    useEffect(()=> {
        const fetchProducts = async () => {
            setProducts(await getProducts());
        }

        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={products}>
            {childern}
        </ProductContext.Provider>
    )
};

export default ProductContextProvider;