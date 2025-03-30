import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TaskList from '../components/TaskList';


const Home = () => {

 
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <main className="task-global">
        <h1>Welcome to Task Manager</h1>
        <p>This is a simple app to manage your daily tasks efficiently.</p>
        <br />
        <br />
        
        <h2>Enter your first task to get started</h2>
        

      <input
          type="text"
        />

      <button
          style={{
            backgroundColor: 'blue',
          }}
        >Add Task
        </button>
        <br />
        <br />

        <div>
        <div id="TaskList" className="task-list">
          <span>Sample Task 1</span>
          <div className="task-actions">
            <button className="edit-btn">Edit</button>
            <button className="delete-btn">Delete</button>
          </div>
        </div>
        </div>

        {/* {*just to display something for now*} */ }
   

    </main>
    <br />
    <br />
    <br />
    <br />
    <Footer />
    </div>
  );
};

export default Home;



