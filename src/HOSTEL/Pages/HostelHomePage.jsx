import React from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Roomlist from "../Component/Roomlist";
import WhyChooseUs from "../Component/WhyChooseUs";
import Testimonials from "../Component/Testimonials";
import Footer from "../Component/Footer";

const HostelHomePage = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Roomlist />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HostelHomePage;
