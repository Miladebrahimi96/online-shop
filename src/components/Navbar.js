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
                <div>
                    <Link className={style.productLink} to="/products">Poducts</Link>
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