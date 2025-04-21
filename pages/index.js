import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TaskList from '../components/TaskList';
// import Calendar from '../components/Calendar';
// import Weather from '../components/Weather';

const Calendar = dynamic(() => import('../components/Calendar'), {
  ssr: false,
  loading: () => <p> Loading calendar.. </p>
});

const Weather = dynamic(() => import('../components/Weather'), {
  ssr: false,
  loading: () => <p> Loading weather.. </p>
});

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
        <p>To help users easily track, add, edit, and manage their daily tasks in a simple app.</p>

        <TaskList />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
