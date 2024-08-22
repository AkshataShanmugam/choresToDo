import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import FilterButton from './Components/FilterButton';
import TaskDialog from './Components/TaskDialog';
import { fetchTasks, deleteTask, toggleTaskCompletion } from './utils/taskService';
import Confetti from "react-confetti";
import { IconButton } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useConfetti } from './hooks/useConfetti';
import TaskList from './Components/TaskList';
import "./styles/App.css";

function App() {
    const { showConfetti, fadeOut, width, height, startConfetti } = useConfetti();
    const [todos, setTodos] = useState([]);
    const [filterComplete, setFilterComplete] = useState(true);
    const [openDialog, setOpenDialog] = useState(false);

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

    function checker() {
        return (todos.length === 0 && filterComplete);
    }

    return (
        <div>
            <Header />
            <FilterButton filterComplete={filterComplete} onClick={changeFilterCompleteStatus} />

            <IconButton
                edge="end"
                aria-label="add-task"
                onClick={toggleDialog}
                style={{ position: 'fixed', bottom: 20, right: 20, backgroundColor: "white", color: "black" }}
            >
                <AddIcon />
            </IconButton>
            
            <TaskDialog open={openDialog} onClose={toggleDialog} />

            {checker() && (<h2 style={{ textAlign: "center" }}> Whew! All tasks are completed! </h2>)}
            
            <TaskList todos={todos} onToggleCompletion={handleToggleCompletion} onDelete={handleDeleteTask}/>

            {showConfetti && (
                <div className={`confetti-wrapper ${fadeOut ? 'fade-out' : ''}`}>
                    <Confetti width={width} height={height} />
                </div>
            )}
        </div>
    );
}

export default App;
