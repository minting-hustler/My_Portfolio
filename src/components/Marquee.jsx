import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.0001"
      className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-white"
    >
      <div className="text-black border-t-2 border-b-2 border-zinc-900 flex gap-8 overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[6vw] leading-none font-[founders Grotesk X-condensed] uppercase font-semibold pr-20"
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[6vw] leading-none font-[founders Grotesk X-condensed] uppercase font-semibold pr-20"
        >
          Welcome to My Portfolio
        </motion.h1>
      </div>
    </div>
  );
}
// #D28957
export default Marquee;
