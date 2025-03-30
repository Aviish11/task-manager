// pages/about.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h1>About Task Manager</h1>
        <p>This app was created to help users manage their daily tasks efficiently.</p>
        <p>Built using Next.js and the Todoist API.</p>
        <p>Built by Veevek Auckloo, Naslihan Mohammed Ayoub and Oluwaseun Akinola</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
