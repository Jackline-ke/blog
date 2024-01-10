import React, {useState} from 'react'
import {FaBars, FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import book from '../assets/book.png'

export const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleNav = ()=>{
      setNav(!nav)
    }
    const closeNav = () => {
        setNav(false);
    } 
  return (
    <div className='fixed w-full px-8 py-4 md:px-16 text-white font-serif bg-opacity-70 shadow-md' style={{ backdropFilter: 'blur(5px)', webkitBackdropFilter: 'blur(5px)', zIndex: 1000 /* Set a higher z-index */ }}>
      <div className='flex justify-between items-center'>
        <Link to="/" smooth={true} duration={200} className='flex'>
          <img src={book} className='w-8'/>
          <h1>blogSite</h1>
        </Link>
        <div className='hidden lg:flex gap-8 cursor-pointer'>
          <div className='flex gap-8 items-center'>
            <Link to='home' smooth={true} duration={2000}>
              <h2>Home</h2>
            </Link>
            <Link to='features' smooth={true} duration={2000}>
              <h2>About</h2>
            </Link>
            <Link to='skills' smooth={true} duration={2000}>
              <h2>Write</h2>
            </Link>
            <Link to='skills' smooth={true} duration={2000}>
              <h2>Contact</h2>
            </Link>
          </div>
          <div className='flex items-center gap-2'>
           <div className='border border-[#1e9e95]/50 px-8 py-1'>
            <Link to='/login' smooth={true} duration={2000}>
              <h3>Log In</h3>
            </Link>
           </div>
           <div className='bg-[#1e9e95] text-white px-8 py-1'>
           <Link to='/signup' smooth={true} duration={2000}>
              <h3>Sign Up</h3>
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
              <Link to='features' smooth={true} duration={2000} onClick={closeNav}>
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
