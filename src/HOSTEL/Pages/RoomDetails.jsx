import React from "react";
import Navbar from "./../Component/Navbar";
import ReviewsCard from "../Component/ReviewsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const RoomDetails = () => {
  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Animation speed in ms
    slidesToShow: 3, // Show 3 cards at a time
    slidesToScroll: 1, // Scroll 1 card at a time
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="text-primaryBlack">
      <Navbar />

      <main className="pt-[2rem] pb-[14.8125rem] bg-white flex flex-col justify-center items-center gap-[5.3125rem] lg:px-20 px-6">
        <header className="grid px-5 grid-cols-2 gap-16 place-items-center">
          <img src="/SVGS/imgdetails1.svg" className="h-full" alt="" />
          <div className="flex flex-col gap-9">
            <img src="/SVGS/imgdetails2.svg" alt="" />
            <img src="/SVGS/imgdetails3.svg" alt="" />
          </div>
        </header>
        <section className="flex flex-col w-full gap-8">
          <div className="btns flex gap-11 items-center justify-start">
            <button className="font-bold text-3xl   hover:underline hover:text-primaryYellow">
              Overview
            </button>
            <button className="font-bold text-3xl   hover:underline hover:text-primaryYellow">
              Facilities
            </button>
            <button className="font-bold text-3xl   hover:underline hover:text-primaryYellow">
              Policies
            </button>
            <button className="font-bold text-3xl   hover:underline hover:text-primaryYellow">
              Location
            </button>
            <button className="font-bold text-3xl   hover:underline hover:text-primaryYellow">
              Reviews
            </button>
          </div>
          <div className="flex flex-col gap-[6.25rem] ">
            <header className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold">Room and palour</h1>
              <div className="flex  items-center gap-4">
                <p className="text-2xl">Ratings</p>
                <p className="text-xl bg-[#197122] px-5 py-1 rounded-lg w-max text-white">
                  9.8
                </p>
              </div>
              <button className="text-[#4B8AE8] w-max hover:underline">
                See all reviews{" "}
                <i className="fa fa-chevron-right" aria-hidden="true"></i>
              </button>
            </header>
            <div className="flex items-baseline gap-6">
              <h1 className="text-3xl font-bold">Facilities</h1>
              <div className="flex flex-col gap-4 font-medium">
                <p className="text-2xl">Kitchen</p>
                <p className="text-2xl">Bathroom</p>
                <p className="text-2xl">Air conditioning</p>
                <p className="text-2xl">Car park</p>
                <p className="text-2xl">Wifi</p>
              </div>
            </div>
            <div className="flex items-baseline justify-start gap-6 ">
              <h1 className="text-3xl font-bold">Policies</h1>
              <p className="text-2xl font-medium">Hostel rules</p>
              <div className="flex flex-col gap-4 font-medium">
                <p className="text-2xl">Gates must be closed by 11:00pm</p>
                <p className="text-2xl">No dogs allowed</p>
                <p className="text-2xl">No smoking</p>
                <p className="text-2xl">No clubbing in the hostel</p>
                <p className="text-2xl">Gates must be closed by 11:00pm</p>
              </div>
            </div>
            <div className="flex items-baseline justify-start gap-6 ">
              <h1 className="text-3xl font-bold">Damages</h1>
              <p className="text-2xl font-medium md:w-2/3">
                You will be responsible for any damage to the property rented
                caused by you during your stay.
              </p>
            </div>
            <div className="flex items-baseline justify-start gap-6 ">
              <h1 className="text-3xl font-bold">Important information</h1>
              <div className="flex flex-col gap-4 font-medium">
                <p className="text-2xl">
                  Extra-person charges may apply and vary depending on property
                  policy
                </p>
                <p className="text-2xl">
                  Extra-person charges may apply and vary depending on property
                  policy
                </p>
                <p className="text-2xl">
                  Extra-person charges may apply and vary depending on property
                  policy
                </p>
                <p className="text-2xl">
                  Extra-person charges may apply and vary depending on property
                  policy
                </p>
                <p className="text-2xl">
                  Extra-person charges may apply and vary depending on property
                  policy
                </p>
              </div>
            </div>
            <div className="flex items-baseline justify-start gap-6 ">
              <h1 className="text-3xl font-bold">Location</h1>
              <p className="text-2xl font-medium md:w-2/3">
                No 12, Governors Arena Ilorin
              </p>
            </div>

            <div className="reviews flex flex-col gap-8">
              <h1 className="text-3xl font-bold">Reviews</h1>
              <Slider {...settings} className="flex gap-4 items-center">
                <ReviewsCard />
                <ReviewsCard />
                <ReviewsCard />
                <ReviewsCard />
                <ReviewsCard />
                <ReviewsCard />
              </Slider>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="forward flex items-center justify-center rounded-full w-11 h-11 bg-primaryYellow text-white absolute z-[1] right-[-1.5rem] top-1/2 transform -translate-y-1/2"
      onClick={onClick}
    >
      <i className="fa fa-chevron-right" aria-hidden="true"></i>
    </button>
  );
};

// Custom previous arrow component
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="backward flex items-center justify-center rounded-full w-11 h-11 bg-primaryYellow text-white absolute z-[1] left-[-2rem] top-1/2 transform -translate-y-1/2"
      onClick={onClick}
    >
      <i className="fa fa-chevron-left" aria-hidden="true"></i>
    </button>
  );
};

// 73867573544014
// 20192999

export default RoomDetails;
