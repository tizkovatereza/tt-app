import { useState } from 'react';
import TodoList from '../components/TodoList';
import AddTodoForm from '../components/AddTodoForm';

const IndexPage = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      completed: false
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodoCompletion = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onToggleTodoCompletion={toggleTodoCompletion}
        onDeleteTodo={deleteTodo}
      />
    </div>
  );
};

export default IndexPage;
