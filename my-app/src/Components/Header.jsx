import React from 'react';
import Logo from './Logo';

const Header = () => {
    return (
        <div className='header'>
            <Logo/>
            <h1 className='title'>HRnet</h1>
            <p>DarkMode?</p>
        </div>
    );
};

export default Header;