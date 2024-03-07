import React from "react";

const TodosList = ({ todos, setEditTodo, setTodos }) => {
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  const handleCompleteTodo = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  const handleDeleteTodo = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            className={`list ${todo.completed ? "complete" : ""}`}
            type="text"
            value={todo.title}
            onChange={(event) => event.preventDefault()}
          />

          <div>
            <button
              className="button-complete"
              onClick={() => handleCompleteTodo(todo)}
            >
              <i className="fa-solid fa-check-circle"></i>
            </button>
            <button className="button-edit" onClick={() => handleEdit(todo)}>
              <i className="fa-solid fa-edit"></i>
            </button>
            <button
              className="button-delete"
              onClick={() => handleDeleteTodo(todo)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
