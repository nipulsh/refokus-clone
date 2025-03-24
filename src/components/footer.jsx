import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full">
        <div className="max-w-screen-lg mx-auto flex py-10 gap-30">
          <div className="basis-1/2 ">
            <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
              refokus.
            </h1>
          </div>
          <div className="basis-1/2 flex gap-4">
            <div>
              <h4 className="mb-10 text-zinc-600">socials</h4>
              {["instagram", "twitter (x?)", "linkedin"].map((item, index) => (
                <a
                  href={`#${item}`}
                  key={index}
                  className="block mt-3 text-zinc-600 capitalize basis-1/3"
                  aria-label={`Go to ${item} section`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="basis-1/3">
              <h4 className="mb-10 text-zinc-600">socials</h4>
              {["instagram", "twitter (x?)", "linkedin"].map((item, index) => (
                <a
                  href={`#${item}`}
                  key={index}
                  className="block mt-3 text-zinc-600 capitalize"
                  aria-label={`Go to ${item} section`}
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="basis-1/2">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
