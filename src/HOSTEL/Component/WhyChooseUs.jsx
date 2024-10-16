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
    <section className="lg:px-20 px-6 py-[7.5rem] flex flex-col gap-20 justify-center items-center">
      <Headers
      style={"text-primaryYellow"}
        title={"Why choose us?"}
        txt={"Best easy way to get the house and apartment of your dreams"}
      />
      <div className="flex flex-wrap justify-center items-center gap-8">
        {ChooseUsArr.map((choose, i) => (
          <ReasonToChooseUsCard key={i} {...choose} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
