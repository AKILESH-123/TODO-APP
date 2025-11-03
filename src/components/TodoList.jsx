import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className="list">
      {todos.length === 0 && <p>No tasks yet...</p>}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
