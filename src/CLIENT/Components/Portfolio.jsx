// import React from "react";
// import PortfolioCard from "./PortfolioCard";

// const Portfolio = () => {
//   const portfolioData = [
//     {
//       name: "Usman Abdullahi",
//       profession: "Frontend Developer",
//       img: "/image.png",
//       comments:
//         "Bitsan platform has been such a great experience using one of their services is top notch without any regrets. I was able to book my hostel through their website Bitsan hostel accommodations.",
//     },
//     {
//       name: "Hussein Idris",
//       profession: "Fullstack Developer",
//       img: "/image.png",
//       comments:
//         "Bitsan platform has been such a great experience using one of their services is top notch without any regrets. I was able to book my hostel through their website Bitsan hostel accommodations.",
//     },
//     {
//       name: "Favour Olowo",
//       profession: "Student",
//       img: "/image.png",
//       comments:
//         "Bitsan platform has been such a great experience using one of their services is top notch without any regrets. I was able to book my hostel through their website Bitsan hostel accommodations.",
//     },
//   ];
//   return (
//     <section className="relative pt-[7.5rem] flex flex-col gap-24 bg-[#F7F7F7] pb-11 lg:px-20 px-6">
//       <img
//         src="/SVGS/telephone.svg"
//         className="absolute top-0 right-7 opacity-30"
//         alt=""
//       />
//       <img
//         src="/SVGS/telephone2.svg"
//         className="absolute bottom-0 left-7 opacity-30"
//         alt=""
//       />
//       <h1 className="font-semibold text-6xl text-center">
//         What our clients <br /> has to say
//       </h1>
//       <div className="flex flex-col gap-[4.1875rem]">
//         <div className="Portfolios flex justify-center items-center ">
//           {portfolioData.map((portfolio) => (
//             <PortfolioCard {...portfolio} />
//           ))}
//         </div>
//         <div className="flex justify-between items-center">
//           <button className="backward w-[65px] h-[65px] bg-primaryYellow opacity-0 rounded-full flex justify-center items-center">
//             <i
//               className="text-white text-2xl font-bold fa fa-chevron-left"
//               aria-hidden="true"
//             ></i>
//           </button>

//           <div className=".dots flex gap-2">
//             <button className="w-[15px] h-[15px] bg-primaryYellow rounded-full"></button>
//             <button className="w-[15px] h-[15px] bg-[#D9D9D9] rounded-full"></button>
//             <button className="w-[15px] h-[15px] bg-[#D9D9D9] rounded-full"></button>
//             <button className="w-[15px] h-[15px] bg-[#D9D9D9] rounded-full"></button>
//             <button className="w-[15px] h-[15px] bg-[#D9D9D9] rounded-full"></button>
//           </div>
//           <button className="forward w-[65px] h-[65px] bg-primaryYellow rounded-full flex justify-center items-center">
//             <i
//               className="text-white text-2xl font-bold fa fa-chevron-right"
//               aria-hidden="true"
//             ></i>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;










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
    centerPadding: "100px", // adjust this for the partial slide effect
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    className: "portfolio-carousel",
  };

  return (
    <section className="relative pt-[7.5rem] flex flex-col gap-24 bg-[#F7F7F7] pb-11 lg:px-20 px-6">
      <img
        src="/SVGS/telephone.svg"
        className="absolute top-0 right-7 opacity-30"
        alt=""
      />
      <img
        src="/SVGS/telephone2.svg"
        className="absolute bottom-0 left-7 opacity-30"
        alt=""
      />
      <h1 className="font-semibold text-6xl text-center">
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
        className="forward w-[65px] h-[65px] bg-primaryYellow rounded-full flex justify-center items-center absolute right-[-45px] bottom-[-145px] transform -translate-y-1/2"
        onClick={onClick}
      >
        <i className="text-white text-2xl font-bold fa fa-chevron-right"></i>
      </button>
    );
  };
  
  // Custom previous arrow component
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="backward w-[65px] h-[65px] bg-primaryYellow rounded-full flex justify-center items-center absolute left-[-45px] bottom-[-145px] transform -translate-y-1/2"
        onClick={onClick}
      >
        <i className="text-white text-2xl font-bold fa fa-chevron-left"></i>
      </button>
    );
  };
export default Portfolio;
