import React from "react";
import Headers from "./Headers";
import RoomCard from "./RoomCard";

const Roomlist = () => {
  return (
    <section className="lg:px-20 px-6 pt-[7.5rem] flex flex-col gap-20 justify-center items-center">
      <Headers
      style={"text-primaryYellow"}
        title={"Explore our beautiful hostels"}
        txt={
          "Enjoy great benefits and affordable rates when you book directly on our website."
        }
      />

      <div className="grid grid-cols-3 gap-x-4 gap-y-20 justify-center items-center">
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
