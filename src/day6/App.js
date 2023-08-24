import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { recipeService } from "./services/recipefinder";
const App = () => {
  const [showRes, setshowRes] = useState(false);
  const [showbtn, setshowbtn] = useState(false);
 
  console.log(recipeService())

  function ShowInputBox() {
    return (
      <div className="flex flex-row ">
        <div class=" text-lg bg-white text-gray-800 w-11/12 m-auto p-2 rounded">
          <input
            class="bg-transparent border-none mr-3 px-2 leading-tight  focus:outline-none "
            type="text"
            placeholder="Search"
           
           
          />
        </div>
        <button
          className="bg-indigo-500 text-white ml-1 mt-2 p-1  rounded-full hover:bg-indigo-600"
          onClick={() => {
            setshowRes(showRes);
          }}
        >
          Go find recipes
        </button>
      </div>
    );
  }
  function Header() {
    const url = "https://source.unsplash.com/random";
    return (
      <div
        className="h-3/6 bg-gray-50 flex items-center"
        style={{
          backgroundImage:
            "url(" +
            "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <section className="w-full bg-cover bg-center py-32">
          <div className="container mx-auto text-center text-white">
            <h1 className="text-6xl font-medium mb-6">
              Welcome to RecipeFinder
            </h1>
            <p className="text-2xl mb-12">
              “There is no love sincerer than the love of food.”
            </p>
            {showRes && <ShowInputBox />}
            {showbtn || (
              <button
                className="bg-indigo-500 text-white mt-2 py-4 px-12 rounded-full hover:bg-indigo-600"
                onClick={() => {
                  setshowRes(!showRes);
                  setshowbtn(!showbtn);
                }}
              >
                Search
              </button>
            )}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
};

export default App;
