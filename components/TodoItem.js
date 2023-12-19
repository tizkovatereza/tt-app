const TodoItem = ({ todo, onToggleTodoCompletion, onDeleteTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleTodoCompletion(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </span>
      <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
