import React, { useRef } from "react";

const FocusInput = () => {
  const myRef = useRef(null);
  return (
    <div>
      <input type="text" ref={myRef} />
      <button onClick={() => myRef.current.focus()}>Focus</button>
    </div>
  );
};

export default FocusInput;
