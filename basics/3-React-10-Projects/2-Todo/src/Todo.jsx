import "./styles.css";

import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [data, setData] = useState("");
  const handleClick = () => {
    setTodos(todos.concat({ task: data, id: Math.floor(Math.random() * 100) }));
    console.log(todos);
  };
  const handleRemove = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };
  return (
    <div className="container">
      <input
        type="text"
        onChange={(e) => {
          setData(e.target.value);
        }}
      />
      <button onClick={handleClick}>Add Todo</button>
      <ul className="todos-list">
        {todos.map((item) => (
          <li className="todo" key={item.id}>
            {item.task}
            <button className="close" onClick={() => handleRemove(item.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
