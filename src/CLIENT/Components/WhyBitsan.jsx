import React from "react";
import WhyBitsanCard from "./WhyBitsanCard";

const WhyBitsan = () => {
  const WhyBitsanArr = [
    {
      title: "Comprehensive Solutions",
      txt: "Whether you need a place to stay, reliable WiFi network solutions, or assistance in buying and selling property, Bitsan has it all. Our range of services covers everything from hostel accommodations to premium hotel bookings, ensuring that you’re always connected and supported.",
      positioning: "md:justify-start",
      numbs: "01",
    },
    {
      title: "Comprehensive Solutions",
      txt: "With all our services seamlessly integrated under one platform, you can access what you need quickly and effortlessly. No matter if you're booking a suite, setting up a network, or exploring real estate options, Bitsan makes the process easy and efficient.",
      positioning: "md:justify-end",
      numbs: "02",
    },
    {
      title: "Reliability You Can Trust",
      txt: "We pride ourselves on delivering top-tier services across multiple sectors. From our well-maintained accommodations to our high-performing WiFi networks and real estate expertise, Bitsan is synonymous with quality and dependability.",
      positioning: "md:justify-start",
      numbs: "03",
    },
    {
      title: "A One-Stop Solution for Modern Living",
      txt: "Bitsan is designed to meet the demands of today's fast-paced world. Whether you’re a traveler, a homeowner, or a business looking for network solutions, we provide everything you need to stay connected, comfortable, and ahead of the curve.",
      positioning: "md:justify-end",
      numbs: "04",
    },
  ];
  return (
    <section className="md:pt-[7.5rem] pt-8 pb-14 md:pb-[14.8125rem] bg-white flex flex-col justify-center items-center md:gap-[5.3125rem] gap-8 lg:px-20 px-6">
      <h1 className="font-semibold text-primaryBlack md:text-6xl text-2xl ">
        Why Bitsan
      </h1>
      <div className="reasons w-full flex flex-col md:gap-[6.25rem] gap-[2.625rem] ">
        {WhyBitsanArr.map((why, i) => (
          <WhyBitsanCard key={i} {...why} />
        ))}
      </div>
    </section>
  );
};

export default WhyBitsan;
