import React from "react";

const ReasonToChooseUsCard = ({ title, txt }) => {
  return (
    <div className="flex flex-col w-[24.0625rem] h-[11.375rem] gap-4 bg-[#FBFBFB] p-8 border-[#EAEAEA] border-[1px] rounded-lg">
      <h1 className="text-primaryBlack font-semibold text-2xl">{title}</h1>
      <p className="text-[#71717A]">{txt}</p>
    </div>
  );
};

export default ReasonToChooseUsCard;
