import React from "react";
import Heading1 from "../Elements/Heading1";
const Headers = ({ title, txt, style }) => {
  return (
    <header className="flex flex-col md:gap-8 gap-2 justify-center items-center">
      <Heading1 style={style}>{title}</Heading1>
      <p className="font-medium md:text-[2rem] text-[0.6875rem] md:leading-[2.375rem] leading-[1rem] lg:w-[41.25rem] w-[16.0625rem] text-center">
        {txt}
      </p>
    </header>
  );
};

export default Headers;
