import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Todo from './Components/Todo';
import AddTask from './Components/AddTask';
import { fetchTasks, deleteTask, toggleTaskCompletion } from './utils/taskService';
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import "./styles/App.css";
import { Button, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { Add as AddIcon, Close as CloseIcon } from '@mui/icons-material';

function App() {
    const { width, height } = useWindowSize();
    const [todos, setTodos] = useState([]);
    const [filterComplete, setFilterComplete] = useState(true);
    const [showConfetti, setShowConfetti] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [openDialog, setOpenDialog] = useState(false); // Manage dialog visibility

    useEffect(() => {
        fetchTasks(setTodos, filterComplete);
    }, [filterComplete]);

    function handleToggleCompletion(taskId, completed) {
        toggleTaskCompletion(taskId, completed);
        if (completed) {
            startConfetti();
        }
    }

    function handleDeleteTask(taskId) {
        deleteTask(taskId);
    }

    function changeFilterCompleteStatus() {
        setFilterComplete((prev) => !prev);
    }

    function toggleDialog() {
        setOpenDialog((prev) => !prev);
    }

    function startConfetti() {
        setShowConfetti(true);
        setFadeOut(false);

        setTimeout(() => setFadeOut(true), 3000);
        setTimeout(() => setShowConfetti(false), 5000);
    }

    function checker() {
        return (todos.length === 0 && filterComplete);
    }

    return (
        <div>
            <Header />
            <Button
                variant="contained"
                style={{ display: "block", marginRight: "20px", marginLeft: "auto", color: "white", backgroundColor: "black", boxShadow: "0px 0px 5px white"}}
                onClick={changeFilterCompleteStatus}
            >
                Show {filterComplete ? "Completed" : "Not Completed"}
            </Button>
            <IconButton
                edge="end"
                color="primary"
                aria-label="add-task"
                onClick={toggleDialog}
                style={{ position: 'fixed', bottom: 20, right: 20 }}
            >
                <AddIcon />
            </IconButton>
            <Dialog open={openDialog} onClose={toggleDialog}>
                <DialogTitle style ={{textAlign: "center"}} className="dialog-heading">
                    Add New Task
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="close"
                        onClick={toggleDialog}
                        style={{ position: 'absolute', top: 10, right: 10 }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent className="dialog-content">
                    <AddTask />
                </DialogContent>
            </Dialog>
            <span>
                {checker() && (<h2 style={{ textAlign: "center" }}> Whew! All tasks are completed! </h2>)}
            </span>
            <div className="body">
                <div className="to-do--cards">
                    {todos.map((todo) => (
                        <div key={todo.id}>
                            <Todo
                                props={todo}
                                onToggle={() => handleToggleCompletion(todo.id, !todo.completed)}
                                onDelete={() => handleDeleteTask(todo.id)}
                            />
                            <br />
                        </div>
                    ))}
                </div>
            </div>
            {showConfetti && (
                <div className={`confetti-wrapper ${fadeOut ? 'fade-out' : ''}`}>
                    <Confetti width={width} height={height} />
                </div>
            )}
        </div>
    );
}

export default App;
