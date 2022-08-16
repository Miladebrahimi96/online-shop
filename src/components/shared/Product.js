import React, {useContext} from 'react';
import { Link } from "react-router-dom";

//ICons
import {FiTrash} from "react-icons/fi"

//Functions
import { shorter, isInCart, quantityCount } from '../../helpers/functions';

//Context
import { CartContext } from '../../contexts/CartContextProvider';

const Product = ({data}) => {

    const {image, title, price, id } = data;

    const {state, dispatch} = useContext(CartContext);

    return (
        <div>
            <img src={image} alt="product_Image" style={{width: "200px"}}/>
            <h3>{shorter(title)}</h3>
            <div>
                <Link to={`/products/${id}`}>Details</Link>
                <p>${price}</p>
                <div>
                    {
                        quantityCount(state, id) === 1 && 
                        <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: data})}><FiTrash/></button>
                    }
                    {
                        quantityCount(state, id) > 1 && 
                        <button onClick={() => dispatch({type: "DECREASE", payload: data})}>-</button>
                    }
                    <span>{quantityCount(state, id)}</span>
                    {
                    !isInCart(state, id) ? <button onClick={() => dispatch({type: "ADD_ITEM", payload: data})}>Add to Cart</button> :
                    <button onClick={() => dispatch({type: "INCREASE", payload: data})}>+</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;