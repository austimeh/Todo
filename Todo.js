import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ todo, toggleComplete, editTodo, deleteTodo }) => {
  return (
    <div className={`Todo ${todo.complete ? 'completed' : ''}`}>
      <p onClick={() => toggleComplete(todo.id)}>{todo.task}</p>
      <div>
        <FontAwesomeIcon
          icon={faPenSquare}
          onClick={() => editTodo(todo.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default Todo;
