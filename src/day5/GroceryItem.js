import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'


const GroceryItem = ({grocery,removeItem}) => {
  return (
   <div>
        {grocery.map((item,index)=>(
            <span className='flex justify-between items-stretch bg-amber-50 mt-2 text-lg ' key={item.id}>
                <p className="h-6 w-6 text-zinc-950 ">{item.itemGrocery}</p>
                <XMarkIcon className="h-6 w-6 text-zinc-950" onClick={()=>removeItem(index)}/>
            </span>
        ))}
   </div>
  )
}

export default GroceryItem;