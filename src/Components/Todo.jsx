import '../styles/Todo.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Formatter from '../utils/Formatter';

function Todo({ props, onToggle, onDelete, onUpdate }) {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }} variant="outlined" style={{ padding: '10px' }}>
                <div className={`todo ${props.completed ? 'completed' : ''}`} onDoubleClick={onUpdate}>
                    <CardHeader
                        title={props.name}
                        subheader={'Created: ' + Formatter.formatDateTime(new Date(props.createdOn))} // Use the createdOn timestamp from props
                    />
                    <hr/>
                    <CardContent>
                        {
                        props.completed &&
                        <Typography variant="body2">
                            Time spent: <b>{props.timeToDo}</b>
                        </Typography>
                        }
                        {
                        !props.completed &&
                        <Typography variant="body2">
                            Time estimate: <b>{props.timeToDo}</b>
                        </Typography>
                        }
                        {
                        props.deadline && 
                            <Typography variant="body2">
                                Deadline: <b>{props.deadline}</b>
                            </Typography>
                        }
                        <Typography variant="body2">
                            Status: <b>{props.completed ? 'Yess!! You completed it' : 'No, not yet :('}</b>
                        </Typography>
                        {
                        props.completed && props.completedOn &&
                            <Typography variant="body2">
                                Completed: <b>{props.completedOn}</b>
                            </Typography>
                        }
                    </CardContent>
                </div>
                <div className="to-do--buttons">
                    <Button variant="contained" onClick={onDelete} style={{color: "white", backgroundColor: "black", boxShadow: "0px 0px 10px black"}}>
                        Delete
                    </Button>
                    <Button variant="contained" onClick={onToggle} style={{color: "white", backgroundColor: "black", boxShadow: "0px 0px 10px black"}}>
                        {props.completed ? 'Mark Incomplete' : 'Mark Complete'}
                    </Button>
                </div>
            </Card>
        </div>
    );
}

export default Todo;
