import React, { useId } from "react";

const UniqueId = () => {
  const formId = useId();
  return (
    <div>
      <label htmlFor={`${formId}-username`}>username</label>
      <input type="text" id={`${formId}-username`} />
      <label htmlFor={`${formId}-password`}>password</label>
      <input type="password" id={`${formId}-password`} />
    </div>
  );
};

export default UniqueId;
