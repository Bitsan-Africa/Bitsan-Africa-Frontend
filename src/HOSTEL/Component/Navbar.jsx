import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [hamBurger, setHamBurger] = useState(false);
  return (
    <nav className="text-[#1A1A1A] flex w-full justify-between items-center py-8 lg:px-20 px-6 shadow-xl z-20 ">
      {/* <a className="text-3xl font-bold" href="">
        <img src="logo" alt="" />
        Bitsan
      </a> */}
      <h1 className="relative font-bold text-3xl">
          BISTSAN <span className="absolute top-5 left-[52px]">HOSTEL</span>
        </h1>

      <div
        className={`CENTER ${
          hamBurger ? "top-0 right-0" : "top-0 md:-right-0 -right-[70vw]"
        } flex md:flex-row flex-col md:relative md:h-max h-screen md:w-max w-[70vw]  fixed md:gap-8 gap-[3.125rem] md:items-center items-start md:p-0 md:py-0 py-[5rem] p-[2.375rem]`}
      >
        <Link
          onClick={() => setHamBurger(!hamBurger)}
          className="md:text-[1.125rem] hover:text-primaryYellow font-bold  text-xl "
          to={"/"}
        >
          Home
        </Link>
        <Link
          onClick={() => setHamBurger(!hamBurger)}
          className="md:text-[1.125rem] text-xl hover:text-primaryYellow font-bold "
          to={"/about"}
        >
          Explore
        </Link>
        <Link
          onClick={() => setHamBurger(!hamBurger)}
          className="md:text-[1.125rem] text-xl hover:text-primaryYellow font-bold "
          to={"/faqs"}
        >
          About Us
        </Link>
        <Link
          onClick={() => setHamBurger(!hamBurger)}
          className="md:text-[1.125rem] text-xl hover:text-primaryYellow font-bold "
          to={"/contact"}
        >
          Contact Us
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <button className="border-[1px] border-black w-[8.3125rem] h-[2.5rem] rounded-lg flex justify-center items-center">
          Log in
        </button>
        <button className="border-[1px] border-black w-[8.3125rem] h-[2.5rem] rounded-lg flex justify-center items-center bg-primaryYellow">
          Sign up
        </button>
      </div>
      <button
        onClick={() => setHamBurger(!hamBurger)}
        className={`${hamBurger ? "ActiveBurger" : ""} hamburger `}
      >
        <p></p>
        <p></p>
        <p></p>
      </button>
      <div
        onClick={() => setHamBurger(!hamBurger)}
        className={`overlay w-[30vw] h-screen md:hidden bg-black/5 backdrop-blur-[10px]  fixed ${
          hamBurger ? "left-0 top-0" : "left-[100vw]"
        } `}
      ></div>
    </nav>
  );
};

export default Navbar;
