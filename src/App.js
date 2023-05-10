import React from "react";
import Home from "./concepts/Router/Home";
import About from "./concepts/Router/About";
import Contact from "./concepts/Router/Contact";
import Navbar from "./concepts/Router/Navbar";
import Success from "./concepts/Router/Success";
import { Routes, Route } from "react-router-dom";
import NotFound from "./concepts/Router/NotFound";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
