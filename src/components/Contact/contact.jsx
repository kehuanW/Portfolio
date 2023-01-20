import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useToasts } from 'react-toast-notifications';
import './contact.css';
// import Phone from '../../img/phone.png';
// import Email from '../../img/email.png';
// import Address from '../../img/address.png';


const Contact = () => {
    const formRef = useRef();
    const { addToast } = useToasts();

    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

    // console.log(SERVICE_ID);

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(
                (result) => {
                    console.log(result.text);
                    addToast('Sent Successfully. Thanks!', { appearance: 'success' });
                },
                (error) => {
                    console.log(error.text);
                    addToast('Something wrong. Please try again!', { appearance: 'error' });
                }
            );
    };

    return (
        <div className="c">
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">CONTACT INFO</h1>
                    <div className='c-underline'></div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src="/img/phone.png" alt="" className="c-icon" />
                            <p className='c-info-item-text'>+61 420-425-315</p>
                        </div>
                        <div className="c-info-item">
                            <img src="/img/email.png" className="c-icon" alt="" />
                            <p className='c-info-item-text'>kehuanwang123@gmail.com</p>
                        </div>
                        <div className="c-info-item">
                            <img src="/img/address.png" className="c-icon" alt="" />
                            <p className='c-info-item-text'>Adelaide, SA, 5000</p>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <h1 className="c-title">CONTACT ME</h1>
                    <div className='c-underline'></div>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your Name" name="user_name" className="c-form-imput" required />
                        <input type="text" placeholder="Subject" name="user_subject" className="c-form-imput" required />
                        <input type="email" placeholder="Your Email" name="user_email" className="c-form-imput" required />
                        <textarea rows="5" placeholder="Message" className="c-form-imput" name="message" required />
                        <button className='c-button'>Submit</button>
                        {/* {done && "Thank you..."} */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
