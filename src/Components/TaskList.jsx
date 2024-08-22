import React from 'react';
import Todo from './Todo';

function TaskList({ todos, onToggleCompletion, onDelete }) {
  return (
    <div className="body">
      <div className="to-do--cards">
        {todos.map((todo) => (
          <div key={todo.id}>
            <Todo
              props={todo}
              onToggle={() => onToggleCompletion(todo.id, !todo.completed)}
              onDelete={() => onDelete(todo.id)}
            />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
