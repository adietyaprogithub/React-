import React from "react";
import axios from "axios";
import { useState } from "react";



export default function App() {
  const [data, setData] = useState();

  async function dog() {
    try {
      const responce = await axios("https://dog.ceo/api/breeds/image/random");
      setData(responce.data.message);
    } catch (error) {
      console.log(error.error);
    }
  }

  return (
    <div>
      <button onClick={dog}> Click Me </button>
      <img src={data} alt="" />
    </div>
  );
}
