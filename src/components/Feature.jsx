import React from 'react'
import cube from '../assets/cube.svg'
import stars from '../assets/stars.svg'
import iphone from '../assets/iphone.svg'
const Feature = () => {
  return (
      <div className="mt-[60px] ">
    <div className='bg-light-purple flex flex-col items-center w-[100%] h-[100%]  xl:flex xl:flex-row xl:justify-between xl:w-[100%] xl:h-[260px]'>
        <div className="flex flex-col items-center mx-5 my-12 xl:my-5 xl:mx-[30px] ">
            <div className="flex justify-center items-center w-[56px] h-[56px] bg-transparent-purple m-3"><img src={cube} alt="Cube icon" className='w-[40px] h-[40px]' /></div>
            <h1 className="text-center text-white text-[24px] font-[600]">Multiple Method</h1>
            <p className='text-center text-white text-[16px]  font-[400]'>We provide the best service for your company products in real world and the Meta-world</p>
        </div>
        <div className="flex flex-col items-center mx-5 my-12 xl:my-5 xl:mx-[30px]">
            <div className="flex justify-center items-center w-[56px] h-[56px] bg-transparent-purple m-3"><img src={stars} alt="Stars icon" className='w-[40px] h-[40px]'/></div>
        <h1 className="text-center text-white text-[24px] font-[600]">Live Tested</h1>
        <p className='text-center text-white text-[16px] font-[400]'>We provide the best service for your company products in real world and the Meta-world</p>
        </div>
<div className="flex flex-col items-center mx-5 my-12 xl:my-5 xl:mx-[30px]">
    <div className="flex justify-center items-center w-[56px] h-[56px] bg-transparent-purple m-3"><img src={iphone} alt="Iphone icon" className='w-[40px] h-[40px]' /></div>
        <h1 className="text-center text-white text-[24px] font-[600]">Mobile Integration</h1>
        <p className='text-center text-white text-[16px] font-[400]'>We provide the best service for your company products in real world and the Meta-world</p>
        </div>
    </div>
    </div>
  )
}

export default Feature