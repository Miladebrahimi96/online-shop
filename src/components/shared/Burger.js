import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Navbar from '../Navbar';

import styled from 'styled-components';

const Div = styled.div `
    width: 2rem;
    height: 2rem;
    position: fixed;
    top 20px;
    left:30px;
    z-index: 10;
    display: none;
    cursor: pointer;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-direction: column;
    }
    div {
        width: 2rem;
        height: .25rem;
        background: #1a73e8;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all .3s linear;
        &:nth-child(1) {
            transform: ${props => props.menu ? "rotate(45deg)" : "rotate(0)"}
        }
        &:nth-child(2) {
            transform: ${props => props.menu ? "translateX(-100%)" : "translateX(0)"};
            opacity: ${props => props.menu ? 0 : 1}
        }
        &:nth-child(3) {
            transform: ${props => props.menu ? "rotate(-45deg)" : "rotate(0)"}
        }
    }
`



const Burger = () => {

    const [menu, setMenu] = useState(false);

    return (
        <OutsideClickHandler onOutsideClick={() => setMenu(false)}>
            <Div menu={menu} onClick={() => setMenu(menu => !menu)}>
                <div></div>
                <div></div>
                <div></div>
            </Div>
            <Navbar menu={menu}/>
        </OutsideClickHandler>
    );
};

export default Burger;