import React from 'react';
import '../Styling/Navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <Link to='/about' className='link'>
                    <span>ABOUT</span>
                </Link>
                <Link to='/latest-work' className='link'>
                    <span>LATEST WORK</span>
                </Link>
                <Link to='/contact' className='link'>
                    <span>HIRE ME</span>
                </Link>
            </div>
            <Link to='/' className='navbar__logo'>
                <img className='primary__logo' src='./Assets/primaryLogo__black.png' alt='' />
            </Link>
            <div className='navbar__icons__container'>
                <a href='https://www.linkedin.com/in/angelhdzdiaz/' target="_blank" rel="noopener noreferrer" >
                    <img className='navbar__icon' src='./Assets/linkedin__icon.png' alt='' />
                </a>
                <a href='https://www.instagram.com/joshua._.hdz/' target="_blank" rel="noopener noreferrer" >
                    <img className='navbar__icon' src='./Assets/instagram__icon.png' alt='' />
                </a>
                <a href='mailto:ahernandez11diaz@gmail.com' >
                    <img className='navbar__icon' src='./Assets/gmail__icon.png' alt='' />
                </a>
            </div>
        </div>
    )
}

export default Navbar
