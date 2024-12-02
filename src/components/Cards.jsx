import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-[#eee1c5] flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
            
            <div className='card relative rounded-xl w-full h-full bg-[#D5536D] flex items-center justify-center'>
                <img className='w-half h-half' src="public\asset\face_detection.png" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 '>&copy;2019</button>
            </div>
        </div>
        <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
            
            <div className='card relative rounded-xl w-1/2 h-full bg-[#FFA2B5] flex items-center justify-center'>
                <img className='w-32' src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2017/11/new-f1-logo.jpg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 '>&copy;2019</button>
            </div>
            <div className='card relative rounded-xl w-1/2 h-full bg-[#EFB11E] flex items-center justify-center'>
                <img className='w-32' src="https://financialexpresswpcontent.s3.amazonaws.com/uploads/2017/11/new-f1-logo.jpg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 '>&copy;2019</button>
            </div>
        </div>
    </div>
  )
}

export default Cards