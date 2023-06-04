import React from 'react';
import '../Styling/TimelineItem.css';

const TimelineItem = ({ TimelineData }) => (
    <>
    <div className='timeline__item'>
        <a href={TimelineData.pageLink}>
            <img className='timeline__image' src={TimelineData.image} alt='' />
            <p className='content__date__odd'>{TimelineData.text}</p>
        </a>
    </div>
    </>
);

export default TimelineItem;