import React from "react";
import Stripe from "./stripe";

const Stripes = () => {
  const data = [
    {
      url: "https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      number: 48,
    },
    {
      url: "https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      number: 2,
    },
    {
      url: "https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      number: 48,
    },
    {
      url: "https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      number: 2,
    },
    {
      url: "https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      number: 11,
    },
    {
      url: "https://images.pexels.com/photos/3113541/pexels-photo-3113541.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      number: 48,
    },
  ];
  return (
    <>
      <div className=" w-full items-center justify-between mb-30">
        {data.map((item, index) => (
          <Stripe data={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default Stripes;
