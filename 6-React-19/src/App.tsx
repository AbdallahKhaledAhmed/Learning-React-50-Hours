import { Suspense } from "react";
import FetchTodo from "./components/1-FetchTodo";

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <FetchTodo />
    </Suspense>
  );
};

export default App;
