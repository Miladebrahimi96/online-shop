import React, { useContext } from 'react';
import { Link } from "react-router-dom";

//contexts
import { CartContext } from '../contexts/CartContextProvider';

//icons
import { FiShoppingCart } from "react-icons/fi";



//styles
import style from "./Navbar.module.css";
import styled from 'styled-components';

const Div = styled.div `
    @media (max-width: 768px) {
        transition: all .3s linear;
        transform: ${props => props.menu ? "translateX(0)" : "translateX(-250px)"};
    }
`


const Navbar = ({menu}) => {

    const {state} = useContext(CartContext);

    return (
        <div className={style.mainContainer}>
            <div className={style.container}>
                <Div menu={menu} className={style.linkContainer}>
                    <Link to="/products">Products</Link>
                    <Link to="/clothing">Clothing</Link>
                    <Link to="/jewelery">Jewelery</Link>
                    <Link to="/electronics">Electronics</Link>
                </Div>
                <div className={style.iconContainer}>
                    <Link to="/Cart"><FiShoppingCart/></Link>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;