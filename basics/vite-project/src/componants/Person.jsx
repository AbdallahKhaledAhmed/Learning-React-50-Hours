import React from "react";

const Person = (person) => {
  return (
    <>
      <h2>{person.name}</h2>
      <p>{person.age}</p>
    </>
  );
};

export default Person;
