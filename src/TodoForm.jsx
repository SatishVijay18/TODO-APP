export default function TodoForm({
  todo,
  updateTodo,
  removeTodo,
  toggleComplete,
}) {
  return (
    <div
      className={
        todo.isCompleted ? "todo-wrapper-div strike" : "todo-wrapper-div"
      }
    >
      <li className="todo-list-item">{todo.task}</li>
      <div className="todos-buttons-wrapper">
        <button className="button-delete" onClick={() => removeTodo(todo)}>
          Delete Task
        </button>
        <button
          className="button-delete"
          onClick={() => {
            updateTodo(todo.key);
          }}
        >
          Update Task
        </button>
        <button
          className="button-delete"
          onClick={() => {
            toggleComplete(todo.key);
          }}
        >
          💀
        </button>
      </div>
    </div>
  );
}
