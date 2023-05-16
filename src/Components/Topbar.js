import React from "react";
import "./topbar.css"
import About from "./About";
import Info from "./Info";
import Home from "./Home";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="container">
      <ul className="under">
        <div className="list">
          <Link to="/ " className="link">
            {" "}
            Home
          </Link>
        </div>
        <div className="list">
          <Link to="/Info" className="link">
            {" "}
            Info
          </Link>
        </div>
        <div className="list">
          <Link to="/About" className="link">
            {" "}
            About
          </Link>
        </div>
      </ul>
    </div>
  );
}
