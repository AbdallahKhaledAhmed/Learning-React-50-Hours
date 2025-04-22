import { useActionState } from "react";

const increment = (prevState: number, formData: FormData) => {
  const userNumber = Number(formData.get("myNumber"));
  return userNumber ? prevState + userNumber : prevState + 1;
};

const UseActionStateHook = () => {
  const [state, formAction] = useActionState(increment, 0);
  return (
    <form action={formAction}>
      <h1>{state}</h1>
      <input type="number" name="myNumber" className="border-2" />
      <button className="bg-teal-300 p-2 m-2">Increment</button>
    </form>
  );
};

export default UseActionStateHook;
