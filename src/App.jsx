
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import { useContext, useEffect, useState } from 'react'
import { authorizationContext } from './Contexts/ContextAPI'









function App() {
      const {isAuthorized,setIsAuthorized}=useContext(authorizationContext)
  



 

 
  

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}

        theme="coloured"
        
      />

      <Routes>


        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
        <Route path='/dashboard' element={isAuthorized?<Dashboard />:<Navigate to={'/login'}/>} />
        <Route path='/projects' element={<Projects />} />




      </Routes>
      <Footer />
    </>
  )
}

export default App
