const message = "Hello and Welcome";
const name = " John";
const Greet = () => {
  return (
    <>
      <h1>{message + name}</h1>
      <p>today is {new Date().toString()}</p>
    </>
  );
};

export default Greet;
