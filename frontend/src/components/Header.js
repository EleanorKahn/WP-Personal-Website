import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <h1>
                    <NavLink className='nav-link' to="/">&lt;<span className=''>EK</span>/&gt;</NavLink>
                </h1>
                <ul className='horizontal'>
                    <li>
                        <NavLink className='nav-link' to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav-link' to="/about">About Me</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/">My Work</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" to="/">Get in Touch</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;