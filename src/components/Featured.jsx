import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const navigate = useNavigate();

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  const handleClick = (path) => {
    if (path.startsWith('http')) {
      window.location.href = path;
    } else {
      navigate(path);
    }
  };

  return (
    <div
      data-scroll
      data-scroll-section
      className="relative w-full py-20 bg-[#f1efef]"
    >
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20" >
        <h1 className='text-8xl font-["Neue Montreal"] tracking-tight text-[#000000]'>
          Projects
        </h1>
      </div>
      <div className="px-20 flex flex-col">
        <div>
          <div className="cards w-full flex gap-10 mt-10">
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="cardcontainer relative w-1/2 h-[60vh]"
              onClick={() => handleClick('https://github.com/minting-hustler')}
            >
              {/* text-[#864723] */}
              <h1 className="DEVLOPMENT  absolute flex overflow-hidden left-full text-[#CDEB69] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl -mb-10 leading-none tracking-tighter">
                {"DEVLOPMENT".split("").map((item, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.02,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              {/* bg-[#FFBD77] */}
              <div className="card w-full h-full rounded-xl bg-white overflow-hidden flex items-center justify-center">
                <img
                  className="max-w-full max-h-full object-contain"
                  src="/asset/software_image.jpg"
                  alt=""
                />
              </div>
            </motion.div>

            <motion.div
              onHoverStart={() => handleHover(1)}
              onHoverEnd={() => handleHoverEnd(1)}
              className="cardcontainer relative w-1/2 h-[60vh]"
              onClick={() => handleClick('https://github.com/minting-hustler')}
            >
              {/* bg-[#CDEA86]  text-[#864723]*/}
              <div className="card w-full h-full rounded-xl bg-white bg-center overflow-hidden">
                <h1 className="MACHINELEARNING absolute flex overflow-hidden text-[#CDEB69] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl -mb-10 leading-none tracking-tighter ">
                  {"MACHINE LEARNING".split("").map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: "100%" }}
                      animate={cards[1]}
                      transition={{
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.02,
                      }}
                      className="inline-block"
                    >
                      {item}
                    </motion.span>
                  ))}
                </h1>
                <img
                  className="w-full h-full bg-cover bg-center"
                  src="/asset/Machine_Learning.jpg"
                  alt=""
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
