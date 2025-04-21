// pages/contact.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <main>
      <div className="about">
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us using the form below!</p><br></br>
          
          <form class="contact-form">
            <div class="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />
            </div>
            <div class="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />
              </div>

              <div class="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message"></textarea>
              </div>

              
              <button className="send-btn" type="submit" style={{ marginTop: '10px' }}>Send</button>
           
          </form>
          <br></br>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
