import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"

import Home from "./pages/Home";
import Plans from "./pages/services/plans";
import Homepage from "./pages/services/homepage";
import Works from "./pages/services/works";
import TinyCMS from "./pages/products/tinycms";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/plans" element={<Plans />} />
        <Route path="/services/homepage" element={<Homepage />} />
        <Route path="/services/works" element={<Works />} />
        <Route path="/products/tinycms" element={<TinyCMS />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

// https://qiita.com/minimumskills/items/da37eaf8f188095e1feb#contacjs
