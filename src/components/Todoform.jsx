import { useState } from "react";

export default function TodoForm({ todos, setTodos }) {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("Low");
  const [category, setCategory] = useState("Work");

  const addTodo = () => {
    if (!text.trim()) return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        date,
        priority,
        category,
        completed: false,
      },
    ]);
    setText("");
    setDate("");
    setPriority("Low");
    setCategory("Work");
  };

  return (
    <div className="form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task..."
      />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>Work</option>
        <option>Study</option>
        <option>Personal</option>
      </select>

      <button onClick={addTodo}>Add</button>
    </div>
  );
}
