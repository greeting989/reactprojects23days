import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchResult from "../components/SearchResult";
import ShowInputBox from "../components/SearchInput";
import Footer from "../components/Footer";

const Home = ({
  searchInput,
  setQuery,
  setsearchInput,
  recipeFinder,
  searchResult,
}) => {
  return (
    <div>
      <Navbar />
      <Header />
      <ShowInputBox
        searchInput={searchInput}
        setQuery={setQuery}
        setsearchInput={setsearchInput}
        recipeFinder={recipeFinder}
      />
      <SearchResult searchResult={searchResult} />
      <Footer />
    </div>
  );
};

export default Home;
