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
<img src={logo} alt="Logo" className='small:w-[38px]h-[38px] mx-1 w-[48px] h-[48px]'/>
<h1 className='small:text-3xl font-bold text-white tracking-[0.02em] text-5xl'>Metaverse</h1>
</div>
<ul className='flex medium:hidden'>
<li>Home</li>
<li>How it works</li>
<li>Event</li>
<li>Market place</li>
</ul>
<div className="flex small:hidden">
    <button className='px-3 text-xl font-normal text-white bg-transparent'>Sign In</button>
    <button className='px-[30px] py-[10px] rounded-[10px] bg-blue-btn text-black text-xl'>Sign Up</button>
</div>
<div className="lg:hidden" onClick={handleClick}>
    {!nav ? <MenuIcon className='w-10 text-white m-2' /> : <XIcon className='w-10 text-white m-2'/>}
</div>
</div>

<ul className={!nav ? 'hidden' : 'absolute w-full px-8 bg-blue-black'}>
<li className='w-full'>Home</li>
<li className='w-full'>How it works</li>
<li className='w-full'>Event</li>
<li className='w-full'>Market place</li>
<div className= 'flex flex-col md:hidden'>
    <button className='px-3 text-xl font-normal text-white bg-transparent text-left py-4'>Sign In</button>
    <button className='px-[30px] py-[10px] rounded-[10px] bg-blue-btn text-xl text-black'>Sign Up</button>
</div>
</ul>
    </div>
  )
}

export default Navbar