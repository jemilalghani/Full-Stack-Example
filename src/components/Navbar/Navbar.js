import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                Cool Couches Logo
            </div>
            <div className="bar">
                <Link to='/'>Home</Link>
            </div>
            <div className="bar">
                <Link to='/cool-couches'>Couches</Link>
            </div>
            <div className="bar">
                <Link to='/profile'>Profile</Link>
            </div>
            
        </div>
    );
};

export default Navbar;