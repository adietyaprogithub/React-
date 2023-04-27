import React from "react";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [message, setmassage] = useState("");

  const checkNumber = (event) => {
    event.preventDefault();

    const randomNumber = 3;

    if (value === "") {
      setmassage(" Please Enter the number");
    } else if (Number(value) === randomNumber) {
      setmassage(" You have enterd the correct Number ");
    } else if (Number(value) < randomNumber) {
      setmassage(" number is smaller ");
    } else if (Number(value) > randomNumber) {
      setmassage(" number is larger ");
    } else {
      setmassage("guess again");
    }
    setValue("");
  };

  return (
    <div>
      <h1> Guess the Lucky Number </h1>
      <form onSubmit={checkNumber}>
        <label>
          Enter a Number :
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>

        <button type="submit">check </button>
      </form>

      {message}
    </div>
  );
}
