import React from "react";

const ReasonToChooseUsCard = ({ title, txt }) => {
  return (
    <div className="flex flex-col md:w-[24.0625rem] w-[10.6875rem] md:gap-4 gap-2 bg-[#FBFBFB] md:p-8 p-2 border-[#EAEAEA] border-[1px] rounded-lg">
      <h1 className="text-primaryBlack font-semibold md:text-2xl text-base">
        {title}
      </h1>
      <p className="md:text-[#71717A] md:text-base text-[0.6875rem]">{txt}</p>
    </div>
  );
};

export default ReasonToChooseUsCard;
