import React, { useState } from "react";
import { reviews } from "./data";

const Review = () => {
  //const [review, setreview] = useState(...reviews);
  const [index, setIndex] = useState(0);
  const { name, job, imageurl, description } = reviews[index];
  const changeNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextPerson = () =>{
    setIndex((index)=>{
        let nextPerson = index+1;
        return changeNumber(nextPerson)
    });
  }
  const prevPerson = () =>{
    setIndex((index)=>{
        let prevPerson = index-1;
        return changeNumber(prevPerson)
    });
  }
  return (
    <div className="max-w-md bg-blue-100 py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={imageurl}
          alt={name}
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{name}</h2>
        <h5 className="text-sky-600">{job}</h5>
        <p className="mt-2 text-stone-700">{description}</p>
      </div>
      <div className="flex justify-end mt-4">
        <button
          type="button"
          className="flex  justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={()=>prevPerson()}
        >
          Previous
        </button>
        <button
          type="button"
          className="flex  justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-4"
          onClick={()=>nextPerson()}
       >
          Next
        </button>
      </div>
    </div>
  );
};

export default Review;
