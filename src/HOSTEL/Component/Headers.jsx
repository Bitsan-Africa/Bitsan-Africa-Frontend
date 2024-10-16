import React from "react";
import Heading1 from "../Elements/Heading1";
const Headers = ({ title, txt, style }) => {
  return (
    <header className="flex flex-col gap-8 justify-center items-center">
      <Heading1 style={style}>{title}</Heading1>
      <p className="font-bold text-[2rem] lg:w-[41.25rem] text-center">{txt}</p>
    </header>
  );
};

export default Headers;
