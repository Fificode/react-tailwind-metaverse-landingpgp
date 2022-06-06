import React from 'react'
import cube from '../assets/cubeicon.png'
import stars from '../assets/starsicon.png'
import iphone from '../assets/iphoneicon.png'
const Feature = () => {
  return (
      <div className="flex flex-row justify-center items-center my-[60px] xl:my-[40px]">
    <div className='bg-light-purple flex flex-col w-[100%] h-[100%] xl:flex xl:flex-row xl:justify-center xl:items-center  xl:w-[1200px] xl:h-[240px]'>
        <div className="flex flex-col items-center mx-5 my-12 xl:mx-5 ">
            <div className="flex justify-center items-center w-[56px] h-[56px] bg-transparent-purple m-3"><img src={cube} alt="Cube icon" className='w-[40px] h-[40px] fill-white' /></div>
            <h1 className="text-center text-white text-[24px] font-[600] font-normal">Multiple Method</h1>
            <p className='text-center text-white text-[16px] font-normal font-[400]'>We provide the best service for your company products in real world and the Meta-world</p>
        </div>
        <div className="flex flex-col items-center mx-5 my-12 xl:m-5">
            <div className="flex justify-center items-center w-[56px] h-[56px] bg-transparent-purple m-3"><img src={stars} alt="Stars icon" className='w-[40px] h-[40px] fill-white'/></div>
        <h1 className="text-center text-white text-[24px] font-[600] font-normal">Live Tested</h1>
        <p className='text-center text-white text-[16px] font-normal font-[400]'>We provide the best service for your company products in real world and the Meta-world</p>
        </div>
<div className="flex flex-col items-center mx-5 my-12 xl:m-5">
    <div className="flex justify-center items-center w-[56px] h-[56px] bg-transparent-purple m-3"><img src={iphone} alt="Iphone icon" className='w-[40px] h-[40px] fill-white' /></div>
        <h1 className="text-center text-white text-[24px] font-[600] font-normal">Mobile Integration</h1>
        <p className='text-center text-white text-[16px] font-normal font-[400]'>We provide the best service for your company products in real world and the Meta-world</p>
        </div>
    </div>
    </div>
  )
}

export default Feature