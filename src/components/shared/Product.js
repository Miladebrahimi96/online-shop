import React from 'react';
import { Link } from "react-router-dom";

//Functions
import { shorter } from '../../helpers/functions';

const Product = ({data}) => {

    const {image, title, price, id } = data;

    return (
        <div>
            <img src={image} alt="product_Image" style={{width: "200px"}}/>
            <h3>{shorter(title)}</h3>
            <div>
                <Link to={`/products/${id}`}>Details</Link>
                <p>{price}</p>
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;