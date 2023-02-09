import {Link} from 'react-router-dom';
import React from 'react';
import '../styles/nav.css'

const Navbar = () => {
    return (
        <nav>
            <Link to="/">GitHub User</Link>
            <Link to="/colour">Colour Toggle</Link> 
        </nav>
    );
}

export default Navbar;