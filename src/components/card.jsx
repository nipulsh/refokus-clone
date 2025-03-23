import React from "react";
import Button from "./button";
const Card = (props) => {
  return (
    <>
      <div className={`${props.width} h-[45vh] bg-zinc-500 rounded-2xl p-3`}>
        <div className="flex justify-between flex-col h-full ">
          <div>
            <div>
              <h5>one heading</h5>
              <i class="bi bi-arrow-right"></i>
            </div>
            <h1 className="text-[1.5rem]">whatever heading</h1>
          </div>
          <div>
            <h1>start a project</h1>
            <Button content={"contact us"} />
            <p className="text-[0.7rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
              unde!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
