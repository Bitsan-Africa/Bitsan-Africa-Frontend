import React from "react";

const Hero = () => {
  return (
    <div className="lg:px-20 md:px-6 bg-custom bg-[url(/hostel.jpeg)] h-auto md:py-[10rem] py-11 bg-center bg-cover bg-no-repeat flex flex-col md:gap-[7.5rem] gap-4 justify-center items-center">
      <header className="text-white flex flex-col md:gap-4 gap-2">
        <h1 className="md:text-6xl text-2xl font-bold text-center">
          Explore comforting hostels for <br />
          your stay on and off campus
        </h1>
        <p className="md:text-2xl text-base text-white/70 font-medium text-center">
          From hostel to property sales, experience seamless <br /> connectivity
          and real estate solution.
        </p>
      </header>
      <div className="search md:text-base text-xs md:h-[22.375rem] h-[7.8125rem] md:rounded-3xl rounded-[5px] bg-primaryYellow md:px-7 px-5 flex justify-center items-center w-full">
        <div className="md:h-[9.125rem] h-[4.4375rem] bg-white w-full md:rounded-xl rounded-[5px] flex md:gap-5 gap-1.5 justify-center items-center px-8">
          <input
            className="md:h-[72px] h-[25px] md:rounded-lg rounded-sm border-2 border-black outline-none md:w-[18.75rem] w-[5.3125rem] md:pl-4 pl-1"
            type="text"
            placeholder="Location"
          />
          <select
            className="md:h-[72px] h-[25px] md:rounded-lg rounded-sm border-2 border-black outline-none md:w-[18.75rem] w-[5.3125rem] md:pl-4 pl-1"
            name=""
            id=""
          >
            <option value="">Type of room</option>
            <option value="">A room self Con.</option>
            <option value="">A room and parlour</option>
          </select>{" "}
          <select
            className="md:h-[72px] h-[25px] md:rounded-lg rounded-sm border-2 border-black outline-none md:w-[18.75rem] w-[5.3125rem] md:pl-4 pl-1"
            name=""
            id=""
          >
            <option value="">Price Range</option>
            <option value="">200k - 500k</option>
          </select>
          <button className="md:w-[8.3125rem] md:h-[4.4375rem] flex justify-center items-center w-[3.625rem] h-[1.5625rem] md:rounded-lg rounded-sm border-primaryBlack md:border-[1px] border-[0.25px] bg-primaryYellow md:text-base text-[11px] md:px-0 px-2 font-bold">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
