import React from 'react'
import {FaSearch} from 'react-icons/fa'
import hero from '../assets/hero.jpeg'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <img src={hero} className='w-full h-full object-cover' alt='hero'/>
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/50'></div>
      <div className='p-4 absolute w-full h-full top-0 flex flex-col justify-center text-center text-white'>
        <h1 className='text-4xl mb-3'>Find Your Best Real Estate</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore<br/> et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <br/> laboris nisi ut aliquip ex ea commodo consequat.</p>
        <form className='flex justify-between items-center  max-w-[700px] mx-auto w-full border p-1 text-black rounded-md bg-gray-100/90 mt-5'>
          <div>
            <input type='text' placeholder='Search for a blog by title...' className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none pl-4'/>
          </div>
          <div>
            <button className='bg-[#1e9e95] p-2 cursor-pointer'><FaSearch size={20} style={{color: '#ffffff'}}/></button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default Hero