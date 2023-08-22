import React, { useState } from "react";
import GroceryItem from "./GroceryItem";

const GroceryBud = ({ grocery, setGrocery }) => {
  const [inputGroc, setinputGroc] = useState("");
  const addItems = () => {
    if(!inputGroc){
      alert('No items added')
     
    }else if(inputGroc){
      let newItem = [...grocery];
      let newGrocery = {
        id: Math.floor(Math.random() * 10) + 1,
        itemGrocery: inputGroc,
        completed: false,
      };
      setGrocery([...newItem, newGrocery]);
      console.log(newItem);
      setinputGroc("");
    }
   
  };
  const removeItem = (index) => {
    const updatedList = grocery.filter((curElement,Elmindex) => {
      return Elmindex !== index;
    });
    console.log()
    setGrocery(updatedList)
  };
  return (
    <div>
      <div class="relative mb-4 flex flex-wrap groceryDiv">
        <input
          type="text"
          class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-indigo bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] "
          placeholder="Groceries"
          value={inputGroc}
          onChange={(e) => setinputGroc(e.target.value)}
        />
        <button
          type="button"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addItems}
        >
          Add
        </button>
      </div>
      <GroceryItem grocery={grocery} setGrocery={setGrocery} removeItem={removeItem}/>
    </div>
  );
};

export default GroceryBud;
