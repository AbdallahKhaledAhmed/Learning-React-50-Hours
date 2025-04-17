import { useRef } from "react";

const FocusInput = () => {
  const formRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input type="text" ref={formRef} />
      <button onClick={() => formRef.current!.focus()}>Focus</button>
    </div>
  );
};

export default FocusInput;
