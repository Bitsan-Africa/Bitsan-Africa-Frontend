import React from "react";
import Headers from "./Headers";
import RoomCard from "./RoomCard";

const Roomlist = () => {
  return (
    <section className="lg:px-20 px-6 md:pt-[7.5rem] pt-[3.3125rem] md:pb-5 pb-8 flex flex-col md:gap-20 gap-8 justify-center items-center">
      <Headers
        style={"text-primaryYellow"}
        title={"Explore our beautiful hostels"}
        txt={
          "Enjoy great benefits and affordable rates when you book directly on our website."
        }
      />

      <div className="grid md:grid-cols-3 grid-cols-2 md:gap-x-4 gap-x-2 md:gap-y-20 gap-y-8 justify-center items-center">
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </div>
    </section>
  );
};

export default Roomlist;
