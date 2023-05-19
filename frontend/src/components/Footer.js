import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='horizontal'>
                <li>
                    <NavLink className='nav-link' to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className='nav-link' to="/about">About Me</NavLink>
                </li>
                <li className='coming-soon'>
                    <NavLink className="nav-link" to="/mywork">My Work</NavLink>
                </li>
                <li className='coming-soon'>
                    <NavLink className="nav-link" to="/contact">Get in Touch</NavLink>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;