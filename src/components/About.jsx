import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './About.css'; // Import the CSS file for hover effects

function About() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleReadMoreClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      navigate('/about_me');
      window.scrollTo(0, 0);
    }, 2000); // Adjust the duration to match the animation
  };

  return (
    <div className='w-full p-20 bg-black rounded-tl-3xl rounded-tr-3xl text-[#ECE9E2]'>
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
        </>
      )}
      <div className='w-3/4 gap-0'>
        <h1 className='font-title text-[3vw] leading-[4.5vw] letter-spacing:-0.01em'>
          I'm Nikhil Kumar, a B.Tech student at IIT Jodhpur with a strong passion for software development. I'm focused on building and deploying efficient, scalable software solutions, aiming to excel as an SDE.
        </h1>
      </div>
        
      <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a5bd4f]'> 
        <div className='w-1/2'>
          <h1 className='text-7xl'>About Me:</h1>
          <button 
            className='read-more-button flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white' 
            onClick={handleReadMoreClick}
          >
            Read More
            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
          </button>
        </div>
        <div className='w-1/2 h-[50vh] rounded-3xl bg-[#EFB11E]'>
          <img className='w-full h-full rounded-3xl' src="https://etvbharatimages.akamaized.net/etvbharat/prod-images/02-10-2024/448-252-22584194-824-22584194-1727789518208.jpg" alt="" />
        </div> 
      </div>
    </div>
  );
}

export default About;