import { useEffect, useState } from "react";
import Navegation from "./Navegation/Navegation";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import data from "./utils/data";
import "./styles.css";

function App() {
  const [nameQuery, setNameQuery] = useState("");
  const [categoryQuery, setCategoryQuery] = useState("");
  const [priceQuery, setPriceQuery] = useState(0);
  const [colorsQuery, setColorsQuery] = useState("");
  const [brandsQuery, setBrandsQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const filtered = data
      .filter((obj) => obj.title.toLowerCase().includes(nameQuery))
      .filter((obj) => obj.category.includes(categoryQuery))
      .filter((obj) => {
        const price = Number(priceQuery);
        if (price === 0) return true;
        if (price > 150) return Number(obj.newPrice) > 150;
        return (
          Number(obj.newPrice) >= price - 50 && Number(obj.newPrice) <= price
        );
      })
      .filter((obj) => obj.color.includes(colorsQuery))
      .filter((obj) =>
        obj.company.toLowerCase().includes(brandsQuery.toLowerCase())
      );

    setFilteredData(filtered);
  }, [nameQuery, categoryQuery, priceQuery, colorsQuery, brandsQuery]);

  return (
    <div>
      <Sidebar
        setCategoryQuery={setCategoryQuery}
        setPriceQuery={setPriceQuery}
        setColorsQuery={setColorsQuery}
      />
      <Navegation setNameQuery={setNameQuery} />
      <Recommended setBrandsQuery={setBrandsQuery} />
      <Products filteredData={filteredData} />
    </div>
  );
}

export default App;
