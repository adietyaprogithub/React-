import React from "react";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import User from "./components/User";
import { Route, BrowserRouter, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/User"element={<User/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
