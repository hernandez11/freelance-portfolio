import React from 'react';
import { Link } from 'react-router-dom';
import '../Styling/About.css';
import styled from 'styled-components'
import StyledButton from '../Components/Button.js';
import Reviews from '../Components/Reveiws.js';
import ImageCard from '../Components/ImageCard.js';

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
const CTA__line = styled.hr`
    color: rgba(0, 0, 0, 0.65);
    width: 50%;
`;

return (
    <div className='about'>
        <span className='about__heroText'>
            <p className='dark-small__text'>ANGEL</p>
            <h2 className='dark-large__text'>FREELANCE WEB DEVELOPER</h2>
            <p className='dark-small__text'>BASED IN ARIZONA</p>
        </span>
{/* HERO SECTION */}
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
                    AandFWebDev@gmail.com</p>
                </span>
            </div>
            {/* CENTER HERO SECTION */}
            <div className='hero__center'>
                <img className='hero__center__img' src='./Assets/home__img.png' alt='' />
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
        
{/* CTA SECTION */}
    <div className='cta__widget'>
        <span>
        <CTA__line />
        <h3 className='light-large__text widget__title'>Let's take your<br />business to the next<br />level!</h3>
        </span>
        <StyledButton link='/contact' title='LETS TALK' />
    </div>
    <div className='cta__wrapper'>
        <h3 className='cta__title'>WHY<br/>CHOOSE<br/>A&F WEB DEV</h3>
        <img className='cta__img' src='../Assets/cta__img.png' alt='' />
        <span className='cta__text__wrapper'>
            <p className='dark-small__text'>We never use template-based editors like WordPress. 
            Instead, we custom code each section of your website to improve performance.</p>
            <br/>
            <p className='dark-small__text'>Our mission is to help your business grow & stand out from your competitors.</p>
        </span>
    </div>
    
{/* LATEST WORK SECTION */}
        <Line />
        <p className='dark-large__text extra-large'>LATEST WORK</p>
        <div className='card__container'>
            <ImageCard image='../Assets/latest_work_1.jpg' link='https://af-web-dev-interior-design.web.app'/>
            <ImageCard image='../Assets/latest_work_2.jpg' link='https://af-web-dev-real-estate.web.app'/>
            <ImageCard image='../Assets/latest_work_3.jpg' link='https://avivamientojuvenilarizona.com'/>
        </div>
        
{/* REVIEWS SECTION */}
        <Line />
        <Reviews />
{/* CONTACT CTA */}
        <div className='contact__link__container'>
            <Link to ='/contact' className='contact__link'>
                <p className='dark-large__text extra-large'>LETS TALK BUSINESS</p>
            </Link>
            <img className='rotate' src='./Assets/L-circleText.png' alt='' />
        </div>
    </div>
)
}

export default About
