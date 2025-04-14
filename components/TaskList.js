import React, { useState } from 'react';

export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    // Add task
    const addTask = () => {
        if (newTitle.trim() === '') return;

        const newTask = {
            id: Data.now(),
            title: newTitle,
            description: newDescription,
            completed: false,
        };

        setTasks([...tasks, newTask]);
        setNewTitle('');
        setNewDescription('');
    };

    // Delete task
    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    // Edit task //

    const startEditing = (index) => {
        setEditingIndex(index);
        setNewTitle(tasks[index].title);
        setNewDescription(tasks[index].description);
    };

    // Save edited task
    const saveEdit = () => {
        const updatedTasks = [...tasks];
        updatedTasks[editingIndex].title = newTitle;
        updatedTasks[editingIndex].description = newDescription;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setNewTitle('');
    setNewDescription('');
    };

    return (
        <div>
          <h2>Task Manager</h2>
          <input
            type="text"
            placeholder="Task title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Task description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <br />
          {editingIndex === null ? (
            <button onClick={addTask}>Add Task</button>
          ) : (
            <button onClick={saveEdit}>Save Changes</button>
          )}
    
          <ul>
            {tasks.map((task, index) => (
              <li key={task.id}>
                <strong>{task.title}</strong>: {task.description}
                <br />
                <button onClick={() => startEditing(index)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
}
  