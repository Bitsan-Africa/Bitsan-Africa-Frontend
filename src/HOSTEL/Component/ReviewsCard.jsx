import React from "react";

const ReviewsCard = () => {
  return (
    <div className="flex relative flex-col gap-8 rounded-lg border-[1.5px] border-[#464646] w-[25.625rem] h-[16.25rem] py-8 px-14 bg-[#FAFAFA]">
      <img className="absolute left-3 top-[0.5px]" src="/SVGS/reviewimg1.svg" alt="" />
      <img className="absolute right-3 -bottom-0.5" src="/SVGS/reviewimg2.svg" alt="" />
      <header className="flex flex-col gap-4">
        <h1 className="font-bold text-primaryBlack">10/10 Great!</h1>
        <p className="text-sm text-primaryBlack">
          Awesome property for anyone looking for a modest hostel in the area!
          Walk through the main gate and you are literally 100 yards from the
          {/* big market! The property has all the standard amenities plus you Read */}
          more
        </p>
      </header>
      <div className="flex flex-col gap-1.5">
        <h2 className="font-bold">Uthman Saheed</h2>
        <p className="date">OCT 22 2024</p>
      </div>
    </div>
  );
};

export default ReviewsCard;
