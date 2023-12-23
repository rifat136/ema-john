import React from 'react';
import './Header.css'
import '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header-section'>
            
        <img src="/src/images/Logo.svg" alt="" />
        <div>
            <a href="/Shop">Shop</a>
            <a href="/Order">Order</a>
            <a href="/Inventory">Inventory</a>
            <a href="/Login">Login</a>
        </div>
    </nav>
    );
};

export default Header;