import "./sidebar.css";
import Category from "./Category";
import Colors from "./Colors";
import Price from "./Price";

const Sidebar = ({ setCategoryQuery, setPriceQuery, setColorsQuery }) => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <a href="#">
          <h1>🛒</h1>
        </a>
      </div>
      <section>
        <Category setCategoryQuery={setCategoryQuery} />
        <Price setPriceQuery={setPriceQuery} />
        <Colors setColorsQuery={setColorsQuery} />
      </section>
    </section>
  );
};

export default Sidebar;
