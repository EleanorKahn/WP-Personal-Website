import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavbarBrand, Collapse, NavbarToggler, Container, Row, Col } from "reactstrap";

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
                            <Col className='md-2' md="4">
                            <NavLink className='nav-link' to="/">Home</NavLink>
                            </Col>
                            <Col className='md-2' md="4">
                            <NavLink className='nav-link' to="/about">About Me</NavLink>
                            </Col>
                            <Col className='md-2' md="4">
                            <NavLink className="nav-link" to="/">My Work</NavLink>
                            </Col>
                            <Col className='md-2' md="4">
                            <NavLink className="nav-link" to="/">Get in Touch</NavLink>
                            </Col>
                        </Nav>
                    </Collapse>
                </Navbar>
        </div>
    );
};

export default Header;