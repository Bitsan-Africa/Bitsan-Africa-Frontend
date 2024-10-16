import React from "react";

const TestimonialCard = ({ name, profession, comments, img }) => {
  return (
    <div className="bg-custom-yellow-gradient p-6 w-[27.5625rem] h-[11.4375rem] bg-primaryBlack rounded-2xl border-[1px] border-[#211F30] flex flex-col gap-4">
      <header className=" flex items-center gap-6">
        <img src={img} className="h-16 w-16 rounded-full" alt="" />
        <div className="info">
          <h3 className="font-DMSANS">{name}</h3>
          <p className="italic font-DMSANS">{profession}</p>
        </div>
      </header>
      <p className="">{comments}</p>
    </div>
  );
};

export default TestimonialCard;
