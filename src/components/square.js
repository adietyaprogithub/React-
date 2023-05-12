import React from "react";

export default function Square(props) {
  return (
    <div
      onClick={props.onClick}
      className="square"
      style={{ border: "1px solid ", width: "100%", height: "100px" }}
    >
      <h5> {props.value} </h5>
    </div>
  );
}
