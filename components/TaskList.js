
import React, { useState } from 'react';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState('');

  const addTask = () => {
    if (newTitle.trim() === '' || newDescription.trim() === '') {
      setError('Both title and description are required.');
      return;
    }

    const newTask = {
      id: Date.now(),
      title: newTitle,
      description: newDescription,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTitle('');
    setNewDescription('');
    setError('');
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setNewTitle(tasks[index].title);
    setNewDescription(tasks[index].description);
    setError('');
  };

  const saveEdit = () => {
    if (newTitle.trim() === '' || newDescription.trim() === '') {
      setError('The title and description are required to save changes.');
      return;
    }

    if (editingIndex === null || !tasks[editingIndex]) {
      setError('The task you are trying to edit no longer exists.');
      return;
    }

    const updatedTasks = [...tasks];
    updatedTasks[editingIndex].title = newTitle;
    updatedTasks[editingIndex].description = newDescription;
    setTasks(updatedTasks);
    setEditingIndex(null);
    setNewTitle('');
    setNewDescription('');
    setError('');
  };

  return (
    <div className="task-container">
      {error && <p className="error">{error}</p>}
      <h2>Task Manager</h2>

      <input
        className="task-input"
        type="text"
        placeholder="Task title"
        value={newTitle}
        onChange={(e) => {
          setNewTitle(e.target.value);
          setError('');
        }}
      />
      <br />
      <input
        className="task-input"
        type="text"
        placeholder="Task description"
        value={newDescription}
        onChange={(e) => {
          setNewDescription(e.target.value);
          setError('');
        }}
      />
      <br />

      {editingIndex === null ? (
        <button className="add-btn" onClick={addTask}>Add Task</button>
      ) : (
        <button className="add-btn" onClick={saveEdit}>Save Changes</button>
      )}

      <ul className="task-list-ul">
        {tasks.map((task, index) => (
          <li key={task.id} className="task-list">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p className="task-title">{task.title}</p>
                <p className="task-desc">{task.description}</p>
              </div>
              <div>
                <button className="edit-btn" onClick={() => startEditing(index)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
