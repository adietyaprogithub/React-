import React from "react";
import "./App.css";
import { FaSearch } from "react-icons/fa";

export default function App() {
  return (
    <div className="box">
      <div className="container">
        <FaSearch className="icon" />
        <p> Home</p>
        <p> About </p>
        <p> Info</p>
        <p> contact us</p>
      </div>

      <div className="second">
        <img
          className="imager"
          src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad non
          perferendis voluptatum porro eum corporis odio eligendi deleniti
          molestiae possimus repudiandae corrupti dolorem tempora odit
          blanditiis ut provident, veniam temporibus.
        </div>
      </div>
    </div>
  );
}
