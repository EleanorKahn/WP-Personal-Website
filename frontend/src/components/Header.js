import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavbarBrand, Collapse, NavbarToggler } from "reactstrap";

const Header = () => {
    const [menuOpen, setmenuOpen] = useState(true);
    const toggleNavbar = () => setmenuOpen(!menuOpen);

    return (
        <div className="header">

                <Navbar className="nav " id="nav" expand="md" style={{}}>

                    <NavbarBrand href="/">
                        <h1 className='header-icon'>
                            <NavLink className='nav-link' to="/">&lt;<span className=''>EK</span>/&gt;</NavLink>
                        </h1>
                    </NavbarBrand>
                    <NavbarToggler onClick={() => toggleNavbar()}/>
                    <Collapse isOpen={!menuOpen} navbar>
                        <Nav className="horizontal navigation-menu" navbar>
                            <NavLink className='nav-link' to="/">Home</NavLink>

                            <NavLink className='nav-link' to="/about">About Me</NavLink>

                            <NavLink className="nav-link" to="/">My Work</NavLink>

                            <NavLink className="nav-link" to="/">Get in Touch</NavLink>
                        </Nav>
                    </Collapse>
                </Navbar>
        </div>
    );
};

export default Header;