import React from 'react';

function TaskList({ todos, onToggleCompletion, onDelete }) {
  return (
    <div className="body">
      <div className="to-do--cards">
        {todos.map((todo, index) => (
          <div key={index}>
            <Todo
              props={todo}
              onToggle={() => onToggleCompletion(index)}
              onDelete={() => onDelete(index)}
            />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
