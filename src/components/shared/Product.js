import React from 'react';

//Functions
import { shorter } from '../../helpers/functions';

const Product = ({data}) => {

    const {image, title, price } = data;

    return (
        <div>
            <img src={image} alt="product_Image" style={{width: "200px"}}/>
            <h3>{shorter(title)}</h3>
            <div>
                <a href='#'>Details</a>
                <p>{price}</p>
                <div>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;