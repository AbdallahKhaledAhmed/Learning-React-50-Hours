import Timer from "../components/Timer";
import UniqueId from "../components/UniqueId";
import useFetch from "../components/useFetch";
import useStateClone from "../components/useStateClone";

function App() {
  const [count, setCount] = useStateClone(0);
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      <UniqueId />
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <ol>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
      <Timer />
    </>
  );
}

export default App;
