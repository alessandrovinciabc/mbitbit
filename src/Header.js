import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" className="main-navbar">
                <Navbar.Brand className="navbar-logo text-primary">
                    <i className="far fa-laugh-beam navbar-logo--image"></i>
                    mbitbit
                </Navbar.Brand>
            </Navbar>
        );
    }
}

export default Header;