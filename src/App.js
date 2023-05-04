import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [number, setNumber] = useState(0);
  const url = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP";

  function handler(e) {
    setNumber(e.target.value);
  }

  async function Jim() {
    try {
      const responce = await axios.post(url, { mobile: number });
      console.log(responce.data);
    } catch {}
  }

  return (
    <div>
      <form action="">
        <input type="text" onChange={handler}  value={number}/>
        <button onClick={Jim}> Click Button </button>
      </form>
    </div>
  );
}
