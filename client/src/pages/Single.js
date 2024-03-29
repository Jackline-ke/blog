import React from 'react'
import hero from '../assets/hero.jpeg'
import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'



const Single = () => {
  return (
    <div className='font-serif w-full px-8 lg:px-16 flex flex-col items-center justify-center' style={{ paddingTop: '80px' }}>
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 mb-8'>
        {/* right */}
        <div className='w-full'>
          <img src={hero} className="h-72 w-full object-cover"/>
          <h3 className='text-center my-2 text-xl font-semibold'>Title</h3>
          <div className='flex justify-between'>
            <h4 className='text-[14px]'><span className='font-semibold text-[#1e9e95]/50'>Author:</span> Jackline Adhiambo</h4>
            <h4 className='text-[14px]'><span className='font-semibold text-[#1e9e95]/50'>Date:</span> 1 hour ago</h4>
          </div>
          <p className='tracking-wider my-2 lg:my-2 lg:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit 
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
            in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        {/* left */}
        <div className='bg-[#1e9e95]/50 px-4 py-4 h-fit lg:w-2/6'>
          <div className='bg-white rounded-sm py-4 px-4 lg:gap-1'>
            <h3 className='text-center mb-3 border-b border-b-[#1e9e95] border-t border-t-[#1e9e95]'>About Me</h3>
            <div className='flex flex-row lg:flex-col gap-4 items-center justify-between'>
              <div className='w-full'>
                <img src={hero} className='w-full h-56 lg:h-48 object-cover rounded-md'/>
              </div>
              <div className='w-4/6 lg:w-full my-2'>
                <p className='text-ellipsis text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              </div>
              <div className='flex flex-col'>
                <div>
                  <h3 className='text-center mt-2 border-b border-b-[#1e9e95] border-t border-t-[#1e9e95]'>Social Media</h3>
                  <div className='flex justify-center gap-2 mt-4'>
                    <FaFacebook className='text-[#1e9e95]'/>
                    <FaInstagram className='text-[#1e9e95]'/>
                    <FaPinterest className='text-[#1e9e95]'/>
                    <FaTwitter className='text-[#1e9e95]'/>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Single