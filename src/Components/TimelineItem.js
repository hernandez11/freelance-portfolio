import React from 'react';
import '../Styling/TimelineItem.css';

const TimelineItem = ({ TimelineData }) => (
    <div className='timeline__item'>
        {/* <p className='content__date__even'>{TimelineData.date}</p> */}
        <img className='timeline__image'
        src={TimelineData.image}
        alt='' />

        <div className='timeline__item__content'>
            <span className='content__title'>
                {TimelineData.title}
            </span>
            <span className='content__text'>
                {TimelineData.text}
            </span>
            <span className='circle'></span>
        </div>
        <p className='content__date__odd'>{TimelineData.date}</p>
    </div>
);

export default TimelineItem;