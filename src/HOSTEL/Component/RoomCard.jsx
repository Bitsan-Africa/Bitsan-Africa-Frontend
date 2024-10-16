import React from "react";

const RoomCard = () => {
  return (
    <div className="lg:w-[25rem] lg:h-[34.1875rem] p-5 rounded-[2.625rem] grid grid-rows-2 shadow-lg">
      <img src="/SVGS/room.svg" className="w-full" alt="" />
      <div className="pt-[3.4375rem] pb-[2.5rem] flex flex-col gap-[1.375rem]">
        <h2 className="title font-bold text-2xl">Room and Palour</h2>
        <p className="address truncate w-full">No 12, Governors Arena Ilorin</p>
        <div className="price flex items-center justify-between">
          <h3 className="font-bold text-4xl">#300, 000</h3>
          <button className="bg-[#FBDA93] h-[3.5rem] w-[8.5625rem] rounded-xl flex justify-center items-center">
            View details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
