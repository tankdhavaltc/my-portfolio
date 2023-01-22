import React, { useState } from 'react'
import { toast } from 'react-toastify';
import Title from '../../Utilities/Title/Title';
import "./style.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        subject: "",
        message: "",
        added: new Date().toUTCString()
    })
    const handelSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fullname: "",
            email: "",
            subject: "",
            message: "",
        });
        toast.success("Your message has been send.");
    }

    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className='container'>
            <section id='contact'>
                <Title name="contact" />
                <p className="text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dicta voluptatem modi laborum deserunt! Adipisci enim magni quos temporibus amet sunt praesentium minus et ullam velit veniam quas autem deserunt animi, doloremque sint nam corporis sapiente mollitia in numquam voluptatem. Ipsam dolor at tenetur rem, atque mollitia! Quae, ratione beatae!</p>
                <div className="map-area">
                    <iframe
                        className='map-box'
                        title='my address'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14686.359289168326!2d72.55255662747741!3d23.03882805911551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f521640d4b%3A0x6853ee97a9a2996b!2sNavrangpura%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1674406942451!5m2!1sen!2sin"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="d-flex gap-5 contact-info-form">
                    <div className="contact">
                        <div className="contact-info">
                            <div className="icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="desc">
                                <b>Location: </b>
                                <span>Navrangpura, A'bad, Gujrat.</span>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="desc">
                                <b>Email: </b>
                                <a href="mailto:dhavaltank2001@gmail.com">dhavaltank2001@gmail.com</a>
                            </div>
                        </div>
                        <div className="contact-info">
                            <div className="icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="desc">
                                <b>Call: </b>
                                <a href="tel:919904924102">+91 99049 24102</a>
                            </div>
                        </div>
                    </div>
                    <div className="contact-form">
                        <form action="" method="post" onSubmit={handelSubmit}>
                            <div className="form-box">
                                <div className="form-grp d-flex gap-4 input-box">
                                    <input type="text" name="fullname" id="fullname" placeholder='Your fullname' required onChange={handelChange} value={formData?.fullname} />
                                    <input type="email" name="email" id="email" placeholder='Your email' required onChange={handelChange} value={formData?.email} />
                                </div>
                                <div className="form-grp">
                                    <input type="text" name="subject" id="subject" placeholder='Subject' required onChange={handelChange} value={formData?.subject} />
                                </div>
                                <div className="form-grp">
                                    <textarea name="message" id="message" cols="30" rows="5" placeholder='Message' required onChange={handelChange} value={formData?.message}></textarea>
                                </div>
                                <div className="form-grp">
                                    <button type="submit" className='link-btn'>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Contact;