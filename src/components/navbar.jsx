import React from "react";
import "./navbar.css";
import Button from "./button";
const Navbar = () => {
  return (
    <div className="flex justify-between max-w-screen-lg mx-auto p-3 items-center border-b-1">
      <div className=" flex justify-start items-center">
        <img src="/public/title.png" alt="ong" className="w-20" />
        {["home", "work", "culture", "news"].map((item, index) => (
          <a
            href={`#${item}`}
            key={index}
            className="p-3 text-white hover:cursor-pointer ml-3 flex items-center nav-links"
            aria-label={`Go to ${item} section`}
          >
            {index === 1 && (
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
            )}
            {index === 3 && (
              <span className="inline-block w-1 h-6  border-l  relative top- 1 mr-8"></span>
            )}
            {item}
          </a>
        ))}
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
