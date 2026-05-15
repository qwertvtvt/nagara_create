import { useState, useEffect } from "react"
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css"

import Home from "./pages/Home";
import Plans from "./pages/Plans";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

// https://qiita.com/minimumskills/items/da37eaf8f188095e1feb#contacjs