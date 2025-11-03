import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/Todolist";

export default function App() {
  const [todos, setTodos] = useState(() =>
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filtered = todos.filter((t) => {
    if (filter === "completed" && !t.completed) return false;
    if (filter === "pending" && t.completed) return false;
    if (!t.text.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className={dark ? "container dark" : "container"}>
      <h1>Task Manager </h1>

      <input
        className="search"
        placeholder="Search tasks..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <TodoForm todos={todos} setTodos={setTodos} />

      <div className="toolbar">
        <div className="filters">
          {["all", "completed", "pending"].map((f) => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <button onClick={() => setDark(!dark)}>🌓 Theme</button>
      </div>

      <TodoList todos={filtered} setTodos={setTodos} />
    </div>
  );
}