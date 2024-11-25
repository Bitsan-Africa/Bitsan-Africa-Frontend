import React from "react";

const TestimonialCard = ({ name, profession, comments, img }) => {
  return (
    <div className="bg-custom-yellow-gradient md:p-6 p-2 md:w-[27.5625rem] w-[12.9375rem] bg-primaryBlack md:rounded-2xl rounded-[4px] md:border-[1px] border-[0.0169rem] border-[#211F30] flex flex-col gap-4">
      <header className=" flex items-center md:gap-6 gap-1.5">
        <img src={img} className="md:h-16 md:w-16 w-[2.1875rem] h-[2.1875rem] rounded-full" alt="" />
        <div className="info">
          <h3 className="font-DMSANS">{name}</h3>
          <p className="italic font-DMSANS md:text-base text-sm">
            {profession}
          </p>
        </div>
      </header>
      <p className="md:text-base text-[0.6875rem]">{comments}</p>
    </div>
  );
};

export default TestimonialCard;
