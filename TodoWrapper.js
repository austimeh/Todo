import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import EditTodoForm from './EditTodoForm';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const editTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setEditingTodo(todoToEdit);
  };

  const updateTodo = (updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const closeEditForm = () => {
    setEditingTodo(null);
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.id === editingTodo?.id ? (
          <EditTodoForm
            key={todo.id}
            todo={editingTodo}
            updateTodo={updateTodo}
            closeEditForm={closeEditForm}
          />
        ) : (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
