import React from "react";
import FooterComponents from "./FooterComponents";

const Footer = () => {
  const Footerdata = [
    [
      "Services",
      "Bitsan Hostel Accommodation",
      "Bitsan Hotel and Suite Booking",
      "Wifi Range Network Solutions",
      "Purchase",
    ],
    ["Follow Us", "Facebook", "Twitter", "Instagram"],
  ];
  return (
    <footer className="py-[6.25rem] lg:px-20 px-6 bg-white flex flex-col gap-9">
      <div className="md:flex grid grid-cols-2 justify-between items-start">
        <div className="flex flex-col gap-2 w-[23rem]">
          {/* <img src="/image/logo.svg" className="mb-1.5" alt="" /> */}
          <h1 className="font-bold text-3xl">BITSAN</h1>
          <p className="">
            From hostel to property sales, experience seamless connectivity and
            real estate solution.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-primaryYellow pb-0.5 font-bold">Services</h1>
          <p className="font-medium">Bitsan Hostel Accommodation</p>
          <p className="font-medium">Bitsan Hotel and Suite Booking</p>
          <p className="font-medium">Wifi Range Network Solutions</p>
          <p className="font-medium">Purchase</p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-primaryYellow pb-0.5 font-bold">Follow Us</h1>
          <div className="flex items-center gap-4">
            <img src="/SVGS/facebook.svg" alt="" />
            <p className="font-medium">Facebook</p>
          </div>
          <div className="flex items-center gap-4">
            <img src="/SVGS/twitter.svg" alt="" />
            <p className="font-medium">Twitter</p>
          </div>
          <div className="flex items-center gap-4">
            <img src="/SVGS/instagram.svg" alt="" />
            <p className="font-medium">Instagram</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t-[1px] border-t-black/30 pt-20">
        <p className="opacity-50">Copyright © 2024</p>
        <div className="flex md:gap-5">
          <p className="font-bold">Privacy & Policy</p>
          <p className="font-bold">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
