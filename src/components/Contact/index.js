import React, { useState } from 'react';
import './Contact.css';
import { validateEmail } from '../../utils/helpers';

function Contact () {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
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
            <h2>Contact</h2>
            <form onSubmit={handleSubmit} className="container">
                <section className="row">
                  <section className="col-sm">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
                  </section>
                  <section className="col-sm">
                  <label htmlFor="email">Your Email Address</label>
                  <input type="text" name="email" defaultValue={email} onBlur={handleChange}></input>
                  </section>
                  <section className="col-sm">
                  <label htmlFor="message">Enter a message</label>
                  <input type="text" name="message" defaultValue={message} onBlur={handleChange}></input>
                  </section>
                </section>
                <section className="row justify-content-center">
                  {errorMessage && (
                  <div>
                  <p className="error-text">{errorMessage}</p>
                  </div>)}
                  <button type="submit">Submit</button>
                </section>
            </form>
        </section>
    )

}

export default Contact;