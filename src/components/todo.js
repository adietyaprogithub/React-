import React from "react";

export default function Todo(props) {

   

  return (
    <div>
      <div className="todo_style">
        <li>{props.text}
        <button onClick={() => {
             props.onSeletct(props.id)
        }
       
        }>delete</button>
         </li>
      </div>
    </div>
  );
}
