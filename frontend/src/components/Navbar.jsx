import React from 'react';
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div className='main-container-navbar'>
            <h2 className="navbar-logo">SHALIMAR</h2>
            <ul className="navbar-list">
                <li className="navbar-list-item">ABOUT</li>
                <li className="navbar-list-item">SERVICES</li>
                <li className="navbar-list-item">CONTACTS</li>
            </ul>
            <button className='main-container-navbar-button'>Login</button>
            <div className="navbar-hamburger"></div>
        </div>
    )
}

export default Navbar;