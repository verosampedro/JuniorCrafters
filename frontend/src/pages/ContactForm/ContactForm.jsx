import React from 'react'
import './ContactForm.css'
import { useForm } from "react-hook-form"
import contact from  "../../assets/images/contact_bg.png";


const ContactForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        // await contactData(data);
    };

    return (
        <section className="box-contact">
            <main className="form-container">
                <div className="contact-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>CONTACT US</h2>
                        <div>
                            <label>Name</label>
                            <input type="text" {...register('name', { required: true, maxLength:  40 })} />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" {...register('email', { required: true })} />
                        </div>
                        <div>
                            <label>Message</label>
                            <input className="message-input" type="text" {...register('message', { required: true })} />
                        </div>
                        <input className="contact-button" type="submit" value="SEND" />
                    </form>
                </div>
            </main>
            <img src={contact} alt="" className="contact-image"/>
        </section>
)
}

export default ContactForm;
