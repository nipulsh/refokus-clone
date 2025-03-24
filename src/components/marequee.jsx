import React from "react";

const Marequee = ({ data, direction }) => {
  return (
    <>
      <div className="inline-block text-[0px] w-1/8 mr-3  h-full">
        <div
          className={
            direction
              ? `p-15 ${"-translate-x-[100%]"} h-full w-full flex justify-center items-center`
              : `p-15  h-full w-full flex justify-center items-center`
          }
        >
          <img src={data} alt="ong" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Marequee;
