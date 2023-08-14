import React,{useEffect,useState} from 'react';
import { Questions } from './data';
import Question from "./Question";
import "./style.css";
//import Question1 from './Question1';
const App = () => {
 const [question, setQuestion] = useState(Questions);
  return (
    <div className='questionBackground'>
        <Question question={question} />
        {/* <Question1 /> */}
    </div>
  )
}

export default App;