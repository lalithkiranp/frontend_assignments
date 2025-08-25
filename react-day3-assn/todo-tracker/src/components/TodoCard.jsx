function TodoCard({ todo }) {
  return (
    <div
      className={`p-3 border rounded flex justify-between items-center ${
        todo.completed ? "bg-green-50" : "bg-yellow-50"
      }`}
    >
      <p className={`${todo.completed ? "line-through text-gray-500" : ""}`}>
        {todo.title}
      </p>
      <span className="text-sm font-semibold">
        {todo.completed ? "✅ Done" : "⏳ Pending"}
      </span>
    </div>
  );
}

export default TodoCard;
