import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Home from "./Pages/Home";
import About from "./Pages/About";

const App = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [query, setQuery] = useState("chicken")
  const [searchInput, setsearchInput] = useState("")
  const recipeFinder = () => {
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?q=${query}&app_key=5ca92416e1c7d5789471fcf21408ab8a&_cont=CHcVQBtNNQphDmgVQ3tAEX4BYlB7GgQEQ2dFB2cSZVNzBQYPUXlSAzRAZlZ6AwMOEW0TAmZHZFZ0AgtVSjFHC2YWMV1wUQcVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&type=public&app_id=4f0970bd`
      )
      .then((response) => {
        setQuery(searchInput);
        setSearchResult(response.data.hits);      
      });
  };
  useEffect(() => {
    recipeFinder();
  }, [query])
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home searchInput={searchInput} setQuery={setQuery} setsearchInput={setsearchInput} recipeFinder={recipeFinder} searchResult={searchResult} />}/>
        <Route path="/aboutus" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
