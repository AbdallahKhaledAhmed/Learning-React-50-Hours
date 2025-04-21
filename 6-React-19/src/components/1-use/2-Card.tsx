import { use } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { themeContext } from "./2-Theme";

const CardComp = () => {
  const [colorTheme, setColorTheme] = use(themeContext);
  return (
    <Card
      style={{
        width: "18rem",
        backgroundColor: colorTheme ? "hsl(0, 0%, 24%)" : "white",
        color: colorTheme ? "white" : "hsl(0, 0%, 24%)",
      }}
    >
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            setColorTheme(!colorTheme);
          }}
        >
          Change Theme
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardComp;
