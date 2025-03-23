import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      {todos.map((e) => (
        <li>{e}</li>
      ))}
      <form>
        <input
          type="text"
          onBlur={(e) => {
            setTodos([...todos, e.target.value]);
            e.target.value = "";
          }}
        />
      </form>
    </div>
  );
};

export default TodoList;
