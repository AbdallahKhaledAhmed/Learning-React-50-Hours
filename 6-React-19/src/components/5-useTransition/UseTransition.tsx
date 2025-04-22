import { useState, useTransition } from "react";
import Contact from "./Contact";
import Home from "./Home";
import Posts from "./Posts";

function showComponent(compName: string) {
  switch (compName) {
    case "Home":
      return <Home />;

    case "Contact":
      return <Contact />;

    case "Posts":
      return <Posts />;

    default:
      return <Home />;
  }
}

const UseTransition = () => {
  const [comp, setComp] = useState("Home");
  const [isPending, setTransition] = useTransition();
  function changePage(compName: string) {
    setTransition(() => {
      setComp(compName);
    });
  }
  return (
    <div>
      <hr />
      <br />
      <div>
        <button
          onClick={() => {
            changePage("Home");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            changePage("Posts");
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            changePage("Contact");
          }}
        >
          Contact
        </button>
      </div>
      {isPending ? <p>loading...</p> : showComponent(comp)}
    </div>
  );
};

export default UseTransition;
