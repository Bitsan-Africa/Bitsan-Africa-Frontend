import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./CLIENT/Pages/HomePage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from "./CLIENT/Pages/AUTH/Login";
import Registration from "./CLIENT/Pages/AUTH/Registration";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
