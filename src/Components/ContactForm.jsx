// ContactForm.js
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_so8zbmu', 'template_vdmvs8m', form.current, '1y2eDWYvjuZWADDZk')
            .then(
                () => {
                    toast.success('Message sent successfully!', {
                        position: "top-center"
                    });
                    setFormData({ user_name: '', user_email: '', message: '' }); // Clear form
                },
                (error) => {
                    toast.error('Failed to send message!', {
                        position: "top-center"
                    });
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div className='md:px-[12%] px-[4%]'>
            <ToastContainer />
            <form ref={form} onSubmit={sendEmail} className='flex flex-col pt-10 gap-6'>
                <input 
                    type="text" 
                    name="user_name" 
                    className='border outline-none py-1.5 px-2 rounded-md cursor-text'  // Add cursor-text here
                    placeholder='Name'
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="email" 
                    name="user_email" 
                    className='border outline-none py-1.5 px-2 rounded-md cursor-text'  // Add cursor-text here
                    placeholder='Email'
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                />
                <textarea 
                    name="message" 
                    placeholder='Message'
                    className='border outline-none py-1.5 px-2 rounded-md h-[150px] cursor-text'  // Add cursor-text here
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <input 
                    type="submit" 
                    value="Send" 
                    className='outline-none bg-purple-500 hover:bg-purple-600 text-white cursor-pointer py-2 px-10 rounded mt-3 md:w-[300px]'
                />
            </form>

        </div>
    )
}

export default ContactForm;
