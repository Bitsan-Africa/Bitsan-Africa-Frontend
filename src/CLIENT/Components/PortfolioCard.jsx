import React from "react";

const PortfolioCard = () => {
  return (
    <div className="text-white p-[3.125rem] w-[47.5rem] bg-primaryBlack rounded-xl border-[1px] border-primaryYellow flex flex-col gap-10">
      <header className="flex items-center gap-5">
        <img
          src="/image.png"
          className="h-28 w-28 rounded-full border-[4px] border-primaryYellow"
          alt=""
        />
        <div className="info">
          <h3 className="text-2xl font-extrabold">Saheed Turaki</h3>
          <p className="text-xl text-white/80">Student</p>
        </div>
      </header>
      <p className="text-xl text-white/80">
        Bitsan platform has been such a great experience using one of their
        services is top notch without any regrets. I was able to book my hostel
        through their website Bitsan hostel accommodations.
      </p>
    </div>
  );
};

export default PortfolioCard;
