import { useFormStatus } from "react-dom";

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-neutral-600 rounded-full px-4 py-2 text-white"
      type="submit"
      disabled={pending}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default FormButton;
