import React from "react";
import Navbar from "./components/navbar";
import Work from "./components/work";
import Stripes from "./components/stripes";
import Products from "./components/products";
import Marequees from "./components/marequees";
import Cards from "./components/cards";
import Footer from "./components/footer";
import { ReactLenis, useLenis } from "lenis/react";

const App = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <>
      <ReactLenis root>
        <div className="w-screen overflow-hidden h-full bg-zinc-900 text-white overflowX-hidden">
          <Navbar />
          <Work />
          <Stripes />
          <Products />
          <Marequees />
          <Cards />
          <Footer />
        </div>
      </ReactLenis>
    </>
  );
};

export default App;
