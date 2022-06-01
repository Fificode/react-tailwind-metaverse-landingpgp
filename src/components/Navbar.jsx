import React, {useState} from 'react';
import {MenuIcon, XIcon} from '@heroicons/react/outline';
import logo from '../assets/logo.png'

const Navbar = () => {
const [nav, setNav] = useState(false);
const handleClick = () => setNav(!nav);

  return (
    <div className='w-screen h-[80px] z-10 fixed my-5'>
        <div className="w-full h-full flex justify-between items-center">
<div className='flex flex-row mx-2'>
<img src={logo} alt="Logo" className='w-[38px] h-[38px] mx-1 sm:w-[48px]h-[48px]'/>
<h1 className='text-3xl font-bold text-white sm:text-5xl'>Metaverse</h1>
</div>
<ul className='hidden lg:flex'>
<li>Home</li>
<li>How it works</li>
<li>Event</li>
<li>Market place</li>
</ul>
<div className="hidden md:flex">
    <button className='px-3 text-xl font-normal text-white bg-transparent'>Sign In</button>
    <button className='px-6 py-2 mx-3 rounded-[10px] bg-blue-btn text-black text-xl'>Sign Up</button>
</div>
<div className="lg:hidden" onClick={handleClick}>
    {!nav ? <MenuIcon className='w-10 text-white m-2' /> : <XIcon className='w-10 text-white m-2'/>}
</div>
</div>

<ul className={!nav ? 'hidden' : 'absolute w-full px-8'}>
<li className='w-full'>Home</li>
<li className='w-full'>How it works</li>
<li className='w-full'>Event</li>
<li className='w-full'>Market place</li>
<div className= {!nav ? 'hidden' : 'flex flex-col'}>
    <button className='px-3 text-xl font-normal text-white bg-transparent text-left py-4'>Sign In</button>
    <button className='px-6 py-2 mx-3 rounded-[10px] bg-blue-btn text-xl text-black'>Sign Up</button>
</div>
</ul>
    </div>
  )
}

export default Navbar