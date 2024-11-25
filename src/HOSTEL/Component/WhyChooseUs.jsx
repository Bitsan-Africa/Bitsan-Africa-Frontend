import React from "react";
import Headers from "./Headers";
import ReasonToChooseUsCard from "./ReasonToChooseUsCard";

const WhyChooseUs = () => {
  const ChooseUsArr = [
    {
      title: "Best Hostels",
      txt: "The leading hostel marketplace. Search millions of rental listings, compare hostel values and secure the deal.",
    },
    {
      title: "Best Prices",
      txt: "The leading hostel marketplace. Search millions of rental listings, compare hostel values and secure the deal.",
    },
    {
      title: "Flexible Booking",
      txt: "The leading hostel marketplace. Search millions of rental listings, compare hostel values and secure the deal.",
    },
    {
      title: "Price Match",
      txt: "The leading hostel marketplace. Search millions of rental listings, compare hostel values and secure the deal.",
    },
    {
      title: "Best Designs",
      txt: "The leading hostel marketplace. Search millions of rental listings, compare hostel values and secure the deal.",
    },
    {
      title: "24/7 Support",
      txt: "The leading hostel marketplace. Search millions of rental listings, compare hostel values and secure the deal.",
    },
  ];
  return (
    <section className="lg:px-20 px-5 md:py-[7.5rem] py-[2.5rem] flex flex-col md:gap-20 gap-8 justify-center items-center">
      <Headers
        style={"text-primaryYellow"}
        title={"Why choose us?"}
        txt={"Best easy way to get the house and apartment of your dreams"}
      />
      <div className="md:flex flex-wrap justify-center items-center grid grid-cols-2 md:gap-x-8 md:gap-y-8 gap-y-4 gap-2">
        {ChooseUsArr.map((choose, i) => (
          <ReasonToChooseUsCard key={i} {...choose} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
