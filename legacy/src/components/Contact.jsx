import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

      const form = useRef();

      const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_utjhwxc', 'template_w2qmrkq', form.current, 'QKMLcQ4FlJQ71lSM-')
            .then((result) => {
                  console.log(result.text);
                  console.log("message sent")
                  e.target.reset()
                  alert('Message sent successfully')
            }, (error) => {
                  console.log(error.text);
            });
      };

      return (
            <div id="contact-form" className="contact-container">
                  <h1 id="contact-us">CONTACT US</h1>
                  <form ref={form} onSubmit={sendEmail}>
                        <label >Name:</label>
                        <input type="text" id="name" name="from_name" placeholder="Your Name"/>
            
                        <label>Email:</label>
                        <input type="email" id="email" name="user_email" placeholder="Your Email"/>
                        
                        <label htmlFor="message">Message:</label>
                        <input type="text" id="message" name="message" placeholder="Your Message"/>
            
                        <input className="contact-btn" type="submit" value="Send" />
                  </form>
                  <div className="social-icons">
                        <a href="https://www.instagram.com/legacyindependentservices/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank">
                              <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.facebook.com/LegacyIndependentServices?mibextid=LQQJ4d" target="_blank">
                              <i className="fa-brands fa-facebook"></i>
                        </a>
                  </div>
            </div>
      )
    }
    
    export default Contact