import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';

const Contact = () => {
    // const formRef = useRef();
    // const [done, setDone] = useState(false)

    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   emailjs
    //     .sendForm(
    //       "service_rrvnzco",
    //       "template_3v5nih4",
    //       formRef.current,
    //       "user_DrriDPTGKO2Zj4RDXCA6W"
    //     )
    //     .then(
    //       (result) => {
    //         console.log(result.text);
    //         setDone(true)
    //       },
    //       (error) => {
    //         console.log(error.text);
    //       }
    //     );
    // };

    return (
        <div className="c">
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">CONTACT INFO</h1>
                    <div className='underline' style={{ "marginLeft": "80px" }}></div>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            <p className='c-info-item-text'>+61 420-425-315</p>
                        </div>
                        <div className="c-info-item">
                            <img src={Email} className="c-icon" alt="" />
                            <p className='c-info-item-text'>kehuanwang123@gmail.com</p>
                        </div>
                        <div className="c-info-item">
                            <img src={Address} className="c-icon" alt="" />
                            <p className='c-info-item-text'>Adelaide, SA, 5000</p>
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <h1 className="c-title">CONTACT ME</h1>
                    <div className='underline' style={{ "marginLeft": "80px" }}></div>
                    <form>
                        <input type="text" placeholder="Name" name="user_name" style={{ "minWidth": "230px" }} />
                        <input type="text" placeholder="Subject" name="user_subject" style={{ "minWidth": "230px" }} />
                        <input type="text" placeholder="Email" name="user_email" style={{ "minWidth": "230px" }} />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button className='c-button'>Submit</button>
                        {/* {done && "Thank you..."} */}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
