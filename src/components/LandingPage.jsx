import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  // bg-[#eee1c5] text-[#E43D11]
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen  bg-black text-white pt-1"
    >
      <div className="textstructure mt-52 px-20">
        {["Welcome All", "My Name", "Is Nikhil Kumar"].map((item, index) => {
          return (
            <div key={index} className="masker  ">
              <div className="w-fit flex items-end  ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" mr-[1vw] w-[8vw] rounded-md h-[5vw] top-[1.2vw] relative flex overflow-hidden  "
                  >
                    <img src="asset\pushing.jpg" alt="" />
                  </motion.div>
                )}
                <h1 className='pt-[2vw] -mb-[1vw] uppercase text-[6.5vw] leading-[.75] font-["Founders Grotesk X-Condensed"] '>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-20">
        {["Indian Instiute Of Technology Jodhpur ", "Chemical Engineering"].map(
          (item, index) => (
            <p className="text-md font-light traacking-tight leading-none">
              {item}
            </p>
          )
        )}
        <div className="start flex items-center justify-center">
          <div className="px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-500">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
