import React from "react";
import Marequee from "./marequee";

const Marequees = () => {
  const elements = [
    "/public/logo1.png",
    "/public/logo2.png",
    "/public/logo3.png",
    "/public/logo4.png",
    "/public/logo5.png",
    "/public/logo6.png",
    "/public/logo7.png",
    "/public/logo8.png",
    "/public/logo9.png",
  ];
  return (
    <>
      <div className="mt-[20vh] mb-20vh">
        <div className=" whitespace-nowrap h-[20vh]">
          {elements.map((element, index) => (
            <Marequee data={element} key={index} />
          ))}
        </div>
        <div className=" whitespace-nowrap h-[20vh]">
          {elements.map((element, index) => (
            <Marequee data={element} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Marequees;
