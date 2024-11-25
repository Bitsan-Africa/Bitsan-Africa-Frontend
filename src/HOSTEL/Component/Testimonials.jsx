import React from "react";
import Headers from "./Headers";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const TestimonialData = [
    {
      name: "Web prodigies",
      profession: "@Web prodigies",
      img: "/SVGS/Testimonial.svg",
      comments:
        "This platform has revolutionized the way I rent a hostel. It’s flexible and has made me more productive than ever before.",
    },
    {
      name: "Web prodigies",
      profession: "@Web prodigies",
      img: "/SVGS/Testimonial.svg",
      comments:
        "This platform has revolutionized the way I rent a hostel. It’s flexible and has made me more productive than ever before.",
    },
    {
      name: "Web prodigies",
      profession: "@Web prodigies",
      img: "/SVGS/Testimonial.svg",
      comments:
        "This platform has revolutionized the way I rent a hostel. It’s flexible and has made me more productive than ever before.",
    },
    {
      name: "Web prodigies",
      profession: "@Web prodigies",
      img: "/SVGS/Testimonial.svg",
      comments:
        "This platform has revolutionized the way I rent a hostel. It’s flexible and has made me more productive than ever before.",
    },
    {
      name: "Web prodigies",
      profession: "@Web prodigies",
      img: "/SVGS/Testimonial.svg",
      comments:
        "This platform has revolutionized the way I rent a hostel. It’s flexible and has made me more productive than ever before.",
    },
    {
      name: "Web prodigies",
      profession: "@Web prodigies",
      img: "/SVGS/Testimonial.svg",
      comments:
        "This platform has revolutionized the way I rent a hostel. It’s flexible and has made me more productive than ever before.",
    },
  ];
  return (
    <div className="md:py-[8rem] py-[4.9375rem] bg-black">
      <div className="bg-[#FFEEC9] md:py-6 py-5 flex flex-col items-center justify-center md:gap-16 gap-2">
        <header className="flex flex-col gap-4 justify-center items-center">
          <h2 className="h-[4.25rem] w-[15rem] rounded-full bg-custom-gradient border-2 p-[2px] flex justify-center items-center">
            <p className="w-full h-full bg-[#FFEEC9] rounded-full flex justify-center items-center text-primaryBlack text-3xl font-DMSANS">
              Testimonials
            </p>
          </h2>
          <Headers
            title={"Trusted by all"}
            txt={
              "Join thousands of users who rely on our platform for their hostel search."
            }
          />
        </header>

        <div className="flex gap-x-4 gap-y-8 items-center justify-center flex-wrap md:mt-0 mt-2">
          {TestimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
