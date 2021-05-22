//toast link : https://www.npmjs.com/package/react-toastify 
            
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";
import * as emailjs from "emailjs-com";
import React, { useState } from "react";
import styles from "./contact.module.css";

const initialState = {
    name: "",   email: "",   message: "",};

    export default function Contact() 
    {const [formData, setFormData] = useState(initialState);

        //validation checks
const handleBlur = e => 
    {     if (e.target.name === "name" && !e.target.value.trim()) { return toast.error("Name is required");}
        if (e.target.name === "email" && !e.target.value.trim()) { return toast.error("Email is required");}
        if ( e.target.name === "email" &&!validator.isEmail(e.target.value.trim())) 
        {    return toast.error("Email is not valid");}
        if (e.target.name === "message" && !e.target.value)
         {    return toast.error("Message is required");}

        const newFormData = {   ...formData, [e.target.name]: e.target.value.trim(),};
        setFormData(newFormData);   };

    const handleChange = e => {  const newFormData = {  ...formData, [e.target.name]: e.target.value,};

        setFormData(newFormData);};
//send email w. options
        const sendEmail = (email, subject, message) => {
        let templateParams = { from_name: email,to_name: "AlexisRodriguez830@yahoo.com",
     subject: subject, message,  message_html: ` <p> ${message} </p>`,};
      //emailjs
            emailjs   .send(          "service_xkl8sfk",     "template_ecof9nj",
                templateParams,                "user_5OHoK1jze114OvpZI9jdD" )
         //then
                .then(result =>  {console.log(result.text);
                //succesful email:
                    toast.success(   "Email Recieved, I will get back to you soon.",{ autoClose: 6000 } );  })
            //else catch err
                    .catch(error => console.log(error));    };

    const handleSubmit = e => {  e.preventDefault();
if (!validator.isEmail(formData.email)) 
{return toast.error("Email is not valid");}
        sendEmail(
            formData.email, `New Email from ${formData.name}`, formData.message );
        toast.info("Sending your Message");
        setFormData(initialState);};

    return (   <div className={styles.formCard}>
            <h2 style={{ textAlign: "center" }}>Contact Me</h2>
<ToastContainer
                position="top-center"
                pauseOnFocusLoss={false}
                autoClose={4000}   />
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        placeholder="Your Name"
       value={formData.name}
                        id="name" name="name"
                        required     aria-required
                        onChange={handleChange} onBlur={handleBlur}/></div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input        placeholder="Your Email"     value={formData.email}
                        id="email"     name="email"     required
                        aria-required  onBlur={handleBlur}onChange={handleChange}/> </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        placeholder=" Message Text"  name="message"
                        required    value={formData.message}
                        aria-required  id="message"    cols="40" rows="15"
                        onBlur={handleBlur}   onChange={handleChange}
                    ></textarea></div>
                <input type="submit" className={styles.button} />  </form> </div>);}
