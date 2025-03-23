import React from "react";
import Card from "./card";

const Cards = () => {
  return (
    <>
      <div className="flex justify-between items-center max-w-screen-lg mx-auto mt-[20vh]  gap-[10px] ">
        <Card width={"w-1/3"} />
        <Card width={"w-2/3"} />
      </div>
    </>
  );
};

export default Cards;
