import React from 'react';
import '../Styling/Button.css';

function Button({ title, link }) {
    return (
        <div className='button1'>
            <a href={link}>
            <button> {title}</button>
            </a>
        </div>
    )
}

export default Button
