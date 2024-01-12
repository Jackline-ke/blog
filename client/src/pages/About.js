import React from 'react'

const About = () => {
  return (
    <div className='font-serif about px-8 flex flex-col h-screen justify-center items-center w-full'>
        <div className='lg:px-16 py-8 lg:w-3/5 flex flex-col justify-center items-center'>
           <div className='mb-6 flex flex-col items-center'>
                <h3 className='text-4xl mb-1 font-semibold'>About Us</h3>
                <div className='bg-[#1e9e95] w-28 h-[2px] rounded-md'></div>
           </div>
            <p className='text-center text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
  )
}

export default About