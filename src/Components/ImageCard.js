import React from 'react';
import '../Styling/ImageCard.css';

function ImageCard({image, link}) {
  return (
    <div className='card'>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img className='card__image' src={image} alt='' />
      </a>
    </div>
  )
}

export default ImageCard