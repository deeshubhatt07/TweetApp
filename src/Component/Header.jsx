import React from 'react';
import { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [userName, setUserName] = useState(null);

    const isLoggedIn = (userName) ? 'LogOut' : 'Login / Register';

    return (
        <Navbar className="navbar" bg="light" expand="lg">
            <div className='appLogo'>
                <Navbar.Brand href="#home"><p>Tweet App</p></Navbar.Brand>
            </div>
            {userName ?
                <div className="linkIvond">
                    (<div className='m-3'><Link to="/" className='text-decoration-none text-black'>Home</Link></div>
                    <div className='m-3'><Link to="/about" className='text-decoration-none text-black'>About</Link></div>
                    <div className='m-3'><Link to="/tweets" className='text-decoration-none text-black'>Tweets</Link></div>)
                    <div className='m-3'><Link to="/" className='text-decoration-none text-black'>{isLoggedIn}</Link></div>
                </div>
                : (<div className="linkIvond">
                    <div className='m-3'><Link to="/" className='text-decoration-none text-black'>{isLoggedIn}</Link></div>
                </div>)}
        </Navbar>
    );
}

export default Header;
