import React from "react";

const SearchItem = ({ rec, index }) => {
  console.log(rec)
  return (
    <div className="rounded overflow-hidden border w-9/12  bg-white mx-3 md:mx-0 lg:mx-0">
      <div className="w-full flex justify-between p-3">
        <div className="flex">
          <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
            <img src={rec.image} alt={rec.label} />
          </div>
          <span className="pt-1 ml-2 font-bold text-sm">
            {rec.label}<br/>
          </span>
         
        </div>
        <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
          <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
        </span>
      </div>
      <img className="w-full bg-cover" src={rec.image} alt={rec.label} />
      <div className="px-3 pb-2">
        <div className="pt-1">
          <div className="mb-2 text-sm text-justify">
          <span className=" font-bold text-sm text-orange-400">DishType : {rec.dishType[0].toLowerCase()}</span><br/>
          <span className=" font-bold text-sm text-orange-400">MealType : {rec.mealType[0].toLowerCase()}</span><br/>
          <span className="mt-1 font-bold ">Ingredients</span>
            <ol>
              {rec.ingredients.map((ingredient) => (
                <li>{ingredient.text}</li>
              ))}
            </ol>
          <span>
            {rec.healthLabels.map((la,index)=>{
                return(
                  <button
                  type="button"
                  class="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"
                >
                  {la}
                </button>
                )
            })}
          </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
