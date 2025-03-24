import React from "react";
import Marequee from "./marequee";
import { motion } from "framer-motion";

const Marequees = () => {
  const elements = [
    [
      "/public/logo1.png",
      "/public/logo2.png",
      "/public/logo1.png",
      "/public/logo2.png",
      "/public/logo1.png",
      "/public/logo2.png",
      "/public/logo1.png",
      "/public/logo2.png",
    ],
    [
      "/public/logo1.png",
      "/public/logo2.png",
      "/public/logo1.png",
      "/public/logo2.png",
      "/public/logo1.png",
      "/public/logo2.png",
      "/public/logo1.png",
      "/public/logo2.png",
    ],
  ];
  return (
    <>
      <div className="mt-[20vh] mb-[30vh]">
        <motion.div
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className=" whitespace-nowrap h-[20vh] "
        >
          {elements[0].map((element, index) => (
            <Marequee data={element} key={index} />
          ))}
          {elements[1].map((element, index) => (
            <Marequee data={element} key={index} />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "0" }}
          animate={{ x: "100%" }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
          className=" whitespace-nowrap h-[20vh] translate-x-[-100%]"
        >
          {elements[0].map((element, index) => (
            <Marequee data={element} key={index} direction={"right"} />
          ))}
          {elements[1].map((element, index) => (
            <Marequee data={element} key={index} direction={"right"} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Marequees;
