import React from 'react'
import hero from '../assets/hero.jpeg'

const Login = () => {
  return (
    <div className='login flex justify-center h-screen pb-2' style={{ paddingTop: '80px' }}>
      <div className='border border-#1e9e95]/10 rounded-tr-2xl rounded-br-2xl shadow-md flex w-2/3 max-w-4xl'>
        <div className='w-2/5 relative'>
          <img src={hero} className='h-full object-cover'/>
          <div className='absolute inset-0 bg-gray-900/50'></div> {/* Use inset-0 to match parent size */}
          <div className='p-4 absolute inset-0 flex flex-col justify-center text-center text-white'>
            <h1 className='text-xl mb-3'>Welcome to bookSite</h1>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center w-3/5 '>
          <h3>Login</h3>
          <form className='flex flex-col gap-4'>
            <div className='flex flex-col'>
              <label>Username</label>
              <input type='text' className='bg-[#1e9e95]/10 py-2 px-8'/>
            </div>
            <div className='flex flex-col'>
              <label>Password</label>
              <input type='password' className='bg-[#1e9e95]/10 py-2 px-8'/>
            </div>
            <button className='bg-[#1e9e95] mt-4 py-3 rounded-full shadow-md shadow-#1e9e95]/10'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login