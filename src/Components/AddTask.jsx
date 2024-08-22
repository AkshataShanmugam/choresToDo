import React, { useState } from 'react';
import { addTask } from '../utils/taskService';
import Button from '@mui/material/Button';
import Formatter from '../utils/Formatter';

function AddTask() {
    const [taskName, setTaskName] = useState('');
    const [taskTime, setTaskTime] = useState('');
    const [taskDeadline, setDeadline] = useState('');
    const [taskDeadlineTime, setDeadlineTime] = useState('');

    function handleAddTask() {
        if (taskName.trim() === '' || taskTime.trim() === '') {
            alert('Please enter both task name and time to do.');
            return;
        }

        const formattedTimeToDo = taskTime > 59 
            ? Formatter.formatNumberToTwoDecimalPlaces(taskTime / 60) + " hours"
            : Formatter.formatNumberToTwoDecimalPlaces(taskTime) + " minutes";

        // Determine the formatted deadline
        let formattedDeadline = '';

        if (taskDeadline) {
            formattedDeadline = Formatter.formatDate(new Date(taskDeadline));
        }

        if (!taskDeadline && taskDeadlineTime) {
            formattedDeadline = Formatter.formatDate(new Date()) + " " + taskDeadlineTime;
        } else if (taskDeadline && taskDeadlineTime) {
            formattedDeadline += " " + taskDeadlineTime;
        }

        addTask({ 
            name: taskName, 
            timeToDo: formattedTimeToDo, 
            deadline: formattedDeadline, 
            completed: false 
        });
        setTaskName('');
        setTaskTime('');
        setDeadline('');
        setDeadlineTime('');
    }

    return (
        <div style={{ textAlign: 'center', margin: '20px'}}>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter task name"
                style={{ marginRight: '10px', padding: '5px' }}
            />
            <input
                type="number"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
                placeholder="Enter time to complete (minutes)"
                style={{ marginRight: '10px', padding: '5px' }}
            />
            <input
                type="date"
                value={taskDeadline}
                onChange={(e) => setDeadline(e.target.value)}
                placeholder="Enter deadline for task (dd-mm-yyyy)"
                style={{ marginRight: '10px', padding: '5px' }}
            />
            <input
                type="time"
                value={taskDeadlineTime}
                onChange={(e) => setDeadlineTime(e.target.value)}
                placeholder="Enter deadline time"
                style={{ marginRight: '10px', padding: '5px' }}
            />
            <br></br>
            <br></br>
            <Button onClick={handleAddTask} style={{color: "white", backgroundColor: "black", boxShadow: "0px 0px 5px white"}}>
                Add Task
            </Button>
        </div>
    );
}

export default AddTask;
