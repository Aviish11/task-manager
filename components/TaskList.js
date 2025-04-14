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
    
}
  