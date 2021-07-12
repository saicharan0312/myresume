import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Navbar extends Component {
    render() {
        return (
            <>
            <nav className="Light-blue darken-4">
                <div className="container">
                    <div className="nav-wrapper">
                        <Link to='/' className='brand-logo'>
                            CV
                        </Link>
                        <Link to='/' data-target="side-nav" className="sidenav-trigger">
                            <i className="material-icons"></i>
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Link to="/">
                                    <i className="fas fa-home">Home</i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </>
        )
    }
}

export default Navbar;