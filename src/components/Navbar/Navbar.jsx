import React, { useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";

const navbar = () => {

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {

    setShowMenu(!showMenu);

  }
  return (
    <header className='bg-white fixed top-0 right-0 left-0'>
      <nav className='max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center'>
        {/* logo part starts here */}
        <a href="#" className='text-3xl font-bold'>
          Gr<span className='text-orange-500 uppercase'>o</span>cify
        </a>
        {/* logo part End here */}

        {/* Menu part start here */}
        <ul className='md:flex iteam-center gap-x-15 hidden'>
          <li>
            <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
          </li>
        </ul>
        {/* Menu part End here */}

        {/* Nav Action start here  */}
        <div className='flex items-center gap-x-5 '>

          {/* input search button start here  */}
          <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
            <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none' />
            <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
              <IoSearch />
            </button>
          </div>
          {/* input search button End here  */}
          <a href="#" className='text-zinc-800 text-2xl'>
            <GoHeartFill />
          </a>
          <a href="#" className='text-zinc-800 text-2xl'>
            <HiShoppingBag />
          </a>
          {/* hamburger */}
          <a href="#" className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}

          </a>
        </div>
        {/* mobile menu  */}
        <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 iteam-center gap-x-15 md:hidden absolute top-30 -left-full transfrom -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
          <li>
            <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
          </li>
          <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
            <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none' />
            <button className='bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>

  ) 
}

export default navbar
