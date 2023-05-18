import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <h1>
                    <NavLink className='nav-link' to="/">EK</NavLink>
                </h1>
                <ul className='horizontal'>
                    <li>
                        <NavLink className='nav-link' to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to="/about">About Me</NavLink>
                    </li>
                    <li className='coming-soon'>My Work</li>
                    <li className='coming-soon'>Get in Touch</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;