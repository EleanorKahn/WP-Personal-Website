import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialIconList from './SocialIconList';

const Footer = () => {
    return (
        <footer className='footer'>
            <ul className='horizontal footer-navigation'>
                <li>
                    <NavLink className='nav-link footer-nav-link' to="/">Home</NavLink>
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
            <div id='social-holder'>
                <SocialIconList />
            </div>
        </footer>
    );
};

export default Footer;