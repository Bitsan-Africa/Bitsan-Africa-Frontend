import React from "react";

const RoomCard = () => {
  return (
    <div className="lg:w-[25rem] lg:h-[34.1875rem] w-[8.3125rem] h-[10.4375rem] lg:p-5 p-1.5 lg:rounded-[2.625rem] rounded-lg grid grid-rows-2 shadow-lg">
      <img
        src="/SVGS/room.svg"
        className="lg:w-full lg:h-max w-[7.5rem] h-20"
        alt=""
      />
      <div className="lg:pt-[3.4375rem] pt-3 text-[0.6875rem] lg:pb-[2.5rem] pb-1.5 flex flex-col lg:gap-[1.375rem]">
        <h2 className="title font-bold md:text-2xl ">Room and Palour</h2>
        <h3 className="md:h-max h-8 flex justify-start items-center md:text-base text-[0.6875rem] truncate lg:w-[22rem]  w-[7.3125rem]">
          No 12, Governors Arena Ilorin
        </h3>
        <div className="price flex items-center justify-between ">
          <h3 className="font-bold md:text-4xl">#300, 000</h3>
          <button className="bg-[#FBDA93] md:text-base text-[0.5rem] lg:h-[3.5rem] lg:w-[8.5625rem] h-[1.125rem] w-[3.4375rem] rounded-xl flex justify-center items-center">
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
