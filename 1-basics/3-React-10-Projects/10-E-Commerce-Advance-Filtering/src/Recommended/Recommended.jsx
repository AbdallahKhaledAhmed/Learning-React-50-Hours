import React, { useState } from "react";
import "./recommended.css";

const Recommended = ({ setBrandsQuery }) => {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const brands = ["All", "Nike", "Adidas", "Puma", "Vans"];

  const handleClick = (brand) => {
    setSelectedBrand(brand);
    setBrandsQuery(brand === "All" ? "" : brand);
  };

  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        {brands.map((brand, index) => (
          <button
            className={`btns ${selectedBrand === brand ? "selected" : ""}`}
            key={index}
            onClick={() => handleClick(brand)}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
