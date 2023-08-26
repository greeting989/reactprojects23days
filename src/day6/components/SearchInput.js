import React from "react";

function ShowInputBox({setsearchInput,searchInput,recipeFinder,setQuery}) {
  return (
    <div className=" grid grid-rows-1 grid-cols-1 content-start h-40 bg-slate-300">
      <div className=" text-lg bg-white text-gray-800  m-auto p-2 rounded">
        <input
          type="text"
          placeholder="search"
          className="bg-transparent border-none mr-3 px-2 leading-tight w-full focus:outline-none "
          value={searchInput}
          onChange={(e)=>{
            setsearchInput(e.target.value);
           
          }}
        />
      </div>
      <div className="m-auto">
        <button
          className="bg-indigo-500 text-white ml-1 mt-2 p-4  mb-2 rounded-full hover:bg-indigo-600 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
          onClick={() => {
            recipeFinder();
          }}
        >
          Go find recipes
        </button>
      </div>
    </div>
  );
}

export default ShowInputBox;
