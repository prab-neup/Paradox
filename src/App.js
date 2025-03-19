import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Downloads from "./components/Downloads";
import Career from "./components/Career";
import Pricing from "./components/Pricing";
import "./App.css";

function App() {
  return (
    <div>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/downloads">Download</Link>
        <Link to="/career">Career</Link>
        <Link to="/pricing">Pricing</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/career" element={<Career />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
