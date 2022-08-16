import React, { useContext } from 'react';

//styles
import style from "./Cart.module.css";

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
        <div className={style.container}>
            <img className={style.productImage} src={image} alt="product_image" />
            <div className={style.data}>
                <h3>{shorter(title)}</h3>
                <p>${price}</p>
            </div>
            <div>
                <span className={style.quantity}>{quantity}</span>
            </div>
            <div className={style.buttonContainer}>
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