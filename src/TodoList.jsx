import { useState } from "react";
import TodoForm from "./TodoForm";
import AddTodoForm from "./AddTodoForm";
import { v4 as uuidv4 } from "uuid";
import UpdateTodoForm from "./UpdateTodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = (todo) => {
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          key: uuidv4(),
          task: todo,
          toEdit: false,
          isCompleted: false,
        },
      ]);
      setTodo("");
    }
  };

  const removeTodo = (todo) => {
    const newTodos = todos.filter((todobj) => todobj.task !== todo.task);
    setTodos(newTodos);
  };

  const updateTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.key === id ? { ...todo, toEdit: !todo.toEdit } : todo
      )
    );
  };

  const updateTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.key === id ? { ...todo, task, toEdit: !todo.toEdit } : todo
      )
    );
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.key === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div className="todo-list-container">
      <h1> TODO list</h1>
      <AddTodoForm todo={todo} addTodo={addTodo} setTodo={setTodo} />
      <div className="todo-list-div">
        {todos.length > 0 ? (
          <ul className="todo-list">
            {todos.map((todo, index) => {
              if (todo.toEdit) {
                return (
                  <UpdateTodoForm
                    key={index}
                    todo={todo}
                    addTodo={addTodo}
                    updateTask={updateTask}
                  />
                );
              } else {
                return (
                  <TodoForm
                    todo={todo}
                    key={index}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete}
                  />
                );
              }
            })}
          </ul>
        ) : (
          <div className="no-todos">
            <h2>No Tasks Yay</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
