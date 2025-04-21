import { use } from "react";

type fetchedData = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function fetchFunc(): Promise<fetchedData> {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
}
const todoPromise = fetchFunc();

const FetchTodo = () => {
  const res: fetchedData = use(todoPromise);
  return <div>{res.title}</div>;
};

export default FetchTodo;
