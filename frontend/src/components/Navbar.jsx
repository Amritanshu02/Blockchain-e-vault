import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <div className='main-container-navbar'>
            <h2 className="navbar-logo"><Link to="/">SHALIMAR</Link></h2>
            <ul className="navbar-list">
                <li className="navbar-list-item">ABOUT</li>
                <li className="navbar-list-item"><Link to="/upload">UPLOAD</Link></li>
                <li className="navbar-list-item">CONTACTS</li>
            </ul>
            <button className='main-container-navbar-button login'>Login</button>
            <button className='main-container-navbar-button signin'>Sign in</button>
            <div className="navbar-hamburger"></div>
        </div>
    )
}

export default Navbar;