import React, { useState } from 'react';
import './Contact.css';
import { validateEmail } from '../../utils/helpers';

function Contact () {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = e => {
        e.preventDefault();
        if (!errorMessage) {
          console.log('Submit Form', formState);
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
      };

    return(
        <section id="contact" className="contact">
            <form onSubmit={handleSubmit}>
                <label for="name">Your Name</label>
                <input type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
                <label for="email">Your Email Address</label>
                <input type="text" name="email" defaultValue={email} onBlur={handleChange}></input>
                <label for="message">Enter a message</label>
                <input type="text" name="message" defaultValue={message} onblur={handleChange}></input>
                {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>)}
                <button type="submit">Submit</button>
            </form>
        </section>
    )

}

export default Contact;

// WHEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address