import React, { useEffect, useRef, useState } from 'react'

function Eyes() {
  const [rotate, setRotate]= useState(0);

  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX= mouseX-window.innerWidth/2;
      let deltaY= mouseY-window.innerHeight/2;

      var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
      setRotate(angle-180);
    })
  })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
    <div data-scroll data-scroll-speed="-0.7" className="relative w-full h-full bg-cover bg-center bg-[url('')]">
    <img className='relative w-full h-full bg-cover bg-center' src="public\asset\Owl_image.jpg" alt="" />
        <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div className=' flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-[#817461] '>
            <div className='relative w-2/3 h-2/3 rounded-full bg-[#000000]'>
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
              <div className='w-10 h-10 rounded-full bg-[#817461]'></div>
              </div>
            </div>
          </div>

          <div className=' flex items-center justify-center w-[12vw] h-[12vw] rounded-full bg-[#817461] '>
            <div className='relative w-2/3 h-2/3 rounded-full bg-[#000000]'>
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
              <div className='w-10 h-10 rounded-full bg-[#817461]'></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Eyes