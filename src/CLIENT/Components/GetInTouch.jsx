import React from "react";

const GetInTouch = () => {
  return (
    <section className="bg-[#EFEFEF] py-[7rem] lg:px-20 px-6 flex justify-center items-center">
      <div className="flex justify-center items-center bg-white shadow-lg w-full rounded-[3.125rem] h-[56.25rem]">
        <div className="flex flex-col w-[34.0625rem] gap-10">
          <header className="flex flex-col gap-5">
            <h1 className="text-6xl font-semibold">
              Get in <span className="text-primaryYellow">Touch</span>
            </h1>
            <p className="text-sm font-semibold">
              Have questions or need assistance? We're here to help!
            </p>
          </header>
          <form className="flex flex-col gap-5" action="" method="post">
            <input
              className="text-sm w-full h-[3.125rem] outline-primaryYellow border-[#828282] border-[1px] text-[#828282] pl-2"
              placeholder="Name *"
              type="text"
            />
            <input
              className="text-sm w-full h-[3.125rem] outline-primaryYellow border-[#828282] border-[1px] text-[#828282] pl-2"
              placeholder="Email"
              type="mail"
            />
            <input
              className="text-sm w-full h-[3.125rem] outline-primaryYellow border-[#828282] border-[1px] text-[#828282] pl-2"
              placeholder="Phone number *"
              type="text"
            />
            <button className="h-[4.8125rem] text-white font-bold rounded-2xl bg-primaryYellow">
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
