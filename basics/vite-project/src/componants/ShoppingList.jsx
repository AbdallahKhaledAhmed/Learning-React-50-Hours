import React, { useState } from "react";

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState([]);
  const [input1Value, setInput1Value] = useState("");
  const [input2Value, setInput2Value] = useState(0);
  return (
    <div>
      {shoppingList.map((obj) => (
        <>
          <li>{obj.name}</li>
          <li>{obj.price}</li>
        </>
      ))}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setShoppingList([
            ...shoppingList,
            { name: input1Value, price: input2Value },
          ]);
        }}
      >
        <input type="text" onChange={(e) => setInput1Value(e.target.value)} />
        <input type="number" onChange={(e) => setInput2Value(e.target.value)} />
        <input type="submit" value={"Add Item"} />
      </form>
    </div>
  );
};

export default ShoppingList;
