// src/Navbar.js
import React from 'react';

const Navbar = () => (
    <nav style={{ background: '#333', color: '#fff', padding: '1rem' }}>
        <a href="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</a>
        <a href="/about" style={{ color: '#fff', marginRight: '1rem' }}>About</a>
        <a href="/contact" style={{ color: '#fff' }}>Contact</a>
    </nav>
);

export default Navbar;
