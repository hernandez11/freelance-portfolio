import React from 'react';
import { Link } from 'react-router-dom';
import '../Styling/About.css';
import styled from 'styled-components'
import Styled__Button from '../Components/Button.js';
import ToolboxItem from '../Components/ToolboxItem';
import Reviews from '../Components/Reveiws.js';
import Timeline from '../Components/Timeline.js';

function About() {

    const Line = styled.hr`
        color: rgba(0, 0, 0, 0.65);
        width: 90%;
        margin: 20px 0;
        
        @media only screen and (max-width: 768px){
            width: 70%
        }

        @media only screen and (max-width: 480px){
            margin: 15% 0;
        }
    `;

    return (
        <div className='about'>
            <p className='dark-small__text'>ANGEL</p>
            <h2 className='dark-large__text'>FREELANCE WEB DEVELOPER</h2>
            <p className='dark-small__text'>BASED IN ARIZONA</p>

            <div className='about__hero__wrapper'>
    {/* LEFT HERO SECTION */}
                <div className='hero__start'>
                    <span>
                        <p className='light-large__text'>SERVICES</p>
                        <p className='light-small__text'>Web design & development<br/>
                        Mobile application development</p>
                        <p className='light-large__text'>BIOGRAPHY</p>
                        <p className='light-small__text'>Web/mobile development is my passion.<br/>
                        Helping businesses grow is my mission.<br/>
                        HTML, CSS, & JavaScript are my tools.</p>
                        <p className='light-large__text'>CONTACT</p>
                        <p className='light-small__text'>PHX, AZ<br/>
                        (480) 698-0201<br/>
                        Ahernandez11diaz@gmail.com</p>
                    </span>
                </div>
    {/* CENTER HERO SECTION */}
                <div className='hero__center'>
                    <img className='hero__center__img'
                    src='./Assets/home__img.png'
                    alt='' />
                </div>
    {/* RIGHT HERO SECTION */}
                <div className='hero__end'>
                    <span>
                    <p className='light-large__text'>Years of Experience</p>
                    <p className='light-small__text extra-large'>4</p>
                    </span>
                    <span>
                    <p className='light-large__text'>Satisfaction Rate</p>
                    <p className='light-small__text extra-large'>100%</p>
                    </span>
                    <span>
                    <p className='light-large__text'>Level of Education</p>
                    <p className='light-small__text extra-large'>AS.</p>
                    </span>
                </div>
            </div>

            <Line />
{/* MY TOOLS SECTION */}
                <p className='dark-large__text'>MY TOOLS</p>
                <div className='toolbox__container'>
                <div className='toolboxItem__wrapper'>
                    <ToolboxItem 
                    image='./Assets/figma-logo.pdf'
                    title='Figma'/>
                    <ToolboxItem 
                    image='./Assets/react-logo.pdf'
                    title='React'/>
                    <ToolboxItem 
                    image='./Assets/js-logo.pdf'
                    title='JavaScript'/>
                    <ToolboxItem 
                    image='./Assets/css3-logo.pdf'
                    title='CSS'/>
                    <ToolboxItem 
                    image='./Assets/html-logo.pdf'
                    title='HTML'/>
                    <ToolboxItem 
                    image='./Assets/firebase-logo.pdf'
                    title='Firebase'/>
                    <ToolboxItem 
                    image='./Assets/aws-logo.pdf'
                    title='AWS'/>
                </div>
                </div>
            
            <Line />
{/* LATEST WORK SECTION */}
            <p className='dark-large__text'>LATEST WORK</p>
            <Timeline />
            <Link to ='/latest-work'>
                <Styled__Button title='VIEW MORE' />
            </Link>
            
{/* REVIEWS SECTION */}
            <Line />
            <Reviews />
            <Line />
            
            <div className='contact__link__container'>
                <Link to ='/contact' className='contact__link'>
                    <p className='dark-large__text extra-large'>LETS TALK BUSINESS</p>
                </Link>

                <img className='rotate'
                src='./Assets/L-circleText.png'
                alt='' />
            </div>
            <Line />
        </div>
    )
}

export default About
