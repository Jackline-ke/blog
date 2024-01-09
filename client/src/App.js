import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar'
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='/blogs' element={<Blogs />} /> 
          <Route path='/signup' element={<Signup />} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
