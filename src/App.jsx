import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import AddTask from './components/AddTask';
import { fetchTasks, deleteTask, toggleTaskCompletion } from './services/taskService';
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import "./styles/App.css"

function App() {
    const { width, height } = useWindowSize();
    const [todos, setTodos] = useState([]);
    const [showConfetti, setShowConfetti] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        fetchTasks(setTodos);
    }, []);

    function handleToggleCompletion(taskId, completed) {
        toggleTaskCompletion(taskId, completed);
        if (!completed) {
            startConfetti();
        }
    }

    function handleDeleteTask(taskId) {
        deleteTask(taskId);
    }

    function startConfetti() {
        setShowConfetti(true);
        setFadeOut(false);

        setTimeout(() => setFadeOut(true), 3000);
        setTimeout(() => setShowConfetti(false), 5000);
    }

    function checker() {
        return todos.length === 0;
    }

    return (
        <div>
            <Header />
            <AddTask />
            {checker() && (<h2 style={{ textAlign: "center" }}> Whew! All tasks are done! </h2>)}
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
