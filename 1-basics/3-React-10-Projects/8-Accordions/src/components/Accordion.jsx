import React, { useState } from "react";
import "../styles.css";
const Accordion = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  const handleclick = () => {
    setOpen(!open);
  };
  return (
    <section className="accordion-card" onClick={handleclick}>
      <div className="header">
        <div className="card-title">{title}</div>
        <p className="icon">{!open ? "+" : "-"}</p>
      </div>
      {open && <p className="card-info">{content}</p>}
    </section>
  );
};

export default Accordion;
