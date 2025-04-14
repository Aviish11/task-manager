import React, { useState } from 'react';

export default function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

  
}
  