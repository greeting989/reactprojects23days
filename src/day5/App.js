import React, { useState } from "react";
import GroceryBud from "./GroceryBud";
import "./style.css";

const App = () => {
  const [grocery, setGrocery] = useState([
    {
      id: Math.floor(Math.random() * 10) + 1,
      itemGrocery: "Sugar",
      completed: true,
    },
    {
      id: Math.floor(Math.random() * 10) + 1,
      itemGrocery: "Salt",
      completed: false,
    },
    {
      id: Math.floor(Math.random() * 10) + 1,
      itemGrocery: "Flour",
      completed: false,
    },
  ]);
  return (
    <div className="groceryMain">
      <GroceryBud grocery={grocery} setGrocery={setGrocery} />
    </div>
  );
};

export default App;
