import React, { useState } from "react";
import { useScroll } from "framer-motion";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1556742504-16b083241fab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1541580103-eb54f7a758be?q=80&w=1942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://images.unsplash.com/photo-1616197151166-93dc9b4528d8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      top: "60%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      for (let i = 0; i < images.length; i++) {
        images[i].isActive = false;
      }
      for (let i = 0; i < arr.length; i++) {
        images[arr[i]].isActive = true;
      }
      setImages([...images]);
    }

    console.log(data);
    switch (Math.floor(data * 100)) {
      case 2:
        imagesShow([0]);
        break;
      case 3:
        imagesShow([0, 1]);
        break;
      case 4:
        imagesShow([0, 1, 2]);
        break;
      case 5:
        imagesShow([0, 1, 2, 3]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 7:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;

      default:
        break;
    }
  });

  return (
    <>
      <div className="w-full mb-10">
        <div className="max-w-screen-lg mx-auto text-center select-none text-white relative">
          <h1 className="text-[30vw] leading-none text-center relative bottom-10 ">
            work
          </h1>
          <div className="absolute w-full h-full top-0 ">
            {images.map(
              (image, index) =>
                image.isActive && (
                  <div
                    className={`absolute w-[150px] h-[150px] `}
                    key={index}
                    style={{
                      top: image.top,
                      left: image.left,
                      backgroundImage: `url(${image.url})`,
                      backgroundSize: "cover",
                      transform: "translate(-50%, -50%)",
                    }}
                  ></div>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
