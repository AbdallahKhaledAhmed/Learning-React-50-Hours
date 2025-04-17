import { FormEvent, useRef, useState } from "react";
type FormData = {
  name: string;
  email: string;
  password: string;
};

const Form = () => {
  const [submitted, setSubmitted] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted((prev) => ({
      ...prev,
      name: name.current!.value,
      email: email.current!.value,
      password: password.current!.value,
    }));
  };
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={name} />
        <input type="text" ref={email} />
        <input type="password" ref={password} />
        <button>Submit</button>
      </form>
      <h3>Name: {submitted.name}</h3>
      <h3>Email: {submitted.email}</h3>
      <h3>Password: {submitted.password}</h3>
    </>
  );
};

export default Form;
