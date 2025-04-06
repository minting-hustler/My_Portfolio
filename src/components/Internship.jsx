import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Internship() {  
  const cards = [useAnimation(), useAnimation()];
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  const handleAmazonClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/amazon');
      window.scrollTo(0, 0);
    }, 2000); // Adjust the duration to match the animation
  };
  const handleAfameClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/afame');
      window.scrollTo(0, 0);
    }, 2000); // Adjust the duration to match the animation
  };
  
  return (
    <div data-scroll data-scroll-section className='relative w-full py-20 bg-[#f1efef]'>
      {isAnimating && (
        <>
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
            className="fixed inset-0 bg-black z-50"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 1 }}
            className="fixed inset-0 bg-white z-50"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          >
            <h1 className="text-black text-4xl">Loading...</h1>
          </motion.div>
        </>
      )}
      <div className='px-20 flex flex-col'>
        <div className='cards w-full flex gap-10 mt-10'>          
          <motion.div 
            onHoverStart={() => handleHover(0)} 
            onHoverEnd={() => handleHoverEnd(0)} 
            onClick={handleAmazonClick}
            className='cardcontainer relative w-1/2 h-[60vh] cursor-pointer'
          >
            <h1 className='absolute flex overflow-hidden left-full text-zinc-600 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl -mb-10 leading-none tracking-tighter'>
              {"EXPEREINCE".split('').map((item, index) => (
                <motion.span 
                  key={index}
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                  className='inline-block'
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl bg-[#034e58] overflow-hidden flex items-center justify-center">
              <img 
                className=" w-4/5 max-h-full object-contain" 
                src="/asset/amazon_summer_School_1.png" 
                alt="" 
              />
            </div>
          </motion.div>

          <motion.div 
            onHoverStart={() => handleHover(1)} 
            onHoverEnd={() => handleHoverEnd(1)} 
            onClick={handleAfameClick}
            className='cardcontainer relative w-1/2 h-[60vh]'
          >
            <div className='afame card w-full h-full rounded-xl bg-[#ffffff] overflow-hidden'>
              <h1 className=' absolute flex overflow-hidden text-zinc-600 right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-8xl -mb-10 leading-none tracking-tighter'>
                {"EXPEREINCE".split('').map((item, index) => (
                  <motion.span 
                    key={index}
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                    className='inline-block'
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>            
              <img className="w-full h-half bg-cover bg-center" 
                    src="/asset/Afame_Technologies.png" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Internship;
