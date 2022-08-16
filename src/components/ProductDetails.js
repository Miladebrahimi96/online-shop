import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

//styles
import style from "./ProductDetails.module.css";

//APIs
import { getProduct } from '../services/api';

const ProductDetails = () => {

    const params = useParams();
    const id = params.id;

    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            setProduct(await getProduct(id));
        }
        fetchProduct();
    },[id])

    const {image, title, price, category, description} = product;

    return (
        <div className={style.container}>
            <img className={style.image} src={image} alt="product_image"/>
            <div className={style.textContainer}>
                <h3>{title}</h3>
                <p className={style.description}>{description}</p>
                <p className={style.category}><span>Category:</span> {category}</p>
                <div className={style.buttonContainer}>
                    <span className={style.price}>${price}</span>
                    <Link to="/products">Back to Shop</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;