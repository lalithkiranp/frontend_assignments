import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import TodoStats from "./components/TodoStats";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all"); // all | completed | pending
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch first 20 todos
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=20");
        if (!res.ok) throw new Error("Failed to fetch todos");
        const data = await res.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  // Apply filter locally
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true; // all
  });

  const completedCount = todos.filter((t) => t.completed).length;
  const pendingCount = todos.length - completedCount;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">✅ Todo Tracker</h1>

      <TodoFilter setFilter={setFilter} />
      <TodoStats completed={completedCount} pending={pendingCount} />

      {loading && <p className="text-center">Loading todos...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && <TodoList todos={filteredTodos} />}
    </div>
  );
}

export default App;
