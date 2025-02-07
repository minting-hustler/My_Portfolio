import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

function Cards() {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = (path) => {
    setIsAnimating(true);
    setTimeout(() => {
      window.scrollTo(0, 0); // Ensure the new page starts at the top
      navigate(path);
    }, 2000); // Adjust the delay as needed
  };

  return (
    <div className="w-full h-screen bg-black flex items-center px-32 gap-5">
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
      <div className="cardcontainer-1 h-[50vh] w-2/5">
        <div
          className="crap relative rounded-xl w-full h-full bg-[#2c2c2c] flex items-center justify-center cursor-pointer"
          onClick={() => handleCardClick("/facedetection")}
        >
          <img
            className="w-4/5 h-half"
            src="/asset/face_detection_image.png"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 ">
            &copy;project
          </button>
        </div>
      </div>
      <div className="cardcontainer-2 flex gap-5 h-[50vh] w-3/5">
        <div
          className="crap relative rounded-xl w-1/2 h-full bg-[#575757] flex items-center justify-center cursor-pointer"
          onClick={() => handleCardClick("/reinforcementlearning")}
        >
          <img
            className="w-3/4"
            src="/asset/reinforcement_learning.png"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 ">
            &copy;project
          </button>
        </div>
        <div
          className="crap relative rounded-xl w-1/2 h-full bg-[#969696] flex items-center justify-center cursor-pointer"
          onClick={() => handleCardClick("/formula1")}
        >
          <img
            className="w-32"
            src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2017/11/new-f1-logo.jpg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 ">
            &copy;project
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
