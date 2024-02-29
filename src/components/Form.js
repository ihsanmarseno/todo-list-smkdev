import React from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Enter a Todo...."
        className="task-input"
      />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
