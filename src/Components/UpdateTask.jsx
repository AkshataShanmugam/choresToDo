import '../styles/AddTask.css';
import React, {useState} from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { updateTask } from '../utils/taskService';
import Formatter from '../utils/Formatter';

export default function UpdateTask({ props }) {
    // console.log(props.id)
    const time = Number(props.timeToDo.split(" ")[0])
    let date = ""
    let dTime = ""
    if (props.deadline){
        date = Formatter.parseDate(props.deadline)
        dTime = Formatter.parseTime(props.deadline)
    }
    
    const [taskName, setTaskName] = useState(props.name);
    const [taskTime, setTaskTime] = useState(time);
    const [taskDeadline, setDeadline] = useState(date);
    const [taskDeadlineTime, setDeadlineTime] = useState(dTime);

    function handleUpdateTask() {
        if (taskName.trim() === '' || taskTime === '') {
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

        updateTask(
            props.id, 
            { 
            name: taskName, 
            timeToDo: formattedTimeToDo, 
            deadline: formattedDeadline, 
            completed: props.completed, 
        }
        );
        
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
                        title = "Update task"
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
                    <Button onClick={handleUpdateTask} style={{color: "white", backgroundColor: "black", boxShadow: "0px 0px 6px black"}}>
                        Update Task
                    </Button>
            </Card>
        </div>
    );
}
