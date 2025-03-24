import React from "react";
import Button from "./button";

const Product = ({ data, index, mover, handleIsOn, handleIsOff }) => {
  return (
    <>
      <div
        onMouseEnter={() => {
          handleIsOn();
          mover(index);
        }}
        onMouseLeave={handleIsOff}
        className=" w-full  hover:bg-[#02016F] h-[23rem] flex justify-center items-center"
      >
        <div className="max-w-screen-lg mx-auto h-60 flex justify-between items-center ">
          <h1 className="text-[3rem] uppercase">{data.heading}</h1>
          <div className="w-1/3 ">
            <p className=" mb-10">{data.discription}</p>
            <div className="flex items-center gap-3">
              {data.live && <Button content={"start a project"} />}
              {data.case && <Button content={"case study"} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
