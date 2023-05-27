import React from "react";
import Admin from "./Admin";
import User from "./User";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="./Admin">Admin</Link>
      <Link to="./User">User</Link>
    </div>
  );
}
