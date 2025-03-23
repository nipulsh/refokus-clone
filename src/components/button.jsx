import React from "react";
const Button = (props) => {
  return (
    <>
      <div
        className="bg-white text-black p-1 px-5 rounded-full cursor-pointer flex items-center justify-between hover:cursor-pointer "
        style={{ width: "fit-content" }}
      >
        <span>{props.content}</span>
        <i class="bi bi-arrow-return-left text-black"></i>
      </div>
    </>
  );
};

export default Button;
