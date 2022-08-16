import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

//APIs
import { getProduct } from '../services/api';

const ProductDetails = () => {

    const params = useParams();
    const id = params.id;

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            setProduct(await getProduct(id));
        }
        fetchProduct();
    },[])

    const {image, title, price, category, description} = product;

    return (
        <div>
            <img src={image} alt="product_image"/>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>Category:</span> {category}</p>
                <div>
                    <span>${price}</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;