import React, { useState } from "react";
import styles from "./contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";
import * as emailjs from "emailjs-com";

const initialState = {
    name: "",
    email: "",
    message: "",
};
export default function Contact() {
    const [formData, setFormData] = useState(initialState);

    const handleBlur = e => {
        //Some validation checks

        if (e.target.name === "name" && !e.target.value.trim()) {
            return toast.error("Name is required");
        }

        if (e.target.name === "email" && !e.target.value.trim()) {
            return toast.error("Email is required");
        }

        if (
            e.target.name === "email" &&
            !validator.isEmail(e.target.value.trim())
        ) {
            return toast.error("Email is not valid");
        }

        if (e.target.name === "message" && !e.target.value) {
            return toast.error("Message is required");
        }

        //setting the state (formData)

        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value.trim(),
        };

        setFormData(newFormData);
    };

    const handleChange = e => {
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.value,
        };

        setFormData(newFormData);
    };

    //Function to use the EMAILJS library
    const sendEmail = (email, subject, message) => {
        //Email options
        let templateParams = {
            from_name: email,
            to_name: "jbeard1989.jb@gmail.com",
            subject: subject,
            message,
            message_html: `<p> ${message} </p>`,
        };

        //This is an important part, You will need to update Service_ID, Template_ID, User_ID according to your credentials,

        //You can get these credentials from (https://dashboard.emailjs.com/sign-up), SIgn up for a free account and the after you log in you will see the dashboard.

        //Then you can look at the left menu of dashboard for (Email Services, Email Templates), create one of each, try to select gmail for email services as that will be easier. they both will give you an ID somewhat similliar to the attached one. copy and replace them.

        //YOu can find your userID  from (https://dashboard.emailjs.com/admin/integration)

        emailjs
            .send(
                "service_xkl8sfk",
                "template_ecof9nj",
                templateParams,
                "user_5OHoK1jze114OvpZI9jdD"
            )
            .then(result => {
                console.log(result.text);
                toast.success(
                    "We've recieved your message. Thank you soo much for connecting with us. we will contact you soon.",
                    { autoClose: 6000 }
                );
            })
            .catch(error => console.log(error));
    };

    const handleSubmit = e => {
        e.preventDefault();

        //Checking if the email is valid, Before submitting
        if (!validator.isEmail(formData.email)) {
            return toast.error("Email is not valid");
        }

        //Sending the Email Here
        sendEmail(
            formData.email,
            `New Email from ${formData.name}`,
            formData.message
        );
        //just a notification to keep the user updated
        toast.info("Sending your Message");

        //resetting the form data here
        setFormData(initialState);
    };

    return (
        <div className={styles.formCard}>
            <h2 style={{ textAlign: "center" }}>Contact Me</h2>
            <h4 style={{ textAlign: "center" }}>
                Have Questions? Let's talk!
            </h4>

            {/* For Reference: https://www.npmjs.com/package/react-toastify */}
            <ToastContainer
                position="top-center"
                pauseOnFocusLoss={false}
                autoClose={4000}
            />
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        placeholder="Please enter your Name"
                        value={formData.name}
                        id="name"
                        name="name"
                        required
                        aria-required
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        placeholder="Please enter your Email"
                        value={formData.email}
                        id="email"
                        name="email"
                        required
                        aria-required
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        placeholder="Please leave a detailed message"
                        name="message"
                        required
                        value={formData.message}
                        aria-required
                        id="message"
                        cols="30"
                        rows="10"
                        onBlur={handleBlur}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <input type="submit" className={styles.button} />
            </form>
        </div>
    );
}
