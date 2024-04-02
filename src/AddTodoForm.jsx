import { useState } from "react";

export default function AddTodoForm({ addTodo }) {
  const [temptodo, setTemptodo] = useState("");
  const onClickhandle = () => {
    if (temptodo) {
      addTodo(temptodo);
      setTemptodo("");
    }
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
      <button onClick={onClickhandle}> Add Task </button>
    </div>
  );
}
