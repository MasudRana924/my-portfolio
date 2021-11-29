import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
                            <Nav.Link href="/home#home" className="nav-text text-white ps-3">Home</Nav.Link>
                            <Nav.Link  href="/home#pojects" className="text-white ps-3">Projects</Nav.Link>
                            <Nav.Link  href="/home#about" className="text-white ps-3">About</Nav.Link>
                            <Nav.Link  href="/home#contact" className="text-white ps-3">Contact</Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;