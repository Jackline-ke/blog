import React from 'react'
import Blog from './components/Blog'
import Footer from './components/Footer'
import Hero from './components/Hero'
import { Navbar } from './components/Navbar'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Hero/>
      <Blog />
      <Footer/>
    </div>
  )
}

export default App