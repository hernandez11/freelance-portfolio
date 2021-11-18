import React from 'react';
import '../Styling/Contact.css';

function Contact() {
    return (
    <>
        <div className='contact__container'>
            <div className='contact__sidebox'>
                <span className='sidebox__title'>
                    <h2>CONTACT INFO</h2>  
                    <p>ANGEL DEV</p>
                    <p>FREELANCE WEB DEV</p>
                </span>
                <span className='sidebox__contact'>
                    <h3>CONTACT</h3>
                    <p>PHX, AZ</p>
                    <p>(480) 698 - 0201</p>
                    <p>Ahernandez11diaz@gmail.com</p>
                </span>
                <div className='sidebox__icons'>
                    <a href='https://www.linkedin.com/in/angelhdzdiaz/' target="_blank" rel="noopener noreferrer" >
                        <img className='navbar__icon'
                        src='./Assets/linkedin__icon.png'
                        alt='' />
                    </a>
                    <a href='https://www.instagram.com/joshua._.hdz/' target="_blank" rel="noopener noreferrer" >
                        <img className='navbar__icon'
                        src='./Assets/instagram__icon.png'
                        alt='' />
                    </a>
                    <a href='mailto:ahernandez11diaz@gmail.com' >
                        <img className='navbar__icon'
                        src='./Assets/gmail__icon.png'
                        alt='' />
                    </a>
                </div>
            </div>

            <div className='form__container'>
                {/* form */}
            </div>
        </div>
    </>
    )
}

export default Contact
