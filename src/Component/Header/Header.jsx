import React from 'react';
import './Header.css'
import '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header-section'>
            
        <img src="/src/images/Logo.svg" alt="" />
        <div>
            <Link to="/">Shop</Link>
            <Link to="/order">Order</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
        </div>
    </nav>
    );
};

export default Header;