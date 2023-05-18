import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='horizontal'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/about">About Me</NavLink>
                </li>
                <li>My Work</li>
                <li>Get in Touch</li>
            </ul>
        </footer>
    );
};

export default Footer;