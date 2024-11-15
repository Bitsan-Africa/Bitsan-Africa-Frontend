import React from "react";
import Nav from "../Components/Nav";
import HeroSection from "../Components/HeroSection";
import WhyBitsan from "../Components/WhyBitsan";
import Portfolio from "../Components/Portfolio";
import GetInTouch from "../Components/GetInTouch";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <div>
      <section className="bg-primaryBlack bg-[url(/SVGS/smallgs.svg)] ">
        <Nav />
        <HeroSection />
        <WhyBitsan />
        <Portfolio />
        {/*   <GetInTouch />
        <Footer /> */}
      </section>
    </div>
  );
};

export default HomePage;
