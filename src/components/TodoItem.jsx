import { useState } from "react";

export default function TodoItem({ todo, todos, setTodos }) {
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(todo.text);

  const toggleCompleted = () =>
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );

  const deleteTodo = () => setTodos(todos.filter((t) => t.id !== todo.id));

  const saveEdit = () => {
    setTodos(todos.map((t) => (t.id === todo.id ? { ...t, text } : t)));
    setEdit(false);
  };

  return (
    <div className={`item ${todo.completed ? "done" : ""}`}>
      {edit ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={saveEdit}
          autoFocus
        />
      ) : (
        <div onClick={toggleCompleted}>
          <strong>{todo.text}</strong>
          <p>
            {todo.date} •
            <span className={`p-${todo.priority}`}> {todo.priority}</span> •
            <span className="cat"> {todo.category}</span>
          </p>
        </div>
      )}

      <div className="actions">
  
        <button className="edit" onClick={() => setEdit(true)}>Edit</button>
        <button className="Delete" onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
}
