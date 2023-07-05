import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Table from "./Table";
import Student from "./Student";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/Student" element={<Student/>}/>
  <Route path='/Table' element={<Table/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

