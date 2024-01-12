import React from 'react'

const Login = () => {
  return (
    <div className='login font-serif min-h-screen py-40'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row w-8/12 rounded-4xl mx-auto overflow-hidden border border-[#1e9e95]/20 rounded-2xl shadow-md shadow-[#1e9e95]/50'>
          <div className='w-full lg:w-1/2 bg-cover bg-no-repeat bg-cnter text-white flex flex-col justify-center items-center p-12' style={{backgroundImage: "url('https://i.pinimg.com/236x/63/54/15/635415f075a302549b643434c0daa89b.jpg')"}}>
            <h3 className='mb-4 font-bold text-3xl'>Welcome Back!!</h3>
            <p className='text-center text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='w-full lg:w-1/2 py-8 lg:py-16 px-12'>
            <h4 className='mb-6 text-4xl font-semibold text-center'>Login</h4>
            <form action='#'>
              <div className='flex flex-col gap-4'>
                <input type='text' placeholder='Username' className='border border-[#1e9e95]/50 py-1 px-2 w-full'/>
                <input type='text' placeholder='password' className='border border-[#1e9e95]/50 py-1 px-2 w-full'/>
                <div className='flex justify-between'>
                  <div className='flex'>
                    <input type='checkbox' className=''/>
                    <p className='ml-2'>Remember Me</p>
                  </div>
                  <p className='cursor-pointer text-[#1e9e95]/70'>Forgot Password?</p>
                </div>
              </div>
              <button className='cursor-pointer bg-[#1e9e95] w-full mt-6 py-2 text-white rounded-full shadow-md shadow-[#1e9e95]/50'>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login