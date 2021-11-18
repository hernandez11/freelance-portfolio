import React from 'react';
import '../Styling/Button.css';

function Button({title}) {
    return (
        <div className='button1'>
            <button> {title}</button>
        </div>
    )
}

export default Button
