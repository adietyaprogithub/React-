import React from "react";
import { useState } from "react";

export default function App() {
  
const [name , setName] = useState('')

const handler = (e) => {

  setName (e.target.value)
}

return(

  <div>
    <h2> name is {name}</h2>
    <input type="text"  placeholder="Enter Your name " value={name} onChange={handler}/>
  </div>
)


  };

  
  

