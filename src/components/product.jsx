import React from "react";
import Button from "./button";

const Product = (props) => {
  return (
    <>
      <div className=" w-full  hover:bg-[#02016F] h-auto ">
        <div className="max-w-screen-lg mx-auto h-60 flex justify-between items-center ">
          <h1 className="text-[3rem] uppercase">{props.data.heading}</h1>
          <div className="w-1/3 ">
            <p className=" mb-10">{props.data.discription}</p>
            <div className="flex items-center gap-3">
              {props.data.live && <Button content={"start a project"} />}
              {props.data.case && <Button content={"case study"} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
