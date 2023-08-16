const Contact = () => {
      return (
            <div id="contact-form" className="contact-container">
                  <h1 id="contact-us">CONTACT US</h1>
                  <form action="https://getform.io/f/e9d423e5-cd28-4b8e-8a1d-c9d6b7e8236c" method="POST">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name"/>
            
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email"/>
                        
                        <label htmlFor="message">Message:</label>
                        <input type="text" id="message" name="message" placeholder="Your Message"/>
            
                        <button className="contact-btn" type="submit">Send</button>
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