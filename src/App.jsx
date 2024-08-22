import { useState, useEffect } from "react"
import blehimg from "./img/bleh.jpg"
import meguDance from "./img/MeguDanceGIF.gif"

const App = () => {
  const [time, setTime] = useState(()=> {
    const savedNumber = localStorage.getItem("number");
    return savedNumber !== null ? JSON.parse(savedNumber) : 0;
  });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevNumber) => {
        const newNumber = prevNumber + 1;
        localStorage.setItem("number", JSON.stringify(newNumber));
        return newNumber;
      });
    }, 2360);

    return () => clearInterval(interval);
  }, []);
  
  return (

    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[90vw] h-[90vh] bg-[#e4e4e4dd] rounded-[20px] flex flex-col justify-center items-center">
        <p className="text-[55px]">Webpage in the making</p>
        <img src={meguDance} alt="bleh"/>
        <div className="flex flex-col items-center">
          <p>You have watched Megu dance <b>{time}</b> times</p>
          <button onClick={()=>setTime(0)} className="mt-3 bg-white p-[2px_4px] rounded-lg">reset</button>
        </div>
      </div>
    </div>
  )
}

export default App