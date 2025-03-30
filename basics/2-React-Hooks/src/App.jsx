import Timer from "../componants/Timer";
import UniqueId from "../componants/UniqueId";
import useFetch from "../componants/useFetch";
import useStateClone from "../componants/useStateClone";

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
