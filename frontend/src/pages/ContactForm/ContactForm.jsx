import React from 'react'
import './ContactForm.css'
import { useForm } from "react-hook-form"
import contact from  "../../assets/images/contact_bg.png";


const ContactForm = () => {
    const { register, handleSubmit } = useForm();
    //const { register, formState: { errors }, handleSubmit, reset} = useForm(); 

    // const contactData = async (newData) => {
    //     const result = await fetch(`http://localhost:8080/contac`, {
    //         method: "POST",
    //         headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(newData),
    //     });

    const onSubmit = async (data) => {
        console.log(data);
        //  const { success, error } = await contactData(data);

        // if (success) {  
        //     alert('Contact form submitted successfully!');
        //     reset();
        // } else {
        //     alert(error);  
        // }
    };

    return (
        <section className="box-contact">
            <main className="form-container">
                <div className="contact-form">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>CONTACT</h2>
                        <div>
                            <label>Name</label>
                            <input type="text" {...register('name', { required: true, maxLength:  40 })} />
                            {/* {errors.name?.type === 'required' && <p className="error-message">Name field is required.</p>} */}
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="text" {...register('email', { 
                                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                                required: true,
                            })}/>
                            {/* {errors.email?.type === 'required' && <p className="error-message">Email field is required.</p>} */}
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
