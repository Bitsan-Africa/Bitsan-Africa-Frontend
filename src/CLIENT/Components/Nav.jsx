import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [hamBurger, setHamBurger] = useState(false);
  return (
    <nav className="text-white flex justify-between items-center py-8 lg:px-20 px-6 shadow-xl z-20">
      <a className="text-3xl font-bold" href="">
        <img src="logo" alt="" />
        Bitsan
      </a>

      <div
        className={` ${
          hamBurger ? "top-0 right-0" : "top-0 md:-right-0 -right-[70vw]"
        } fixed md:bg-transparent bg-primaryYellow flex md:flex-row flex-col md:relative md:h-max h-screen md:w-max w-[70vw]  md:gap-[2rem] gap-[3.125rem] md:items-center items-start md:p-0 md:py-0 py-[5rem] p-[2.375rem] z-20`}
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
          About us
        </Link>
        <Link
          onClick={() => setHamBurger(!hamBurger)}
          className="md:text-[1.125rem] text-xl hover:text-primaryYellow font-bold "
          to={"/faqs"}
        >
          Our Services
        </Link>
        <Link
          onClick={() => setHamBurger(!hamBurger)}
          className="md:text-[1.125rem] text-xl hover:text-primaryYellow font-bold "
          to={"/contact"}
        >
          Contact Us
        </Link>
      </div>

      <div>
        <button className="md:flex hidden px-6 py-4 bg-primaryYellow rounded-2xl ">
          Explore our solutions
        </button>
      </div>
      <div
        onClick={() => setHamBurger(!hamBurger)}
        className={`hamburger ${hamBurger ? "ActiveBurger" : ""}  `}
      >
        <p className="bg-white text-white"></p>
        <p className="bg-white"></p>
        <p className="bg-white"></p>
      </div>
      <div
        onClick={() => setHamBurger(!hamBurger)}
        className={`overlay w-[30vw] h-screen md:hidden bg-black/5 backdrop-blur-[10px]  fixed ${
          hamBurger ? "left-0 top-0" : "left-[100vw]"
        } `}
      ></div>
    </nav>
  );
};

export default Nav;
