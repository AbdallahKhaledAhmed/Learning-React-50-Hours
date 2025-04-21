const formAction = (formData: FormData) => {
  const userData = {
    name: formData.get("name"),
    password: formData.get("password"),
    email: formData.get("email"),
  };
  console.log(userData);
};
const CustomForm = () => {
  return (
    <form action={formAction}>
      <h2>Form With Actions</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" />
      <br />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <br />
      <button className="bg-neutral-600 rounded-full px-4 py-2 text-white">
        Submit
      </button>
    </form>
  );
};

export default CustomForm;
