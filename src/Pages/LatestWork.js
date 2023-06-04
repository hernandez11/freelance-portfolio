import React from 'react';
import '../Styling/LatestWork.css';
import Timeline from '../Components/Timeline.js';

function LatestWork() {
    return (
        <div className='latestWork'>
            <p className='dark-large__text extra-large'>LATEST WORK</p>
            <Timeline />

            <div className='contact__link__container'>
                <div  className='contact__link'>
                    <p className='dark-large__text extra-large'>LETS TALK BUSINESS</p>
                </div>
                <img className='rotate' src='./Assets/L-circleText.png' alt='' />
            </div>

            <span className='about__heroText'>
                <p className='dark-small__text'>ANGEL</p>
                <h2 className='dark-large__text'>FREELANCE WEB DEVELOPER</h2>
                <p className='dark-small__text'>BASED IN ARIZONA</p>
            </span>
        </div>
    )
}

export default LatestWork
