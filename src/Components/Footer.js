import React from 'react';
import '../Styling/Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <p>AANDFWEBDEV@GMAIL.COM</p>
            <p>(480) 698-0201</p>
            <p>&#169; 2021-2022 A&F WEB-DEV | ALL RIGHTS RESERVED</p>

            <img className='footer__bg' src='../Assets/footer__bg.png' alt='' />
        </div>
    )
}

export default Footer