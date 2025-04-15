import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TaskList from '../components/TaskList';
import Calendar from '../components/Calendar';
import Weather from '../components/Weather';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="task-global">
        <div className="info-wrapper">
          <Calendar />
          <Weather />
        </div>

        <h1>Welcome to Task Manager</h1>
        <p>This is a simple app to manage your daily tasks efficiently.</p>

        <TaskList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
