import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [hamBurger, setHamBurger] = useState(false);
  return (
        <nav className="text-white flex w-full justify-between items-center py-8 lg:px-20 px-6 shadow-xl z-20 ">
      <a className="text-3xl font-bold" href="">
        <img src="logo" alt="" />
        Bitsan
      </a>

      <div className={`CENTER ${hamBurger ? 'top-0 right-0' : 'top-0 md:-right-0 -right-[70vw]'} flex md:flex-row flex-col md:relative md:h-max h-screen md:w-max w-[70vw]  fixed md:gap-[2rem] gap-[3.125rem] md:items-center items-start md:p-0 md:py-0 py-[5rem] p-[2.375rem]`}>
        <Link
        onClick={() => setHamBurger(!hamBurger)}
         className="md:text-[1.125rem] hover:text-primaryYellow font-bold  text-xl " to={"/"}>
          Home
        </Link>
        <Link
        onClick={() => setHamBurger(!hamBurger)}
         className="md:text-[1.125rem] text-xl hover:text-primaryYellow font-bold " to={"/about"}>About us</Link>
        <Link
        onClick={() => setHamBurger(!hamBurger)}
         className="md:text-[1.125rem] text-xl hover:text-primaryYellow font-bold " to={"/faqs"}>Our Services</Link>
        <Link
        onClick={() => setHamBurger(!hamBurger)}
         className="md:text-[1.125rem] text-xl hover:text-primaryYellow font-bold " to={"/contact"}>Contact Us</Link> 
      </div>
     
      <div>
            <button className="px-6 py-4 bg-primaryYellow rounded-2xl ">Explore our solutions</button>
        </div>
      <button
        onClick={() => setHamBurger(!hamBurger)}
        className={`${hamBurger ? "ActiveBurger" : ""} hamburger `}
      >
        <p></p>
        <p></p>
        <p></p>
      </button>
      <div onClick={()=> setHamBurger(!hamBurger)} className={`overlay w-[30vw] h-screen md:hidden bg-black/5 backdrop-blur-[10px]  fixed ${hamBurger ?'left-0 top-0':'left-[100vw]'} `}></div>
    </nav>
  );
};

export default Nav;