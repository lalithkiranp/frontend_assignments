import TodoCard from "./TodoCard";

function TodoList({ todos }) {
  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
