import React, { useContext } from 'react';
import { Link } from "react-router-dom";

//contexts
import { CartContext } from '../contexts/CartContextProvider';

//icons
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {

    const {state} = useContext(CartContext);

    return (
        <div>
            <div>
                <Link to="/products">Poducts</Link>
            </div>
            <div>
                <Link to="/Cart"><FiShoppingCart/></Link>
                <span>{state.itemsCounter}</span>
            </div>
        </div>
    );
};

export default Navbar;