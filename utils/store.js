// This is a placeholder util for managing todos.
// In a production app, you might connect to a database or use context.

export const addTodo = (todos, todo) => [...todos, todo];

export const toggleTodo = (todos, idToToggle) =>
  todos.map((todo) =>
    todo.id === idToToggle ? { ...todo, completed: !todo.completed } : todo
  );

export const deleteTodo = (todos, idToDelete) =>
  todos.filter((todo) => todo.id !== idToDelete);
