import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./navegation.css";

const Navegation = ({ setQuery }) => {
  return (
    <nav>
      <div>
        <input
          type="text"
          placeholder="Find Shoes"
          onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
        />
      </div>
      <div>
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Navegation;
