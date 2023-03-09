import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

// pages & components
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

const BeforeAuth = () => {
  const { user } = useAuthContext()
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to={'/myteam'} />}
        />
      </Routes>
    </div>
  )
}

export default BeforeAuth
