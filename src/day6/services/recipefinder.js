

export const recipeService = async()=>{
     fetch('https://jsonplaceholder.typicode.com/todos/1', {
        method: 'GET',
        headers: {
            'accept': 'application/json'
        }
    }).then((response)=>{
        console.log(response.json());
    }).then((data)=>{
        console.log(data);
    })
   
}

// export const fetchData = async () => {
//     const response = await fetch(`www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)
//     const newData = await response.json()
//      console.log(newData);
//  };