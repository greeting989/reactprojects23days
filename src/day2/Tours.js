import React from 'react'
import Tour from './Tour';

const Tours = ({tours}) => {
  return (
    <div>
        {tours.map((tour,index)=>{
          return(
            <Tour tour={tour} key={index}/>
          )
        })}
    </div>
  )
}

export default Tours;