import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterOrLogin from './Components/RegisterOrLogin';
import UserProfile from './Components/UserProfile';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<RegisterOrLogin />} />
        <Route path='/userProfile' element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
