import React, { useState } from 'react';
import './Contact.css';
import { validateEmail } from '../../utils/helpers';

function Contact() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
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

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <section className="container">
        <section className="row">
          <section className="col-4">
          <form onSubmit={handleSubmit} className="container">
            <section className="row">
            <section className="col-8">
                <label htmlFor="name">Your Name</label>
            </section>
            <section className="col-sm">  
                <input type="text" name="name" defaultValue={name} onBlur={handleChange}></input>
            </section>
            </section>
            <section className="row">
                <label htmlFor="email">Your Email Address</label>
                <input type="text" name="email" defaultValue={email} onBlur={handleChange}></input>
            </section>
            <section className="row">
                <label htmlFor="message">Enter a message</label>
                <input type="text" name="message" defaultValue={message} onBlur={handleChange}></input>
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
          <section className="col-sm justify-content-start">
          <section className="contact-links">
            <p>Email: <a href="mailto:legroh.groh@gmail.com">legroh.groh@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/GrohTech">github.com/GrohTech</a></p>
            <p>LinkedIn <a href="https://www.linkedin.com/in/legroh/">linkedin.com/in/legroh</a></p>
          </section>
          </section>
        </section>
      </section>
    </section>
  )

}

export default Contact;