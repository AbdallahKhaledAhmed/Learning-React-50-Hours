import { useForm, SubmitHandler } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

type userData = {
  firstName: string;
  lastName: string;
  email: string;
  passowrd: string;
  confirmPassowrd: string;
  checked: boolean;
};

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<userData>();
  const formSubmit: SubmitHandler<userData> = (data) => {
    console.log(data);
  };
  return (
    <div className="myStyle">
      <Form className="myStyleForm" onSubmit={handleSubmit(formSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            {...register("firstName", { required: "fierst name is required" })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            {...register("lastName", { required: "second name is required" })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            {...register("email", {
              required: "email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Please Enter a valid email",
              },
            })}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            {...register("passowrd", {
              required: "password is required",
              minLength: {
                value: 9,
                message: "password must be at least 8 characters",
              },
            })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            {...register("confirmPassowrd", {
              required: "confirm password is required",
            })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Check me out"
            {...register("checked")}
          />
        </Form.Group>

        <Button variant="primary" type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </Form>
      <div>
        {(Object.keys(errors) as Array<keyof userData>).map((fieldName) => (
          <p
            style={{ color: "red", fontWeight: "bold" }}
          >{`${errors[fieldName]?.message}`}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
