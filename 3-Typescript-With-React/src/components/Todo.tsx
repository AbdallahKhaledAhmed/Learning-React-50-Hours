import { useState } from "react";
type Todo = {
  task: string;
  dueData: string;
};
const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>("");
  const [dueData, setDueData] = useState<string>("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setTodos([...todos, { task: task, dueData: dueData }]);
        }}
      >
        <input type="text" onChange={(e) => setTask(e.target.value)} />
        <input type="text" onChange={(e) => setDueData(e.target.value)} />
        <input type="submit" />
      </form>
      {todos.map((i) => (
        <div style={{ display: "flex", gap: "50px", alignItems: "center" }}>
          <h2>Task : {i.task}</h2>
          <h3>Due Date : {i.dueData}</h3>
        </div>
      ))}
    </div>
  );
};

export default Todo;
