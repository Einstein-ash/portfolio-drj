import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
const form =useRef();
const sendEmail = (e) => {
  e.preventDefault();
  
  emailjs.sendForm('service_g6tkyoc', 'template_3yt9suv', form.current, 'QbAFprdsZbnJQi_Pu')
    e.target.reset()
};
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_option">
          <article className="contact_option">
          <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>12115059@nitkkr.ac.in</h5>
            <a href="mailto:12115059@nitkkr.ac.in" target='_blank'>Send a message </a>
          </article>
          <article className="contact_option">
          <RiMessengerLine className='contact_option-icon'/>
            <h4>Linkedin</h4>
            <h5>DRJ</h5>
            <a href="https://www.linkedin.com/in/dishu-raj-731042227" target='_blank'>Send a message </a>
          </article>
          <article className="contact_option">
          <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            {/* <h5>12115059@nitkkr.ac.in</h5> */}
            <a href="https://api.whatsapp.com/send?phone=916202964983" target='_blank'>Send a message </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact