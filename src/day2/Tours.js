import React from 'react'
import Tour from './Tour';

const Tours = ({tours,removeTour}) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
        {tours.map((tour,index)=>{
          return(
            <Tour tour={tour} key={index} removeTour={removeTour}/>
          )
        })}
    </div>
  )
}

export default Tours;