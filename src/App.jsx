import { useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./CLIENT/Pages/HomePage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from "./HOSTEL/Pages/AUTH/Login";
import Registration from "./HOSTEL/Pages/AUTH/Registration";
import HostelHomePage from "./HOSTEL/Pages/HostelHomePage";
import ScrollToTop from "./Utilities/ScrollToTop";
import RoomDetails from "./HOSTEL/Pages/RoomDetails";

function App() {
  return (
    <div className="">
      <Router>
        <ScrollToTop />
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
        <Routes>
          <Route path="/roomdetails" element={<RoomDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
