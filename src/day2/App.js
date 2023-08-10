import React,{useState,useEffect} from 'react';
import Loading from "./Loading";
import Tours from './Tours';
import "./style.css";
const App = () => {
  const url = 'https://course-api.com/react-tours-project';
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const removeTour =(id)=>{
    const newTours = data.filter((tour,index)=>tour.id!==id);
    setData(newTours)
  }
  const fetchData  = async()=>{
    try{
        const response = await fetch(url);
        const tours = await response.json();
        setLoading(false);
        setData(tours);
    }catch(e){
      setLoading(false);
      console.log(e);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  if(data.length===0){
    return(
      <>
        <h3>No tours left</h3>
        <button onClick={()=>fetchData()}>Refresh</button>
      </>
    )
  }
  return (
    <div className="">
      <h5 className="text-gray-900 font-bold text-8xl tracking-tight mb-2 text-center">Our Tours</h5>
      <span className=""></span>
      <Tours tours={data} removeTour={removeTour}/>
    </div>
  )
}

export default App;