import React from "react";

const PortfolioCard = ({ name, profession, comments, img }) => {
  return (
    <div className="text-white md:p-[3.125rem] p-4 md:w-[47.5rem] w-[15.875rem] bg-primaryBlack rounded-xl border-[1px] border-primaryYellow flex flex-col md:gap-10 gap-4">
      <header className="flex items-center md:gap-5 gap-2">
        <img
          src={img}
          className="md:h-28 md:w-28 w-[2.1875rem] h-[2.1875rem] rounded-full md:border-[4px] border-[0.83px] border-primaryYellow"
          alt=""
        />
        <div className="info">
          <h3 className="md:text-2xl font-extrabold">{name}</h3>
          <p className="md:text-xl text-[0.8125rem] text-white/80">{profession}</p>
        </div>
      </header>
      <p className="md:text-xl text-[0.6875rem] text-white/80">{comments}</p>
    </div>
  );
};

export default PortfolioCard;
