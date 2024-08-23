import '../styles/AddTask.css';
import React, {useState} from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { addTask } from '../utils/taskService';
import Formatter from '../utils/Formatter';

export default function AddTasks() {
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
        <div className='add-task--div'>
            <Card sx={{ maxWidth: 400 }} variant="outlined" style={{ padding: '10px'}}>
                <div className="add-task--content">
                    <CardHeader
                        title = "Add a new task"
                        subheader={'Current date: ' + Formatter.formatDateTime(new Date())}
                    />
                    <hr/>
                    <CardContent>
                        <Typography variant="body2">
                        <input
                            type="text"
                            value={taskName}
                            onChange={(e) => setTaskName(e.target.value)}
                            placeholder="Task name"
                        />
                        </Typography>
                        
                        <Typography variant="body2">
                        <input
                            type="number"
                            value={taskTime}
                            onChange={(e) => setTaskTime(e.target.value)}
                            placeholder="Time to complete(minutes)"
                        />
                        </Typography>
                        
                        <Typography variant="body2">
                        <input
                            type="date"
                            value={taskDeadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            placeholder="Deadline for task (dd-mm-yyyy)"
                        />
                        </Typography>

                        <Typography>
                        <input
                            type="time"
                            value={taskDeadlineTime}
                            onChange={(e) => setDeadlineTime(e.target.value)}
                            placeholder="Deadline time"
                        />
                        </Typography>
                    </CardContent>
                </div>
                    <Button onClick={handleAddTask} style={{color: "white", backgroundColor: "black", boxShadow: "0px 0px 6px black"}}>
                        Add Task
                    </Button>
            </Card>
        </div>
    );
}
