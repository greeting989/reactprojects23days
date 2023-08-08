import React,{useEffect, useState} from 'react';
import { birthday_reminders } from './data';
import List from './List';
import "./style.css";
const App = () => {
    const [people, setPeople] = useState(birthday_reminders);
    const [reset,setReset]  = useState([]);
    useEffect(() => {
        setReset(people);
    }, []);
   function resetLoad(){
    setPeople(reset);
   }
  return (
   <main>
        <h2 className='peopleTitle'>{people.length} birthdays</h2>
        <List people={people} />
        <button onClick={()=>setPeople([])}>Clear All</button>
        <button onClick={()=>resetLoad()}>Reset</button>
   </main>
  )
}

export default App