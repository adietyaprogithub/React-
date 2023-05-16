import React from "react";
import About from "./Components/About";
import Home from "./Components/Home";
import Info from "./Components/Info";
import Topbar from "./Components/Topbar";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Topbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>

      <Routes>
        <Route path="/Info" element={<Info />}>
          {" "}
        </Route>
      </Routes>

      <Routes>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </Router>
  );
}
