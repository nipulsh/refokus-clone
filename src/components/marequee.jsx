import React from "react";

const Marequee = (props) => {
  return (
    <>
      <div className="inline-block text-[0px] w-1/8 mr-3  h-full">
        <div className="p-15  h-full w-full flex justify-center items-center">
          <img src={props.data} alt="ong" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Marequee;
