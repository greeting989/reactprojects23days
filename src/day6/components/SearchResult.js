import React from "react";
import { Suspense } from 'react';
import SearchItem from "./SearchItem";
import Loader from "./Loader";


const SearchResult = ({ searchResult }) => {
  console.log();
  return (
    <div>
      <h3 className="font-extrabold leading-10 tracking-wide text-blue-950 uppercase text-center text-2xl p-2 mt-2 mb-2">
        SearchResult
      </h3>
      <Suspense fallback={<h2>Loading...</h2>}>
      {searchResult.length>0 ?  (
        <div className="grid grid-cols-4 gap-4 ml-8 mr-2 ">
          {searchResult.map((rec, index) => {
            console.log(rec.recipe.dishType[0]);
            return (
              <>
                <SearchItem rec={rec.recipe} />
              </>
            );
          })}
        </div>
      ): (
        <h4 className="font-extrabold leading-10 tracking-wide text-blue-950 uppercase text-center text-l p-2 mt-2 mb-2">No results found</h4>
      ) }
      </Suspense>
    </div>
  );
};

export default SearchResult;
