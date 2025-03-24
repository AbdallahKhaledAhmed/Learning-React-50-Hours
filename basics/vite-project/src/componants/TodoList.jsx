import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      {todos.map((e) => (
        <li>{e}</li>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodos([...todos, inputValue]);
        }}
      >
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default TodoList;
