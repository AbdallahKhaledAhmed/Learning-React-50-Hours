import { Suspense } from "react";
import FetchTodo from "./components/1-FetchTodo";
import CardComp from "./components/2-Card";
import { ThemeProvider } from "./components/2-Theme";

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <FetchTodo />
      <ThemeProvider>
        <CardComp />
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
