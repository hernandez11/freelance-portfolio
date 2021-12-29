import React from 'react';
import SidebarMenu from '../Components/SidebarMenu';
import StyledButton from '../Components/Button.js';
import '../Styling/Home.css';

function Home() {
    return (
    <>
    <SidebarMenu />

    <div className='home'>
        <div className='home__left'>
            <span>
                <h1 className='left__title'>Freelance <br/> Web Developer</h1>
                <p className='left__description'>We develop websites using modern frameworks, libraries <br/>and up-to-date technologies...
                That’s mumbo Jumbo for <br/>FAST, USER FRIENDLY, AND RELIABLE.</p>
                <StyledButton link='/contact' title='HIRE ME' />
            </span>
        </div>

        <div className='home__center'>
            <img src='./Assets/home__img.png'alt='' />
            <img className='circle__img' src='./Assets/circleText.png'alt='' />
            <span className='center__title'>
                <h3>A&F</h3>
                <h2>WEB DEV</h2>
            </span>
        </div>

        <div className='home__right'>
            <a href='https://www.linkedin.com/in/angelhdzdiaz/' target="_blank" rel="noopener noreferrer">
                <img className='right__icon' src='./Assets/linkedin__icon.png' alt='' />
            </a>
            <a href='https://www.instagram.com/joshua._.hdz/' target="_blank" rel="noopener noreferrer">
                <img className='right__icon' src='./Assets/instagram__icon.png' alt='' />
            </a>
            <a href='mailto:ahernandez11diaz@gmail.com'>
                <img className='right__icon' src='./Assets/gmail__icon.png' alt='' />
            </a>
        </div>
    </div>
    </>
    )
}

export default Home
