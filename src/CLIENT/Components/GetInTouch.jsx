import React from "react";

const GetInTouch = () => {
  return (
    <section className="bg-[#EFEFEF] md:py-[7rem] py-5 lg:px-20 px-6 flex justify-center items-center">
      <div className="flex justify-center items-center bg-white shadow-lg w-full md:rounded-[3.125rem] rounded-[10px] md:h-[56.25rem] h-[21.125rem]">
        <div className="flex flex-col md:w-[34.0625rem] w-[10.625rem] md:gap-10 gap-4">
          <header className="flex flex-col gap-5">
            <h1 className="md:text-6xl text-base font-semibold">
              Get in <span className="text-primaryYellow">Touch</span>
            </h1>
            <p className="md:text-sm text-xs font-semibold">
             {"Have questions or need assistance? We're here to help!"}
            </p>
          </header>
          <form className="flex md:text-sm text-xs flex-col md:gap-5 gap-4" action="" method="post">
            <input
              className="w-full md:h-[3.125rem] h-[1.875rem] outline-primaryYellow border-[#828282] border-[1px] text-[#828282] pl-2"
              placeholder="Name *"
              type="text"
            />
            <input
              className="w-full md:h-[3.125rem] h-[1.875rem] outline-primaryYellow border-[#828282] border-[1px] text-[#828282] pl-2"
              placeholder="Email"
              type="mail"
            />
            <input
              className="w-full md:h-[3.125rem] h-[1.875rem] outline-primaryYellow border-[#828282] border-[1px] text-[#828282] pl-2"
              placeholder="Phone number *"
              type="text"
            />
            <button className="md:h-[4.8125rem] h-[2.1875rem] md:text-xl text-xs text-white font-bold md:rounded-2xl rounded-lg bg-primaryYellow">
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
