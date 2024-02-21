import React from 'react'
import './ContactForm.css'
import { useForm } from "react-hook-form"


const ContactForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        // await contactData(data);
    };

    return (
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
                        <input type="text-area" {...register('message', { required: true })} />
                    </div>
                    <input className="contact-button" type="submit" value="SEND" />
                </form>
            </div>
        </main>
)
}

export default ContactForm;
