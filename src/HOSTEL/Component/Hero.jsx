import React from "react";

const Hero = () => {
  return (
    <div className="lg:px-20 px-6 bg-custom bg-[url(/hostel.jpeg)] h-auto py-[10rem] bg-center bg-cover bg-no-repeat flex flex-col gap-[7.5rem] justify-center items-center">
      <header className="text-white flex flex-col gap-4">
        <h1 className="text-6xl font-bold text-center">
          Explore comforting hostels for <br />
          your stay on and off campus
        </h1>
        <p className="text-2xl text-white/90 font-medium text-center">
          From hostel to property sales, experience seamless <br /> connectivity
          and real estate solution.
        </p>
      </header>
      <div className="search h-[22.375rem] rounded-3xl bg-primaryYellow px-7 flex justify-center items-center w-full">
        <div className="h-[9.125rem] bg-white w-full rounded-xl flex gap-5 justify-center items-center px-8">
          <input
            className="h-[72px] rounded-lg border-2 border-black outline-none w-[18.75rem] pl-4"
            type="text"
            placeholder="Location"
          />
          <select
            className="h-[72px] rounded-lg border-2 border-black outline-none w-[18.75rem] pl-4"
            name=""
            id=""
          >
            <option value="">Type of room</option>
            <option value="">A room self Con.</option>
            <option value="">A room and parlour</option>
          </select>{" "}
          <select
            className="h-[72px] rounded-lg border-2 border-black outline-none w-[18.75rem] pl-4"
            name=""
            id=""
          >
            <option value="">Price Range</option>
            <option value="">200k - 500k</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Hero;
