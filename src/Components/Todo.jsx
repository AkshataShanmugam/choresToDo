import './Todo.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';

function ToDo({ props, onToggle, onDelete }) {
  return (
    <div>
        <Card sx={{ maxWidth: 345 }} variant="outlined" style={{padding: '10px'}}>
            <div className={`todo ${props.completed ? 'completed' : ''}`}>
                <CardHeader
                    title={'Task: ' + props.name}
                    subheader={'Created on: ' + new Date().toLocaleString() + ""}
                    />
                <CardContent>
                    <Typography variant="body2">     
                        Estimated time to complete it: <b>{props.timeToDo}</b>
                    </Typography>
                    <Typography variant="body2"> 
                        Status: <b>{props.completed ? 'Yess!! You completed it' : 'No, not yet :('} </b>
                    </Typography>
                </CardContent>
            </div>
            <div className="to-do--buttons">
            <Button variant="outlined" onClick={onDelete}>
                Delete
            </Button>
            
            <Button variant="outlined" onClick={onToggle}>
                Mark Complete
            </Button>
            </div>
        </Card>
    </div>
  )
}

export default ToDo
