import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./CLIENT/Pages/HomePage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from "./HOSTEL/Pages/AUTH/Login";
import Registration from "./HOSTEL/Pages/AUTH/Registration";
import HostelHomePage from "./HOSTEL/Pages/HostelHomePage";

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
        <Routes>
          <Route path="/Hostel" element={<HostelHomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
