import React from 'react';
import '.././CSS/Head.css';
import logo from '../images/Logo.svg'

const Header = () => {
    return (
        <div className='head'>
        
          <div className='ima'> <img src={logo} alt="" /></div>
          <div className='link'>
          <a href=""> About </a>
            <a href="">Contact</a>
            <a href="">Shop</a>
            <a href="">More</a>
          </div>
        </div>
    );
};

export default Header;