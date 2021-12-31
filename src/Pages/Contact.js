import React from 'react';
import '../Styling/Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
    function HandleSubmit(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_btpqiei', 'template_2dv0fyh', e.target, 'user_VqB97g7ee60J4wAdbqLjK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (
    <>
        <div className='contact__container'>
            <div className='contact__sidebox'>
                <span className='sidebox__title'>
                    <h2>CONTACT INFO</h2>  
                    <p>A&F WEB DEV</p>
                    <p>FREELANCE WEB DEVELOPER</p>
                </span>
                <span className='sidebox__contact'>
                    <h3>CONTACT</h3>
                    <p>PHX, AZ</p>
                    <p>(480) 698 - 0201</p>
                    <p>Ahernandez11diaz@gmail.com</p>
                </span>
                <div className='sidebox__icons'>
                    <a href='https://www.linkedin.com/in/angelhdzdiaz/' target="_blank" rel="noopener noreferrer" >
                        <img className='navbar__icon' src='./Assets/linkedin__icon.png' alt='' />
                    </a>
                    <a href='https://www.instagram.com/joshua._.hdz/' target="_blank" rel="noopener noreferrer" >
                        <img className='navbar__icon' src='./Assets/instagram__icon.png' alt='' />
                    </a>
                    <a href='mailto:ahernandez11diaz@gmail.com' >
                        <img className='navbar__icon' src='./Assets/gmail__icon.png' alt='' />
                    </a>
                </div>
            </div>

            <div className='form__container'>
                <form className='form__wrapper' onSubmit={HandleSubmit}>
                    <span className='form__row'>
                        <span className='row__item'>
                            <label>*FIRST NAME.</label>
                            <input type='text' required name='fName' />
                        </span>
                        <span className='row__item'>
                            <label>*LAST NAME.</label>
                            <input type='text' required name='lName' />
                        </span>
                    </span>
                    <span className='form__row'>
                        <span className='row__item'>
                            <label>*EMAIL.</label>
                            <input type='text' required name='email' />
                        </span>
                        <span className='row__item'>
                            <label>*PHONE.</label>
                            <input type='text'required name='phone'/>
                        </span>
                    </span>
                    <span className='form__checbox__row'>
                        <label>WHAT KIND OF WEBSITE DO YOU NEED.</label>
                        <div className='checkbox__wrapper'>
                            <span className='checkbox__item'>
                                <input type='checkbox' name='siteClass00' />
                                <label>SINGLE PAGE</label>
                            </span>
                            <span className='checkbox__item'>
                                <input type='checkbox' name='siteClass01' />
                                <label>ECOMERCE</label>
                            </span>
                            <span className='checkbox__item'>
                                <input type='checkbox' name='siteClass02' />
                                <label>STATIC</label>
                            </span>
                            <span className='checkbox__item'>
                                <input type='checkbox' name='siteClass03' />
                                <label>I DONT KNOW</label>
                            </span>
                        </div>
                    </span>
                    <span className='form__row'>
                        <span className='row__item'>
                            <label>LEAVE A MESSAGE</label>
                            <textarea name='moreInfo' />
                        </span>                    </span>
                    <span className='form__row'>
                        <span className='row__item'>
                            <button>SUBMIT</button>
                        </span>
                    </span>
                    <p className='scheduleLink'>Prefer to schedule a meeting? <a href='https://calendly.com/a-f-web-dev-consultation/a-f-web-dev-initial-consultation?month=2021-12' target='_blank' rel='noopener noreferrer'>CLICK HERE</a></p>
                </form>
            </div>
        </div>
    </>
    )
}

export default Contact
