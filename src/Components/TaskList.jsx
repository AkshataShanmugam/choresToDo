import React from 'react';
import Todo from './Todo';

function TaskList({ todos, onToggleCompletion, onDelete, onUpdate }) {
  return (
    <div className="body">
      <div className="to-do--cards">
        {todos.map((todo) => (
          <div key={todo.id}>
            <Todo
              props={todo}
              onToggle={() => onToggleCompletion(todo.id, !todo.completed)}
              onDelete={() => onDelete(todo.id)}
              onUpdate={() => onUpdate({ id:todo.id, completed: todo.completed, deadline: todo.deadline, name: todo.name, timeToDo: todo.timeToDo })}
            />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
