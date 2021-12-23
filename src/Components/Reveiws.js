import React, { useState } from 'react';
import '../Styling/Reviews.css';
import styled from 'styled-components';
import Quotes from './Data.js';

function Reveiws() {
    const [ current, setCurrent ] = useState(Quotes[0])
    const [ active, setActive ] = useState(0)

    const handleSetClicked = (event) => {
        setCurrent(Quotes[event.target.getAttribute('data-quote')])
        setActive(event.target.getAttribute('data-quote'))
    }

    const Selector = styled.span`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        width: 20px;
        margin: 0 3px;
        cursor: pointer;
    
        &::before {
            content: ' ';
            height: 6px;
            width: 6px;
            background-color: #d4d4d4;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }

        :hover::before {
            background-color: #45454d;
        }

        &[data-quote="${active}"]::before {
            background-color: #45454d;
        }
    `;

    return (
        <div className='reviews__container'>
            <img className='quote__img' src='./Assets/quote__icon.png' alt='' />

            <div className='reviews'>
                <p>{current.quote}</p>
                <p>{current.client}</p>
                <div className='review__selector'>
                    {Object.keys(Quotes).map(index => (
                        <Selector
                            onClick={event => handleSetClicked(event)}
                            data-quote={index}
                            key={index}
                        />
                    ))}
                </div> 
            </div>

            <img className='quote__img' src='./Assets/quote__icon.png' alt='' />
        </div>
    )
}

export default Reveiws
