import React from 'react';
import '../Styling/ToolboxItem.css';

function ToolboxItem({image, title}) {
    return (
        <div className='toolbox__wrapper'>
            <div className='item__container'>
                <img className='item__img'
                src={image}
                alt='' />
            </div>
            <p className='item__text'>{title}</p>
        </div>
    )
}

export default ToolboxItem
