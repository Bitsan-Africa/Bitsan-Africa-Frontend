import React from "react";

const WhyBitsanCard = ({ positioning, title, txt, numbs }) => {
  return (
    <div className={`w-full flex items-center ${positioning} `}>
      <div className="relative w-[39.5rem] flex flex-col gap-7 pl-[9rem] pt-[10.5rem]">
        <h1 className="text-[15rem] font-bold text-primaryBlack/10 absolute -left-0 bottom-[30%]">
          {numbs}
        </h1>
        <h2 className="text-6xl font-semibold">{title}</h2>
        <p>{txt}</p>
      </div>
    </div>
  );
};

export default WhyBitsanCard;
