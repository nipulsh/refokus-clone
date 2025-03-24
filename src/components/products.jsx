import React, { useState } from "react";
import Product from "./product";
import { motion } from "framer-motion";
const Products = () => {
  const productsList = [
    {
      heading: "arquil",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U",
      live: true,
      case: false,
    },
    {
      heading: "arquil",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U",
      live: true,
      case: false,
    },
    {
      heading: "arquil",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U",
      live: true,
      case: false,
    },
    {
      heading: "arquil",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U",
      live: true,
      case: true,
    },
    {
      heading: "arquil",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U",
      live: true,
      case: true,
    },
  ];

  const [position, setPosition] = useState(0);

  const [isOn, setIsOn] = useState(false);

  function handleIsOn() {
    setIsOn(true);
  }

  function handleIsOff() {
    setIsOn(false);
  }

  function mover(val) {
    setPosition(val * 23);
  }

  return (
    <>
      <div className="relative">
        {productsList.map((product, index) => (
          <Product
            handleIsOff={handleIsOff}
            handleIsOn={handleIsOn}
            data={product}
            key={index}
            mover={mover}
            index={index}
          />
        ))}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <motion.div
            initial={{ scale: 0, y: position + "rem" }}
            animate={{ scale: isOn ? 1 : 0, y: position + "rem" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
            className={`window w-[30rem] h-[23rem] bg-white left-[44%] absolute -translate-x-[50%]  overflow-hidden`}
          >
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="window w-full h-full bg-sky-200"
            ></motion.div>
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="window w-full h-full bg-sky-300"
            ></motion.div>
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="window w-full h-full bg-sky-400"
            ></motion.div>
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="window w-full h-full bg-sky-500"
            ></motion.div>
            <motion.div
              animate={{ y: -position + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="window w-full h-full bg-sky-600"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Products;
