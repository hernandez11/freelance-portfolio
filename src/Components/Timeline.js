import React from 'react';
import '../Styling/Timeline.css';
import TimelineData from './TimelineData.js';
import TimelineItem from './TimelineItem.js';

const Timeline = () => 
    TimelineData.length > 0 && (
        <div className='timeline__container'>
            {TimelineData.map((TimelineData, idx) => (
                <TimelineItem TimelineData={TimelineData} key={idx} />
            ))}
        </div>
)

export default Timeline;
