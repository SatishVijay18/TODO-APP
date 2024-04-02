import { useState } from "react";

export default function UpdateTodoForm({ todo, updateTask }) {
  const [temptodo, setTemptodo] = useState(todo.task);
  const onClickhandle = () => {
    updateTask(temptodo, todo.key);
  };
  return (
    <div className="input-div">
      <input
        name="todo"
        id="todo"
        value={temptodo}
        onChange={(e) => {
          setTemptodo(e.target.value);
        }}
      ></input>
      <button onClick={onClickhandle}> Update Task </button>
    </div>
  );
}
