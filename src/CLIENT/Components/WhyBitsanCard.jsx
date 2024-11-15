import React from "react";

const WhyBitsanCard = ({ positioning, title, txt, numbs }) => {
  return (
    <div className={`w-full flex items-center justify-start ${positioning} `}>
      <div className="relative md:w-[39.5rem] w-[18.5rem] flex flex-col md:gap-7 gap-4 md:pl-[9rem] pl-[2.4375rem] md:pt-[10.5rem] pt-[3.625rem]">
        <h1 className="md:text-[15rem] text-[3.75rem] font-bold text-primaryBlack/10 absolute -left-0 md:bottom-[30%] bottom-[58%]">
          {numbs}
        </h1>
        <h2 className="md:text-6xl text-xl font-semibold">{title}</h2>
        <p className="md:text-base text-[0.6875rem]">{txt}</p>
      </div>
    </div>
  );
};

export default WhyBitsanCard;
