import FormButton from "./FormButton";

const myFormAction = async (formData: FormData) => {
  
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log(formData.get("name"));
      console.log(formData.get("password"));
      console.log(formData.get("email"));
      resolve(null);
    }, 2000);
  });
};

const UseFormTest = () => {
  return (
    <form action={myFormAction}>
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
