import React from "react";
import PortfolioCard from "./PortfolioCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Portfolio.css"; // Custom CSS for blurred effect

const Portfolio = () => {
  const portfolioData = [
    {
      name: "Usman Abdullahi",
      profession: "Frontend Developer",
      img: "/image.png",
      comments:
        "Bitsan platform has been such a great experience using one of their services is top notch without any regrets. I was able to book my hostel through their website Bitsan hostel accommodations.",
    },
    {
      name: "Usman Abdullahi",
      profession: "Frontend Developer",
      img: "/image.png",
      comments:
        "Bitsan platform has been such a great experience using one of their services is top notch without any regrets. I was able to book my hostel through their website Bitsan hostel accommodations.",
    },
    {
      name: "Hussein Idris",
      profession: "Fullstack Developer",
      img: "/image.png",
      comments:
        "Bitsan platform has been such a great experience using one of their services is top notch without any regrets. I was able to book my hostel through their website Bitsan hostel accommodations.",
    },
    {
      name: "Favour Olowo",
      profession: "Student",
      img: "/image.png",
      comments:
        "Bitsan platform has been such a great experience using one of their services is top notch without any regrets. I was able to book my hostel through their website Bitsan hostel accommodations.",
    },
  ];

  const settings = {
    dots: true, // enables dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // enables partial next slide visibility
    centerPadding: "10%", // adjust this for the partial slide effect
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "portfolio-carousel",
  };

  return (
    <section className="relative md:h-max h-[30rem] md:pt-[7.5rem] pt-8 flex flex-col md:gap-24 gap-8 bg-[#F7F7F7] md:pb-11 pb-8 lg:px-20 px-6">
      <img
        src="/SVGS/telephone.svg"
        className="absolute top-0 right-7 opacity-10 md:w-max w-[3.125rem]"
        alt=""
      />
      <img
        src="/SVGS/telephone2.svg"
        className="absolute bottom-0 left-7 opacity-10 md:w-max w-[3.125rem]"
        alt=""
      />
      <h1 className="font-semibold md:text-6xl text-2xl text-center">
        What our clients <br /> has to say
      </h1>
      <div className="flex flex-col gap-[4.1875rem] h-[35rem] justify-start">
        <Slider {...settings}>
          {portfolioData.map((portfolio, index) => (
            <PortfolioCard key={index} {...portfolio} />
          ))}
        </Slider>
      </div>
    </section>
  );
};
// Custom next arrow component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="forward md:w-[65px] md:h-[65px] h-[25px] w-[25px] bg-primaryYellow rounded-full flex justify-center items-center absolute md:right-[-45px] md:bottom-[-145px] right-[-5px] bottom-[-90px] transform -translate-y-1/2"
      onClick={onClick}
    >
      <i className="text-white md:text-2xl text-xs font-bold fa fa-chevron-right"></i>
    </button>
  );
};

// Custom previous arrow component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="backward md:w-[65px] md:h-[65px] w-[25px] h-[25px] bg-primaryYellow rounded-full flex justify-center items-center absolute md:left-[-45px] left-[-5px] md:bottom-[-145px] bottom-[-90px] transform -translate-y-1/2"
      onClick={onClick}
    >
      <i className="text-white md:text-2xl text-xs font-bold fa fa-chevron-left"></i>
    </button>
  );
};
export default Portfolio;

// 73867573544014
// 20192999
