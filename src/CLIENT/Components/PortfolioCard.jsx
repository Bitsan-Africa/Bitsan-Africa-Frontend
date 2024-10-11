import React from "react";

const PortfolioCard = ({ name, profession, comments, img }) => {
  return (
    <div className="text-white p-[3.125rem] w-[47.5rem] bg-primaryBlack rounded-xl border-[1px] border-primaryYellow flex flex-col gap-10">
      <header className="flex items-center gap-5">
        <img
          src={img}
          className="h-28 w-28 rounded-full border-[4px] border-primaryYellow"
          alt=""
        />
        <div className="info">
          <h3 className="text-2xl font-extrabold">{name}</h3>
          <p className="text-xl text-white/80">{profession}</p>
        </div>
      </header>
      <p className="text-xl text-white/80">{comments}</p>
    </div>
  );
};

export default PortfolioCard;
