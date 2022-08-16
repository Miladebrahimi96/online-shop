import React, { useContext } from 'react';
import { Link } from "react-router-dom";

//styles
import style from "./Navbar.module.css";

//contexts
import { CartContext } from '../contexts/CartContextProvider';

//icons
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div className={style.mainContainer}>
            <div className={style.container}>
                <div className={style.linkContainer}>
                    <Link to="/products">Poducts</Link>
                    <Link to="/clothing">Clothing</Link>
                    <Link to="/jewelery">Jewelery</Link>
                    <Link to="/electronics">Electronics</Link>
                </div>
                <div className={style.iconContainer}>
                    <Link to="/Cart"><FiShoppingCart/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;