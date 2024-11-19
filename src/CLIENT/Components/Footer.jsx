import React from "react";

const Footer = () => {
  return (
    <footer className="md:pt-[6.25rem] md:pb-[6.25rem] pt-8 pb-4 lg:px-20 px-6 bg-white flex flex-col gap-9">
      <div className="flex md:flex-row flex-col md:gap-0 gap-9 justify-between items-start">
        <div className="flex flex-col gap-2 md:w-[23rem]">
          {/* <img src="/image/logo.svg" className="mb-1.5" alt="" /> */}
          <h1 className="font-bold md:text-3xl text-2xl">BITSAN</h1>
          <p className="md:text-base text-xs">
            From hostel to property sales, experience seamless connectivity and
            real estate solution.
          </p>
        </div>

        <div className="flex flex-col md:gap-5 gap-4">
          <h1 className="text-primaryYellow pb-0.5 font-bold md:text-base text-xl">
            Services
          </h1>
          <p className="font-medium md:text-base text-xs">
            Bitsan Hostel Accommodation
          </p>
          <p className="font-medium md:text-base text-xs">
            Bitsan Hotel and Suite Booking
          </p>
          <p className="font-medium md:text-base text-xs">
            Wifi Range Network Solutions
          </p>
          <p className="font-medium md:text-base text-xs">Purchase</p>
        </div>
        <div className="flex flex-col md:gap-5 gap-4">
          <h1 className="text-primaryYellow pb-0.5 font-bold md:text-base text-xl">
            Follow Us
          </h1>
          <div className="flex items-center gap-4">
            <img src="/SVGS/facebook.svg" alt="" />
            <p className="font-medium md:text-base text-xs">Facebook</p>
          </div>
          <div className="flex items-center gap-4">
            <img src="/SVGS/twitter.svg" alt="" />
            <p className="font-medium md:text-base text-xs">Twitter</p>
          </div>
          <div className="flex items-center gap-4">
            <img src="/SVGS/instagram.svg" alt="" />
            <p className="font-medium md:text-base text-xs">Instagram</p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse justify-between items-center md:border-t-[1px] border-t-0 border-t-black/30 md:pt-20 md:gap-0 gap-8 md:text-base text-xs">
        <p className="opacity-50">Copyright © 2024</p>
        <div className="flex md:gap-5 justify-between md:w-max w-full ">
          <p className="md:font-bold md:text-black text-black/70">
            Privacy & Policy
          </p>
          <p className="md:font-bold md:text-black text-black/70">
            Terms & Condition
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
