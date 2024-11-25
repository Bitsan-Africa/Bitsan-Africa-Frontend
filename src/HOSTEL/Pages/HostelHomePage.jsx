import Navbar from "../Component/Navbar";
import Roomlist from "../Component/Roomlist";
import WhyChooseUs from "../Component/WhyChooseUs";
import Testimonials from "../Component/Testimonials";
import Footer from "../Component/Footer";
import { HotelHeroSection } from "../Component/HostelHeroSection";

const HostelHomePage = () => {
  return (
    <div className="">
      <Navbar />
      <HotelHeroSection />
      {/* <Roomlist />
      <WhyChooseUs />
      <Testimonials />
      <Footer /> */}
    </div>
  );
};

export default HostelHomePage;
