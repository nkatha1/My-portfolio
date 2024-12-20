import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        service_jby8rb4,  // Replace with your EmailJS service ID
        template_obfzawq,  // Replace with your EmailJS template ID
        e.target,
        EQdajZuelUAiHDPhy       // Replace with your EmailJS user ID
      )
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="contact">
      <h1 className="contact-title">Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="contact-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="contact-input"
        />

        <label htmlFor="email" className="contact-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="contact-input"
        />

        <label htmlFor="message" className="contact-label">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="contact-textarea"
        ></textarea>

        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;