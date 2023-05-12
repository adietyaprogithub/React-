import React from "react";
import Square from "./square";
import { useState } from "react";

export default function Board() {
  const [state, setstate] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winner) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] && state[c]) {
        return true;
      }
    }
    return false;
  };

  const iswnner = checkWinner();

  const handlClick = (index) => {
    const copystate = [...state];
    copystate[index] = isXTurn ? "X" : "O";
    setstate(copystate);
    setIsXTurn(!isXTurn);
  };

  return (
    <div>
      <div className="board-container">
        {iswnner ? (
          <>Someone Won </>
        ) : (
          <>
            <div className="board-row">
              <Square onClick={() => handlClick(0)} value={state[0]} />
              <Square onClick={() => handlClick(1)} value={state[1]} />
              <Square onClick={() => handlClick(2)} value={state[2]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handlClick(3)} value={state[3]} />
              <Square onClick={() => handlClick(4)} value={state[4]} />
              <Square onClick={() => handlClick(5)} value={state[5]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handlClick(6)} value={state[6]} />
              <Square onClick={() => handlClick(7)} value={state[7]} />
              <Square onClick={() => handlClick(8)} value={state[8]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
