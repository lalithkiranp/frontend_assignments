function TodoFilter({ setFilter }) {
  return (
    <div className="flex justify-center gap-4 mb-4">
      <button onClick={() => setFilter("all")} className="px-3 py-1 border rounded hover:bg-gray-100">
        All
      </button>
      <button onClick={() => setFilter("completed")} className="px-3 py-1 border rounded hover:bg-green-100">
        Completed
      </button>
      <button onClick={() => setFilter("pending")} className="px-3 py-1 border rounded hover:bg-yellow-100">
        Pending
      </button>
    </div>
  );
}

export default TodoFilter;
