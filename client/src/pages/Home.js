import React from 'react'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='home'>
        <Hero/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Home