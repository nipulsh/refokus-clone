import React from "react";

const Stripe = (props) => {
  return (
    <>
      <div className=" inline-block w-1/6 p-3 border-[1px]">
        <div className="flex w-full h-full justify-between items-center">
          <img src={props.data.url} alt="ong" className="w-20 " />
          {props.data.number}
        </div>
      </div>
    </>
  );
};

export default Stripe;
