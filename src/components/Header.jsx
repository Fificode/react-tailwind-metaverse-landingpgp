import React from 'react'
import landingimage from '../assets/landingimg.png'
import greencircle from '../assets/greencircle.png'
import orangecircle from '../assets/orangecircle.png'
import bluecircle from '../assets/bluecircle.png'
import letterd from '../assets/letterd.png'
import playbtn from '../assets/playbtn.png'
const Header = () => {
  return (
    <div>
    <div className='flex flex-row medium:flex-col'>
      <div className="flex items-start justify-center flex-1 flex-col mx-[30px] mt-[40px] large:mt-[150px]">
       <div className="flex flex-row"> 
       <h1 className="text-white text-xl font-normal">Trendy & Amazing Features</h1>
       <hr className='text-white w-[40px] mt-4 mx-3'/>
       <div className="flex flex-row mt-[10px]">
         <img src={greencircle} alt="Green circle" className='w-[12px] h-[12px]'/>
         <img src={orangecircle} alt="Orange circle" className='w-[12x] h-[12px] mx-2'/>
         <img src={bluecircle} alt="Blue circle" className='w-[12px] h-[12px]'/>
       </div>
       </div>
       <h2 className='font-bold text-white text-[104px] tracking-[0.02em] capitalize leading-[120px] large:text-[85px] smaller:text-[60px]'>METAVERSE</h2>
      <div className='flex flex-row'> <h2 className='font-bold text-white text-[104px] tracking-[0.02em] capitalize large:text-[85px] smaller:text-[60px]'>MA</h2>
      <img src={letterd} alt="Capital Letter D" className='w-[136px] h-[80px] large:w-[90px]h-[50px] smaller:w-[50px]h-[20px]'/>
     <h2 className='font-bold text-white text-[104px] tracking-[0.02em] capitalize large:text-[85px] smaller:text-[60px]'>NESS</h2>
     </div>
     <p className='text-white text-xl font-normal'>We provide the best service for your company products in real world and the Meta-world</p>
     <div className="flex flex-row mt-[20px]">
       <button className='text-black px-[40px] py-[15px] bg-blue-btn rounded-[10px] text-[20px] smaller:px-[20px]py-[5px]text-[13px]'>Get Started</button>
       <div className='rounded-[50%] text-white mx-[60px]'>
         <img src={playbtn} alt="Play button" />
       </div>
       <p className='text-white font-[600] text-[20px]'>See Demo</p>
     </div>
      </div>
      <div className="flex justify-center items-center flex-1 mt-[40px] mx-[30px]">
        <img src={landingimage} alt="Landing page" className='w-[100%] h-[100%]'/>
      </div>
    </div>
    </div>
  )
}

export default Header