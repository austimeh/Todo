import React, { useState } from 'react';

const EditTodoForm = ({ todo, updateTodo, closeEditForm }) => {
  const [task, setTask] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      updateTodo({
        ...todo,
        task: task,
      });
      closeEditForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditTodoForm;
