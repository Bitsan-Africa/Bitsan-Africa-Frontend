import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./CLIENT/Pages/HomePage";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
