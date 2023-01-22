import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <Navbar className="navbar" bg="light" expand="lg">
            <Navbar.Brand href="#home">My App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to="/" className='text-decoration-none text-black'>Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/about" className='text-decoration-none text-black'>About</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/contact" className='text-decoration-none text-black'>Contact</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
