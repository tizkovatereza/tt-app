import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleTodoCompletion, onDeleteTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodoCompletion={onToggleTodoCompletion}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
