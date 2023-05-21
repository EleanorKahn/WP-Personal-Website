import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
//import { Navbar, Nav, NavbarBrand, Collapse, NavbarToggler, NavItem,  } from "reactstrap";

const Header = () => {
    
    // const [collapsed, setCollapsed] = useState(false);

    // const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div className="header">
            <nav>
                <h1 className='header-icon'>
                    <NavLink className='nav-link' to="/">&lt;<span className=''>EK</span>/&gt;</NavLink>
                </h1>
                <ul className='horizontal navigation-menu'>
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