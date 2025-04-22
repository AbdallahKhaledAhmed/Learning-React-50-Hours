import { Suspense } from "react";
import FetchTodo from "./components/1-use/1-FetchTodo";
import CardComp from "./components/1-use/2-Card";
import { ThemeProvider } from "./components/1-use/2-Theme";
import CustomForm from "./components/2-actions/Form";
import UseFormTest from "./components/3-useForm/UseFormTest";
import UseActionStateHook from "./components/4-useActionState/UseActionStateHook";

const App = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <FetchTodo />

        <ThemeProvider>
          <CardComp />
        </ThemeProvider>
      </Suspense>

      <CustomForm />
      <UseFormTest />
      <UseActionStateHook />
    </div>
  );
};

export default App;
