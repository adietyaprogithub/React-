import React from "react";
import { useState } from "react";

export default function App() {
  const [num1, setnum1] = useState();
  const [num2, setnum2] = useState();
  const [data, setdata] = useState();

  const first = (e) => {
    setnum1(parseInt(e.target.value));
  };

  const second = (e) => {
    setnum2(parseInt(e.target.value));
  };

  const add = () => {
    setdata(num1 + num2);
  };

  const minus = () => {
    setdata(num1 - num2);
  };

  const multiply = () => {
    setdata(num1 * num2);
  };

  const division = () => {
    setdata(num1 / num2);
  };

  return (
    <div>
      <input type="text" placeholder="Enter a Number" onChange={first} />

      <input type="text" placeholder="Enter a Number" onChange={second} />
      <a>=</a>
      <h2>{data}</h2>
      <h2></h2>

      <br />

      <div>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={division}>/</button>
      </div>
    </div>
  );
}
