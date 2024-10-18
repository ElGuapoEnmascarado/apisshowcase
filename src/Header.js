import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <Link to="/poke">Poke API</Link> |
            <Link to="/cat-facts">Cat Facts</Link> |
            <Link to="/country">Países</Link>
        </nav>
    );
}

export default Header;
