import React, { useEffect, useState } from "react";
import TextTransition from "react-text-transition";
import { presets } from "react-text-transition";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const TEXTS = ["Accommodation", "Hotel and Suite", "Wifi Range"];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % TEXTS.length);
    }, 3000); // 3 seconds interval

    return () => clearTimeout(intervalId);
  }, []);

  return (
    <section className="mt-24 text-white flex flex-col gap-40">
      <header className="flex flex-col md:gap-8 gap-4 items-center justify-center">
        <h1 className="md:text-6xl text-2xl font-black relative">
          All In One Solution <br />
          For
          <span className="text-primaryYellow absolute whitespace-nowrap w-full pl-2">
            <TextTransition springConfig={presets.gentle}>
              {TEXTS[index]}
            </TextTransition>
          </span>
        </h1>
        <p className="font-medium md:text-2xl text-center md:w-1/2 w-4/5">
          From hostel to property sales, experience seamless connectivity and
          real estate solution.
        </p>
        <button className="md:px-32 px-9 py-3 text-xl md:py-7 bg-primaryYellow rounded-2xl">
          Explore More Solutions
        </button>
      </header>
      <div className="bottomImages relative flex w-full md:justify-between justify-center overflow-x-hidden">
        <img
          className="md:w-72 w-36 md:relative absolute md:-left-0 -left-[4.5rem] bottom-0"
          src="/SVGS/heroimg1.svg"
          alt=""
        />
        <img className="md:w-72 w-36" src="/SVGS/heroimg2.svg" alt="" />
        <img
          className="md:w-72 w-36 md:relative absolute md:-right-0 -right-[4.5rem] bottom-0"
          src="/SVGS/heroimg3.svg" 
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
