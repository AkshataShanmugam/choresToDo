import React, { useState } from 'react';
import { addTask } from '../services/taskService';
import Button from '@mui/material/Button';

function AddTask() {
    const [taskName, setTaskName] = useState('');
    const [taskTime, setTaskTime] = useState('');

    function handleAddTask() {
        if (taskName.trim() === '' || taskTime.trim() === '') {
            alert('Please enter both task name and time to do.');
            return;
        }

        addTask({ name: taskName, timeToDo: taskTime, completed: false });
        setTaskName('');
        setTaskTime('');
    }

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter task name"
                style={{ marginRight: '10px', padding: '5px' }}
            />
            <input
                type="text"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
                placeholder="Enter time to do (minutes)"
                style={{ marginRight: '10px', padding: '5px' }}
            />
            <Button onClick={handleAddTask} variant="outlined" style={{ marginRight: '30px' }}>
                Add Task
            </Button>
        </div>
    );
}

export default AddTask;
