import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="Student"> Student</Link>
      <br />
      <Link to="Table">Table</Link>
    </div>
  );
}
