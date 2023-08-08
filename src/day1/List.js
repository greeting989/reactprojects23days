import React from 'react'

const List = ({people}) => {

  return (
   <>
        {people.map((person)=>{
            const {name,age,birthday,profile_img_url} = person;
            return(
                <div className='peopleDiv' > 
                    <img src={profile_img_url} alt={name}/>
                    <span>
                    <h2>{name}</h2>
                    <h5>{age}</h5>
                    <p>{birthday}</p>
                    </span>     
                </div>
            )
        })}
   </>
  )
}

export default List;