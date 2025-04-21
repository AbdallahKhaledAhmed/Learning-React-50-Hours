import FormButton from "./FormButton";

const UseFormTest = () => {
  return (
    <form>
      <h2>Form with useFormStatus</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <br />
      <FormButton />
    </form>
  );
};

export default UseFormTest;
