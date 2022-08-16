import React, { useContext } from 'react';

//Contexts
import { CartContext } from '../../contexts/CartContextProvider';

//Functions
import { shorter } from '../../helpers/functions';

//Icons
import { FiTrash } from "react-icons/fi";

const Cart = ({data}) => {

    const {dispatch} = useContext(CartContext);

    const { image, price, title, quantity } = data;

    return (
        <div>
            <img src={image} alt="product_image" />
            <div>
                <h3>{shorter(title)}</h3>
                <p>${price}</p>
            </div>
            <div>
                <span>{quantity}</span>
            </div>
            <div>
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type:"DECREASE", payload: data})}>-</button> :
                    <button onClick={() => dispatch({type:"REMOVE_ITEM", payload: data})}><FiTrash/></button>
                }
                <button onClick={() => dispatch({type:"INCREASE", payload: data})}>+</button>
            </div>
        </div>
    );
};

export default Cart;