import { useState } from "react";
import "./styles.css";
import { FaSearch } from "react-icons/fa";
const HiddenSearchBar = () => {
  const [open, setOpen] = useState(false);
  const [bgColor, setBgColor] = useState();
  const handleclick = (e) => {
    if (e.target.className === "container") {
      setOpen(false);
      setBgColor("white");
    } else {
      setBgColor("#1a1a1a");
    }
  };
  return (
    <section
      onClick={handleclick}
      className="container"
      style={{ backgroundColor: bgColor }}
    >
      {open ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch
          onClick={() => setOpen(true)}
          style={{
            cursor: "pointer",
            boxSizing: "content-box",
            padding: "2rem",
          }}
        />
      )}
    </section>
  );
};
export default HiddenSearchBar;
