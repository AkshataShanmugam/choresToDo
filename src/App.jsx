import React, { useState } from 'react';
import './App.css';
import Todo from './Components/Todo';
import Header from './Components/Header';
import Button from '@mui/material/Button';
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

function App() {
  const { width, height } = useWindowSize();
  const [todos, setTodos] = useState([
    { name: 'Clean room', timeToDo: '15 minutes', completed: true },
    { name: 'Wash bowls', timeToDo: '15 minutes', completed: false },
    { name: 'Get back laundry', timeToDo: '10 minutes', completed: false },
    { name: 'Get Rakhi for Agni, Pranav and Vishwas', timeToDo: '10 minutes', completed: true },
    { name: 'Tie Rakhi for Agni, Pranav and Vishwas', timeToDo: '10 minutes', completed: false },
  ]);

  const [taskName, setTaskName] = useState('');
  const [taskTime, setTaskTime] = useState('');

  const [showConfetti, setShowConfetti] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  function addTasks() {
    if (taskName.trim() === '' || taskTime.trim() === '') {
      alert('Please enter both task name and time to do.');
      return;
    }

    setTodos([
      ...todos,
      { name: taskName, timeToDo: taskTime, completed: false }
    ]);

    setTaskName(''); // Clear the input fields
    setTaskTime('');
  }

  function deleteTask(index) {
    setTodos(todos.filter((_, idx) => idx !== index));
  }

  function StartConfetti(){
    setShowConfetti(true);
    setFadeOut(false);

    setTimeout(() => setFadeOut(true), 3000); 
    setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds (2 seconds fade-out + 3 seconds duration)
  }

  function toggleCompletion(index) {
    if (!todos[index].completed) {
      const updatedTodos = todos.map((todo, idx) =>
        idx === index ? { ...todo, completed: true } : todo
      );
      setTodos(updatedTodos);
      StartConfetti();
    }
  }

  function checker(){
    return (todos.length === 0)
  }

  return (
    <div>
      <Header />
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
        <Button
          className="button--add-to-do"
          onClick={addTasks}
          variant='outlined'
          style={{ marginRight: '30px' }}
        >
          Add Task
        </Button>
      </div>
      {checker() && (<h2 style={{textAlign:"center"}}> Whew! all tasks are done! </h2>)}
      <div className="body">
        <div className="to-do--cards">
          {todos.map((todo, index) => (
            <div key={index}>
              <Todo
                props={todo}
                onToggle={() => toggleCompletion(index)}
                onDelete={() => deleteTask(index)}
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
