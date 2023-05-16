import React from "react";
import { useState } from "react";
import Todo from "./components/todo";
import "./App.css";

export default function App() {
  const [inputlist, setinputlist] = useState("");
  const [items, setitems] = useState([]);

  const itemEvent = (event) => {
    setinputlist(event.target.value);
  };

  const listofitem = () => {
    setitems((olditems) => {
      return [...olditems, inputlist];
    });
    setinputlist("");
  };

  const deleteItoms = (id) => {
    setitems((olditems) => {
      return olditems.filter((arrelem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />

        <h1> To Do List </h1>
        <br />
        <input
          type="text"
          placeholder="Enter the Name "
          onChange={itemEvent}
          value={inputlist}
        />
        <button onClick={listofitem}> + </button>

        <ol>
          {items.map((itemval, index) => {
            return (
              <Todo
                key={index}
                id={index}
                text={itemval}
                onSeletct={deleteItoms}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}
