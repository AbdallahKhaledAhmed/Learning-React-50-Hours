import { accordionsData } from "../utils/data.js";
import Accordion from "./Accordion";
const AccordionList = () => {
  return (
    <section className="container">
      {accordionsData.map((item) => (
        <Accordion
          title={item.title}
          content={item.content}
          key={Math.random()}
        />
      ))}
    </section>
  );
};

export default AccordionList;
