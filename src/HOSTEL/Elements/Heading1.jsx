import React from "react";

const Heading1 = ({ style, children }) => {
  return (
    <h1 className={`${style} text-6xl text-center font-bold`}>{children}</h1>
  );
};

export default Heading1;
