import React,{useState} from "react";

const Tour = ({ tour,removeTour,key }) => {
  console.log(tour);
  const [readMore, setreadMore] = useState(false);
  return (
    <div class="max-w-lg mx-auto">
      <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <img class="rounded-t-lg" src={tour.image} alt={tour.name} />

        <div class="p-5">
          <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
            {tour.name}
          </h5>
          <p class="text-gray-900 font-bold text-xl tracking-tight float-right p-2">
            Rs {tour.price} /-
          </p>
          <p class="font-normal text-gray-700 mb-3">
            {readMore? tour.info : `${tour.info.substring(0, 200)}...`}
          </p>
          <span className="flex justify-between">
          <button
              type="button"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"   
              onClick={()=>setreadMore(!readMore)}
            >
              {readMore ? 'show less' : 'read more..'}
            </button>

            <button
              type="button"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"   
              onClick={()=>removeTour(tour.id)}
            >
              not interested
            </button>
          </span>
         
        </div>
      </div>
     
    </div>
  );
};

export default Tour;
