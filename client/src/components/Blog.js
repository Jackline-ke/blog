import React from 'react'
import hero from '../assets/hero.jpeg'

const Blog = () => {
  return (
    <div className='px-8 lg:px-16 py-8'>
        <div className='flex flex-col'>
            <h3 className='mb-4 border-b border-b-[#1e9e95]/50'>Recent Blog Post</h3>
            <div className='flex flex-col lg:flex-row gap-4'>
            {/* left */}
            <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
                <div className='rounded-lg bg-[#f5f5f5] py-4 px-4 flex lg:flex-col gap-4 lg:gap-1'>
                    <img src={hero} className='w-48 lg:w-full lg:h-48 object-cover rounded-md'/>
                    <div className='py-2'>
                        <h2 className='text-xl font-semibold'>Post Title</h2>
                        <h3 className='text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                        <h3 className='text-sm mt-2'><span className='font-semibold text-[#1e9e95]'>Author:</span> Jackline Adhiambo</h3>
                        <h3 className='text-sm mt-2'><span className='font-semibold text-[#1e9e95]'>Date:</span> 8/1/2023</h3>
                    </div>
                </div>
                <div className='rounded-lg bg-[#f5f5f5] py-4 px-4 flex lg:flex-col gap-4 lg:gap-1'>
                    <img src={hero} className='w-48 lg:w-full lg:h-48 object-cover rounded-md'/>
                    <div className='py-2'>
                        <h2 className='text-xl font-semibold'>Post Title</h2>
                        <h3 className='text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                        <h3 className='text-sm mt-2'><span className='font-semibold text-[#1e9e95]'>Author:</span> Jackline Adhiambo</h3>
                        <h3 className='text-sm mt-2'><span className='font-semibold text-[#1e9e95]'>Date:</span> 8/1/2023</h3>
                    </div>
                </div>
                <div className='rounded-lg bg-[#f5f5f5] py-4 px-4 flex lg:flex-col gap-4 lg:gap-1'>
                    <img src={hero} className='w-48 lg:w-full lg:h-48 object-cover rounded-md'/>
                    <div className='py-2'>
                        <h2 className='text-xl font-semibold'>Post Title</h2>
                        <h3 className='text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                        <h3 className='text-sm mt-2'><span className='font-semibold text-[#1e9e95]'>Author:</span> Jackline Adhiambo</h3>
                        <h3 className='text-sm mt-2'><span className='font-semibold text-[#1e9e95]'>Date:</span> 8/1/2023</h3>
                    </div>
                </div>
                <div className='rounded-lg bg-[#f5f5f5] py-4 px-4 flex lg:flex-col gap-4 lg:gap-1'>
                    <img src={hero} className='w-48 lg:w-full lg:h-48 object-cover rounded-md'/>
                    <div className='py-2'>
                        <h2 className='text-xl font-semibold'>Post Title</h2>
                        <h3 className='text-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                        <h3 className='text-sm mt-2'><span className='font-semibold text-[#1e9e95]'>Author:</span> Jackline Adhiambo</h3>
                        <h3 className='text-sm mt-2'><span className='font-semibold text-[#1e9e95]'>Date:</span> 8/1/2023</h3>
                    </div>
                </div>

            </div>
            {/* right */}
            <div>
                <div className='px-32 bg-black lg:ml-4'>
                    <h1 className='text-white border'>Hello left</h1>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Blog