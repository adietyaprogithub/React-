import React, { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState(
    "https://images.pexels.com/photos/14182933/pexels-photo-14182933.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
  );

  async function Imgo() {
    try {
      const responce = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await responce.json();
      setData(data.message);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      Imgo();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <img src={data} alt="dog" />
    </div>
  );
}
