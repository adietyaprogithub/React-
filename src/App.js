import React, { useState } from "react";

export default function App() {
  const [state, setstate] = useState([1, 2, 3, 4, 5, 6]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNumber = () => {
    if (inputValue !== "") {
      const newNumber = parseInt(inputValue);
      setstate([...state, newNumber]);
      setInputValue("");
    }
  };

  const handleclick = (num) => {
    const updatedState = state.filter((n) => n !== num);
    setstate(updatedState);
  };

  return (
    <div>
      {state.map((num) => (
        <p key={num} onClick={() => handleclick(num)}>
          {num}
        </p>
      ))}

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={handleAddNumber}>Add Number</button>
    </div>
  );
}
