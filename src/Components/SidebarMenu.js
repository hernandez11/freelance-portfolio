import React, { useState } from 'react';
import '../Styling/SidebarMenu.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData.js';

function SidebarMenu() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <div className='sidebarMenu'>
            <Link to='#' className='menu__bars'>
                <MenuIcon style={{ fontSize: 30 }} onClick={showSidebar}/>
            </Link>
            <img className='primary__logo' src='./Assets/primaryLogo__black.png' alt='' />
        </div>
        <div>
            <nav className={sidebar ? 'nav__menu active' : 'nav__menu'}>
                <ul className='nav__menu__items' onClick={showSidebar}>
                    <li className='navbar__toggle'>
                        <Link to='#' className='menu__bars'>
                            <CloseIcon style={{ fontSize: 30, color: "white" }} />
                        </Link>
                    </li>
                    <div className='sidebar__active__wrapper'>
                        <img className='primary__logo' src='./Assets/primaryLogo__white.png' alt='' />
                        <span>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link to={item.path}> <span>{item.title}</span> </Link>
                                    </li>
                                );
                            })}
                        </span>
                        <div className='sidebar__home__right'>
                            <a href='https://www.linkedin.com/in/angelhdzdiaz/' target="_blank" rel="noopener noreferrer">
                                <img className='right__icon' src='./Assets/linkedin__icon.png' alt='' />
                            </a>
                            <a href='https://www.instagram.com/joshua._.hdz/' target="_blank" rel="noopener noreferrer">
                                <img className='right__icon' src='./Assets/instagram__icon.png' alt='' />
                            </a>
                        </div>
                    </div>
                </ul>
            </nav>
            <div className={sidebar ? 'overlay active' : ''} onClick={showSidebar}/>            
        </div>
        </>
    )
}

export default SidebarMenu
