import React from 'react'
import hero from '../assets/hero.jpeg'
import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'

const Blog = () => {
  return (
    <div className='px-8 lg:px-32 py-8 w-full'>
        <div className=''>
            <div className='mb-6'>
                <h3 className='font-serif text-3xl font-semibold text-[#1e9e95] mb-2'>Recent Blog Post</h3>
                <div className='bg-[#1e9e95] w-32 h-[2px] rounded-md'></div>
            </div>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='rounded-lg bg-[#f5f5f5] py-4 px-4 flex items-center lg:flex-col gap-4 lg:gap-1'>
                        <img src={hero} className='w-full h-48 lg:w-full lg:h-48 object-cover rounded-md'/>
                        <div className=''>
                            <h2 className='text-2xl font-serif font-semibold'>Post Title</h2>
                            <div className='flex justify-between'>
                                <h4 className='text-[12px]'><span className='font-semibold text-[#1e9e95]'>Author:</span> Jackline Adhiambo</h4>
                                <h4 className='text-[12px]'><span className='font-semibold text-[#1e9e95]'>Date:</span> 8/1/2023</h4>
                            </div>
                            <div className='h-32 mt-2 overflow-hidden mb-2'>
                                <p className='text-ellipsis'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                         </div>
                    </div>
                    <button className='mt-[-15px] bg-[#1e9e95] px-4 lg:px-8 py-1 text-white text-sm font-serif'>Read More</button>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='rounded-lg bg-[#f5f5f5] py-4 px-4 flex items-center lg:flex-col gap-4 lg:gap-1'>
                        <img src={hero} className='w-full h-48 lg:w-full lg:h-48 object-cover rounded-md'/>
                        <div className=''>
                            <h2 className='text-2xl font-serif font-semibold'>Post Title</h2>
                            <div className='flex justify-between'>
                                <h4 className='text-[12px]'><span className='font-semibold text-[#1e9e95]'>Author:</span> Jackline Adhiambo</h4>
                                <h4 className='text-[12px]'><span className='font-semibold text-[#1e9e95]'>Date:</span> 8/1/2023</h4>
                            </div>
                            <div className='h-32 mt-2 overflow-hidden mb-2'>
                                <p className='text-ellipsis'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                         </div>
                    </div>
                    <button className='mt-[-15px] bg-[#1e9e95] px-4 lg:px-8 py-1 text-white text-sm font-serif'>Read More</button>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='rounded-lg bg-[#f5f5f5] py-4 px-4 flex items-center lg:flex-col gap-4 lg:gap-1'>
                        <img src={hero} className='w-full h-48 lg:w-full lg:h-48 object-cover rounded-md'/>
                        <div className=''>
                            <h2 className='text-2xl font-serif font-semibold'>Post Title</h2>
                            <div className='flex justify-between'>
                                <h4 className='text-[12px]'><span className='font-semibold text-[#1e9e95]'>Author:</span> Jackline Adhiambo</h4>
                                <h4 className='text-[12px]'><span className='font-semibold text-[#1e9e95]'>Date:</span> 8/1/2023</h4>
                            </div>
                            <div className='h-32 mt-2 overflow-hidden mb-2'>
                                <p className='text-ellipsis'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                         </div>
                    </div>
                    <button className='mt-[-15px] bg-[#1e9e95] px-4 lg:px-8 py-1 text-white text-sm font-serif'>Read More</button>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='rounded-lg bg-[#f5f5f5] py-4 px-4 flex items-center lg:flex-col gap-4 lg:gap-1'>
                        <img src={hero} className='w-full h-48 lg:w-full lg:h-48 object-cover rounded-md'/>
                        <div className=''>
                            <h2 className='text-2xl font-serif font-semibold'>Post Title</h2>
                            <div className='flex justify-between'>
                                <h4 className='text-[12px]'><span className='font-semibold text-[#1e9e95]'>Author:</span> Jackline Adhiambo</h4>
                                <h4 className='text-[12px]'><span className='font-semibold text-[#1e9e95]'>Date:</span> 8/1/2023</h4>
                            </div>
                            <div className='h-32 mt-2 overflow-hidden mb-2'>
                                <p className='text-ellipsis'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                         </div>
                    </div>
                    <button className='mt-[-15px] bg-[#1e9e95] px-4 lg:px-8 py-1 text-white text-sm font-serif'>Read More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog