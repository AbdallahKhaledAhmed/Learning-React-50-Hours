import { Suspense } from "react";
import FetchTodo from "./components/1-use/1-FetchTodo";
import CardComp from "./components/1-use/2-Card";
import { ThemeProvider } from "./components/1-use/2-Theme";
import CustomForm from "./components/2-actions/3-Form";

const App = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <FetchTodo />
      <ThemeProvider>
        <CardComp />
      </ThemeProvider>
      <CustomForm />
    </Suspense>
  );
};

export default App;
