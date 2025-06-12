
import React, { useState } from "react";
import './../styles/App.css';

const API_KEY = "e467712b257e418838be97cc881a71de";
const App = () => {
  
  const[ data , setData ] = useState()
  const [ query,setQuery] = useState();
  const cityDataHandler = () =>{
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`)
  .then((res) => res.json() )
  .then((data) =>setData(data));
  setQuery("");
  }
  console.log(data)
  return (
    <div>
        {/* Do not remove the main div */}
        <input className= "search" placeholder="Enter a city" value={query} type="text" onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => {
          if (e.key === "Enter") {
             cityDataHandler()
          }
        }}></input>
        {data && <div className="weather">
              <h4>{data?.name}</h4>
              <h2>{data?.main.temp} F</h2>
              <h4>{data?.weather[0].description}</h4>
        </div>}
    </div>
  )
}

export default App
