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
                <li id='social-holder'>
                    <ul id='social'>
                        <li><i className='fa fa-twitter fa-xl' /></li>
                        <li><i className='fa fa-instagram fa-xl' /></li>
                        <li><i className='fa fa-linkedin fa-xl'/></li>
                        <li><i className='fa fa-github fa-xl'/></li>
                    </ul>
                </li>
            </ul>
            
        </footer>
    );
};

export default Footer;