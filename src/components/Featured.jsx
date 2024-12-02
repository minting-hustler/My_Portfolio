import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

function Featured() {  
  const cards = [useAnimation(), useAnimation()];
  
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  
  return (
    <div data-scroll data-scroll-section className='relative w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-8xl font-["Neue Montreal"] tracking-tight'>
          Latest videos
        </h1>
      </div>
      <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10'>          
          <motion.div 
            onHoverStart={() => handleHover(0)} 
            onHoverEnd={() => handleHoverEnd(0)} 
            className='cardcontainer relative w-1/2 h-[75vh]'
          >
            <h1 className='absolute flex overflow-hidden left-full text-[#864723] -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl -mb-10 leading-none tracking-tighter'>
              {"RESUME".split('').map((item, index) => (
                <motion.span 
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>
          <div className="card w-full h-full rounded-xl bg-[#FFBD77] overflow-hidden flex items-center justify-center">
            <img 
              className="max-w-full max-h-full object-contain" 
              src="https://img.freepik.com/premium-vector/human-resources-resume-concept_140689-3932.jpg?semt=ais_hybrid" 
              alt="" 
            />
          </div>
          </motion.div>

          <motion.div 
            onHoverStart={() => handleHover(1)} 
            onHoverEnd={() => handleHoverEnd(1)} 
            className='cardcontainer relative w-1/2 h-[75vh]'
          >
            <div className='card w-full h-full rounded-xl bg-[#CDEA86] overflow-hidden'>
              <h1 className='absolute flex overflow-hidden text-[#864723] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl -mb-10 leading-none tracking-tighter'>
                {"GITHUB".split('').map((item, index) => (
                  <motion.span 
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                    className='inline-block'
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>            
              <img className="w-full h-half bg-cover" 
                    src="public\asset\GIT HUB.jpg" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
