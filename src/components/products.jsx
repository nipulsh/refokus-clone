import React from "react";
import Product from "./product";

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
  return (
    <>
      <div className="h-auto ">
        {productsList.map((product, index) => (
          <Product data={product} key={index} />
        ))}
      </div>
    </>
  );
};

export default Products;
