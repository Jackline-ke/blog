import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import book from '../assets/book.png';

export const Navbar = () => {
    const [nav, setNav] = useState(false);
   
    const handleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };
    return (
        <div className='fixed w-full px-8 py-4 md:px-16 text-white font-serif shadow-md'
        style={{
            backdropFilter: 'blur(5px)',
            webkitBackdropFilter: 'blur(5px)',
            zIndex: 1000,
        }}>
      <div className='flex justify-between items-center'>
        <Link to="/" smooth={true} duration={200} className='flex'>
          <img src={book} className='w-8' alt='hero'/>
          <h1>blogSite</h1>
        </Link>
        <div className='hidden lg:flex gap-8 cursor-pointer'>
          <div className='flex gap-8 items-center'>
            <Link to='home' smooth={true} duration={2000}>
              <h2>Home</h2>
            </Link>
            <Link to='/about' smooth={true} duration={2000}>
              <h2>About</h2>
            </Link>
            <Link to='/write' smooth={true} duration={2000}>
              <h2>Write</h2>
            </Link>
            <Link to='skills' smooth={true} duration={2000}>
              <h2>Contact</h2>
            </Link>
          </div>
          <div className='flex items-center gap-2'>
           <div className='border border-white px-8 p-1'>
            <Link to='/login' smooth={true} duration={2000}>
              <h3 className='font-semibold'>Log In</h3>
            </Link>
           </div>
           <div className='bg-white text-[#1e9e95] px-8 py-1'>
           <Link to='/signup' smooth={true} duration={2000}>
              <h3 className='font-semibold'>Sign Up</h3>
            </Link>
           </div>
          </div>
        </div>
          {/* humburger */}
        <div onClick={handleNav} className='lg:hidden z-10'>
          <FaBars size={20} className='cursor-pointer'/>
        </div>
          {/* mobile */}
          <div onClick={handleNav} className={nav ? 'overflow-hidden lg:hidden ease-in duration-300 absolute text-[#f9f2ec] top-0 right-0  w-[40%] bg-[#1e9e95]/90 px-4 py-16' : 'absolute left-[-100%] top-0 h-screen ease-in duration-500' }>
           <div  className='flex flex-col gap-4 cursor-pointer text-lg'>
              <Link to='home' smooth={true} duration={2000} onClick={closeNav}>
                <h2>Home</h2>
              </Link>
              <Link to='/about' smooth={true} duration={2000} onClick={closeNav}>
                <h2>About</h2>
              </Link>
              <Link to='skills' smooth={true} duration={2000} onClick={closeNav}>
                <h2>Blogs</h2>
              </Link>
              <Link to='skills' smooth={true} duration={2000}>
                <h2>Write</h2>
              </Link>
              <Link to='skills' smooth={true} duration={2000}>
                <h2>Contact</h2>
              </Link>
              <Link to='/login' smooth={true} duration={2000}>
                <h3 className='text-center'>Login <span className='border px-4 py-1 ml-2'>Sign up</span></h3>
              </Link>
            </div>
          </div>
        </div> 
    </div>
  )
}
