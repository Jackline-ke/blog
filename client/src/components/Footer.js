import React from 'react'
// import {Link} from 'react-scroll'
import book from '../assets/book.png'

const Footer = () => {
  return (
    <div className='w-full bg-[#1e9e95] py-2 px-8 lg:px-32 text-white'>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-center'>
          <img src={book} className='w-8'/>
          <h1>blogSite</h1>
        </div>
        <p className='text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>
    </div>
  )
}

export default Footer