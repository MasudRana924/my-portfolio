import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../Images/logo.jpg'

import './Header.css'
const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed="top"  expand="lg" className="nav-section">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} className="logo" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-white" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-5 ">
                            <Nav.Link as={HashLink} to="/home#home" className="nav-text text-white ps-3">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#pojects" className="text-white ps-3">Projects</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services" className="text-white ps-3">Services</Nav.Link>
                            <Nav.Link as={HashLink}  to="/blog" className="text-white ps-3">Blog</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#about" className="text-white ps-3">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#contact" className="text-white ps-3">Contact</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;