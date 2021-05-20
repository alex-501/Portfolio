import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';



//contact for with err message
///////////////////////////////////
function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
  
  const { name, email, message } = formState;
  
  
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    
    setErrorMessage('');
    if (!e.target.value.length) 
    {
    
      setErrorMessage(`${e.target.name} is required.`);
    }
     else if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
    
      if (!isValid) {
        setErrorMessage('Your email is invalid.'); }}
    
        if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value }); }}
  
  function handleSubmit(e) 
  {  e.preventDefault();
    console.log(formState);}

  return (
   
   <section className="col-10" id="hello">
      <div className="hello-form">
        <div className="section-title">
          <h1>Hi!</h1>
        </div>

      
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input className="hello-fi" type="text" defaultValue={name} onMouseLeave={handleChange} name="name" /> </div>
          <div>      <label htmlFor="email">Email address:</label>

            <input className="hello-fi" type="email" defaultValue={email} name="email" onMouseLeave={handleChange} />          </div>

          <div>
            <label htmlFor="message">Message:</label>
            <textarea className="hello-fi" name="message" defaultValue={message} onMouseLeave={handleChange} rows="5" /> </div>
          {errorMessage && 
          (  <div>
              <p className="error-text">{errorMessage}</p>
            </div>          )}
          <button data-testid="button" type="submit">Submit</button> </form> </div>
    </section>



  )
}

export default ContactForm;