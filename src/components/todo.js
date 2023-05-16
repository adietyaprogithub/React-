import React from "react";
import './todo.css'

export default function Todo(props) {

   

  return (
    <div>
      <div className="todo_style">
        <li>{props.text}
        <button className="btn" onClick={() => {
             props.onSeletct(props.id)
        }
       
        }>delete</button>
         </li>
      </div>
    </div>
  );
}
