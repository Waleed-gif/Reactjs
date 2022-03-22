import React from "react";
import { link } from 'react-router-dom';

const Menu = () => {
    return (
        <>
            <link to='/'>About Us</link>
            <link to='/about'>Contact</link>
        </>
    );
}
 
export default Menu;