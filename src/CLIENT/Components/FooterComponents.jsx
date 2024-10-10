import React from "react";

const FooterComponents = ({ txt }) => {
  return (
    <div className="flex flex-col gap-5">
      {txt.map((t, i) => (
        <p
          className={` ${
            i === 0
              ? "pb-0.5 text-primaryYellow"
              : ""
          } w-max font-semibold`}
        >
          {t}
        </p>
      ))}
    </div>
  );
};

export default FooterComponents;
