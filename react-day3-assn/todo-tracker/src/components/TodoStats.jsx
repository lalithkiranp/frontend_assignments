function TodoStats({ completed, pending }) {
  return (
    <div className="text-center mb-4">
      <p>
        <span className="font-semibold text-green-600">{completed}</span> Completed |{" "}
        <span className="font-semibold text-yellow-600">{pending}</span> Pending
      </p>
    </div>
  );
}

export default TodoStats;
