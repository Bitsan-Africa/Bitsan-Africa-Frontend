import React from "react";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <section className="relative pt-[7.5rem] flex flex-col gap-24 bg-[#F7F7F7] pb-11 lg:px-20 px-6">
      <img
        src="/SVGS/telephone.svg"
        className="absolute top-0 right-7 opacity-30"
        alt=""
      />
      <img
        src="/SVGS/telephone2.svg"
        className="absolute bottom-0 left-7 opacity-30"
        alt=""
      />
      <h1 className="font-semibold text-6xl text-center">
        What our clients <br /> has to say
      </h1>
      <div className="flex flex-col gap-[4.1875rem]">
        <div className="Portfolios flex justify-center items-center">
          <PortfolioCard />
        </div>
        <div className="flex justify-between items-center">
          <p className="w-[65px] h-[65px] bg-primaryYellow opacity-0 rounded-full flex justify-center items-center">
            <i
              className="text-white text-2xl font-bold fa fa-chevron-left"
              aria-hidden="true"
            ></i>
          </p>

          <div className=".dots flex gap-2">
            <p className="w-[15px] h-[15px] bg-primaryYellow rounded-full"></p>
            <p className="w-[15px] h-[15px] bg-[#D9D9D9] rounded-full"></p>
            <p className="w-[15px] h-[15px] bg-[#D9D9D9] rounded-full"></p>
            <p className="w-[15px] h-[15px] bg-[#D9D9D9] rounded-full"></p>
            <p className="w-[15px] h-[15px] bg-[#D9D9D9] rounded-full"></p>
          </div>
          <p className="w-[65px] h-[65px] bg-primaryYellow rounded-full flex justify-center items-center">
            <i
              className="text-white text-2xl font-bold fa fa-chevron-right"
              aria-hidden="true"
            ></i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
