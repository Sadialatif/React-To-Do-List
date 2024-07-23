import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { content: newTask, status: 'Todo' }]);
      setNewTask('');
    }
  };

  const updateStatus = (index, newStatus) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="input-container">
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Enter a new task" 
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            <span>{task.content}</span>
            <span>{task.status}</span>
            <div className="actions">
              {task.status === 'Todo' && (
                <button onClick={() => updateStatus(index, 'In Progress')}>In Progress</button>
              )}
              {task.status === 'In Progress' && (
                <button onClick={() => updateStatus(index, 'Complete')}>Complete</button>
              )}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
