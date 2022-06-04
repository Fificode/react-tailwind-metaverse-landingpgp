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
    <div className='flex flex-row xmedium:flex-col'>
      <div className="flex items-start justify-center flex-1 flex-col mx-[15px] mt-[40px] large:mt-[150px] sm:mx-[30px]">
       <div className="flex flex-row"> 
       <h1 className="text-white text-[14px] font-normal msmaller:text-[17px] md:text-[20px]">Trendy & Amazing Features</h1>
       <hr className='text-white w-[40px] mx-3 translate-y-4'/>
       <div className="flex flex-row mt-[10px]">
         <img src={greencircle} alt="Green circle" className='w-[12px] h-[12px]'/>
         <img src={orangecircle} alt="Orange circle" className='w-[12x] h-[12px] mx-2'/>
         <img src={bluecircle} alt="Blue circle" className='w-[12px] h-[12px]'/>
       </div>
       </div>
       <h2 className='font-bold text-white tracking-[0.02em] capitalize text-[40px] leading-[80px] msmaller:text-[60px] md:text-[85px] md:leading-[120px] xlarge:text-[104px]'>METAVERSE</h2>
      <div className='flex flex-row'> <h2 className='font-bold text-white text-[40px] tracking-[0.02em] capitalize msmaller:text-[60px] md:text-[85px] xlarge:text-[104px]'>MA</h2>
      <img src={letterd} alt="Capital Letter D" className='w-[50px] h-[35px] translate-y-4 pl-[2px] inline mmsmall:w-[50px] mmsmall:h-[35px] mmsmall:translate-y-[13px] msmall:w-[60px] msmall:h-[35px] msmall:translate-y-[14px] md:w-[110px] md:h-[65px] md:translate-y-9 xlarge:w-[126px] xlarge:[100px] xlarge:translate-y-14'/>
     <h2 className='font-bold text-white text-[40px] tracking-[0.02em] capitalize msmaller:text-[60px] md:text-[85px] xlarge:text-[104px]'>NESS</h2>
     </div>
     <p className='text-white text-[17px] font-normal md:[20px]'>We provide the best service for your company products in real world and the Meta-world</p>
     <div className="flex flex-row mt-[20px]">
       <button className='text-black bg-blue-btn rounded-[10px] px-[20px] py-[2px] text-[13px] msmaller:px-[30px] msmaller:py-[2px] msmaller:text-[14px] md:text-[20px] md:px-[40px] md:py-[15px]'>Get Started</button>
       <div className='border-[1px] border-solid  border-white rounded-[50%] w-[50px] h-[50px] mx-[30px]'>
         <img src={playbtn} alt="Play button" className='translate-x-4 translate-y-3' />
       </div>
       <p className='text-white font-[600] text-[14px] translate-y-3 msmaller:text-[17px] md:text-[20px]'>See Demo</p>
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