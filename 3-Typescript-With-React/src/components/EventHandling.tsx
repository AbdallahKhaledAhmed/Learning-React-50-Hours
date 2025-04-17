import { MouseEvent } from "react";

const handleEnter = (e: MouseEvent<HTMLDivElement>) => {
  console.log("Mouse Entered", e.currentTarget);
};
const handleClick = (e: MouseEvent<HTMLInputElement>) => {
  console.log("Mouse Clicked", e.currentTarget);
};
const EventHandling = () => {
  return (
    <div onClick={handleEnter}>
      <input type="text" />
      <input type="submit" onClick={handleClick} />
    </div>
  );
};

export default EventHandling;
