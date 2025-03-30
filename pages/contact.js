// pages/contact.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <main>
        <>
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us using the form below!</p>
          
          <form>
            <>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" />

              <label htmlFor="message">Message:</label>
              <textarea id="message"></textarea>

              <button type="submit" style={{ marginTop: '10px' }}>Send</button>
            </>
          </form>
        </>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
