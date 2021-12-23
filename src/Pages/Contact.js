import React from 'react';
import '../Styling/Contact.css';
// import emailjs from 'emailjs-com';

function Contact() {
    // function HandleSubmit(e) {
    //     e.preventDefault();
    
    //     emailjs.sendForm('service_3lzam5b', 'template_0xgdkbx', e.target, 'user_SxL2iCYQnlhXoy6kNPrTr')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //       e.target.reset()
    // }

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
                <form className='form__wrapper'>
                {/* <form className='form__wrapper' onSubmit={HandleSubmit}/> */}
                    <span className='form__row'>
                        <span className='row__item'>
                            <label>*FIRST NAME.</label>
                            <input
                                type='text'
                                required
                                name='f-name'
                            />
                        </span>
                        <span className='row__item'>
                            <label>*LAST NAME.</label>
                            <input
                                type='text'
                                required
                                name='l-name'
                            />
                        </span>
                    </span>
                    <span className='form__row'>
                        <span className='row__item'>
                            <label>*EMAIL.</label>
                            <input
                                type='text'
                                required
                                name='email'
                            />
                        </span>
                        <span className='row__item'>
                            <label>*PHONE.</label>
                            <input
                                type='text'
                                required
                                name='email'
                            />
                        </span>
                    </span>
                    <span className='form__checbox__row'>
                        {/* <span className='row__item'> */}
                            <label>WHAT KIND OF WEBSITE DO YOU NEED.</label>
                            <div className='checkbox__wrapper'>
                                <span className='checkbox__item'>
                                    <input 
                                        type='checkbox'
                                        name='interestOption'
                                    />
                                    <label>SINGLE PAGE</label>
                                </span>
                                <span className='checkbox__item'>
                                    <input 
                                        type='checkbox'
                                        name='interestOption'
                                    />
                                    <label>ECOMERCE</label>
                                </span>
                                <span className='checkbox__item'>
                                    <input 
                                        type='checkbox'
                                        name='interestOption'
                                    />
                                    <label>STATIC</label>
                                </span>
                                <span className='checkbox__item'>
                                    <input 
                                        type='checkbox'
                                        name='interestOption'
                                    />
                                    <label>I DONT KNOW</label>
                                </span>
                            </div>
                        {/* </span> */}
                    </span>
                    <span className='form__row'>
                        <span className='row__item'>
                            <label>LEAVE A MESSAGE</label>
                            <textarea 
                            name='bestContact'
                            />
                        </span>                    </span>
                    <span className='form__row'>
                        <span className='row__item'>
                            <button>SUBMIT</button>
                        </span>
                    </span>
                </form>
            </div>
        </div>
    </>
    )
}

export default Contact
