import React from "react";
import { useState } from "react";

export default function App() {
  const [state, setstate] = useState([1, 2, 3, 4, 5, 6]);

  const handleclick = (num) => {
    const narr = state.filter((n) => n !== num);

    return setstate(narr);
  };

  return (
    <div>
      {state.map((num) => {
        return (
          <p key={num} onClick={() => handleclick(num)}>
            {num}
          </p>
        );
      })}
    </div>
  );
}
