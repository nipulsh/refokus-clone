import React from "react";
import Navbar from "./components/navbar";
import Work from "./components/work";
import Stripes from "./components/stripes";
import Products from "./components/products";
import Marequees from "./components/marequees";
import Cards from "./components/cards";

const App = () => {
  return (
    <>
      <div className="w-screen overflow-hidden h-full bg-zinc-900 text-white overflowX-hidden">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marequees />
        <Cards />
      </div>
    </>
  );
};

export default App;
