import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#222F3A] py-8 lg:px-20 px-6 flex flex-col md:gap-24 gap-8">
      <div className="text-gray-300 md:flex-row flex-col flex justify-between md:items-center md:gap-0 gap-8">
        <h1 className="relative font-bold text-3xl text-white">
          BISTSAN <span className="absolute top-5 left-[52px]">HOSTEL</span>
        </h1>

        <div className="senter flex flex-col gap-4">
          <Link className="text-sm font-medium" to={"/"}>
            Home
          </Link>
          <Link className="text-sm font-medium" to={"/"}>
            Explore
          </Link>
          <Link className="text-sm font-medium" to={"/"}>
            Contact Us
          </Link>
        </div>
        <div className="senter flex flex-col gap-8">
          <header className="flex flex-col gap-4">
            <Link className="text-xs font-medium" to={"/"}>
              NEWSLETTER & SPECIAL PROMO
            </Link>
            <form className="h-[3.625rem] flex items-center ">
              <input
                type="text"
                className="w-[21.875rem] text-black outline-none bg-white italic border-none rounded-l-xl h-full pl-4"
                placeholder="Enter your Email here"
              />
              <button className="w-[10.75rem] bg-primaryYellow rounded-r-xl h-full font-bold text-black">
                Subscribe
              </button>
            </form>
          </header>

          <div className="flex justify-between md:flex-row flex-col md:gap-0 gap-8">
            <div className="senter flex flex-col gap-4">
              <Link className="text-sm font-medium" to={"/"}>
                Find Us
              </Link>
              <Link className="text-sm font-medium text-white" to={"/"}>
                No 14 Bode Thomas Lagos state
              </Link>
              <Link className="text-sm font-medium" to={"/"}>
                Everyday from 10 am to 8 pm
              </Link>
            </div>
            <div className="senter flex flex-col gap-4">
              <Link className="text-sm font-medium" to={"/"}>
                Contact Us
              </Link>
              <Link className="text-sm font-medium" to={"/"}>
                +234 000 152 2222
              </Link>
              <Link className="text-sm font-medium" to={"/"}>
                uthmanabdullahi2020@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-gray-200">
        <p className="text-[10px]">© 2024 — Copyright</p>
        <p className="text-[10px]">Privacy</p>
      </div>
    </footer>
  );
};

export default Footer;
