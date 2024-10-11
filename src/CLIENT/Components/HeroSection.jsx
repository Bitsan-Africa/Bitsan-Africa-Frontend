import React, { useEffect, useState } from "react";
import TextTransition from "react-text-transition";
import { presets } from "react-text-transition";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const TEXTS = [
    "Accommodation",
    "Hotel and Suite",
    "Wifi Range",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % TEXTS.length);
    }, 3000); // 3 seconds interval

    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="mt-24 text-white flex flex-col gap-40">
      <header className="flex flex-col gap-8 items-center justify-center">
        {/* <h1 className="text-6xl font-black ">
          All In One Solution <br />
          For <span className="text-primaryYellow">Accomodation</span>
        </h1> */}
        <h1 className="text-6xl font-black relative">
          All In One Solution <br />
          For
          <span className="text-primaryYellow absolute whitespace-nowrap w-full pl-2">
            <TextTransition springConfig={presets.gentle}>
              {TEXTS[index]}
            </TextTransition>

          </span>
        </h1>
        <p className="font-medium text-2xl text-center">
          From hostel to property sales, experience seamless connectivity and
          <br /> real estate solution.
        </p>
        <button className="px-32 text-xl py-7 bg-primaryYellow rounded-2xl">
          Explore More Solutions
        </button>
      </header>
      <div className="bottomImages flex justify-between">
        <img className="w-72" src="/SVGS/heroimg1.svg" alt="" />
        <img className="w-72" src="/SVGS/heroimg2.svg" alt="" />
        <img className="w-72" src="/SVGS/heroimg3.svg" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
