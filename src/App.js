import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [info, setInfo] = useState([]);

  async function getDetail() {
    try {
      const response = await fetch(" https://reqres.in/api/users/");
      const data = await response.json();
      setInfo(data.data);
    } catch (error) {
      console.log("if the error come ", error);
    }
  }

  function Jim() {
    return(
      <div>
      <button onClick={getDetail}> click me </button>
      <ul>
        {info.map((user) => (
          <li key={user.id}>
            <div> Id : {user.id}</div>
            <div> Email: {user.email}</div>
            <div>FIrst_name :{user.first_name}</div>
            <div>Last_Name: {user.last_name}</div>
            <div>
              Avatar : <img src={user.avatar} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </div>
    )
  }

  return (
    <div>
      <Jim />
    </div>
  );
}
