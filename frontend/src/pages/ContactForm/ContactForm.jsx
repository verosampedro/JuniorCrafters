import React from 'react';
import './ContactForm.css';
import { useForm } from "react-hook-form";
import contact from "../../assets/images/contact_bg.png";

const ContactForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const contactData = async (newData) => {
        try {
            const response = await fetch(`http://localhost:8080/contact`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newData),
            });
            if (response.ok) {
                return { success: true };
            } else {
                return { success: false, error: 'Failed to submit contact form.' };
            }
        } catch (error) {
            return { success: false, error: 'Failed to connect to server.' };
        }
    };

    const onSubmit = async (data) => {
        const { success, error } = await contactData(data);

        if (success) {
            alert('Contact form submitted successfully!');
            reset();
        } else {
            alert(error);
        }
    };

    return (
        <section className="box-contact">
            <main className="form-container">
                <div className="contact-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>CONTACT</h2>
                        <div>
                            <label>Name</label>
                            <input type="text" {...register('name', { required: true, maxLength: 40 })} />
                            {errors.name?.type === 'required' && <p className="error-message">Name field is required.</p>}
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" {...register('email', {
                                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                required: true,
                            })} />
                            {errors.email?.type === 'required' && <p className="error-message">Email field is required.</p>}
                        </div>
                        <div>
                        <label>Message</label>
                            <input className="message-input" type="text" {...register('message', { required: true })} />
                            {errors.message?.type === 'required' && <p className="error-message">Messge field is required.</p>}
                        </div>
                        <input className="contact-button" type="submit" value="SEND" />
                    </form>
                </div>
            </main>
            <img src={contact} alt="" className="contact-image" />
        </section>
    );
}

export default ContactForm;
