import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

// pages & components
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import MyTeam from './MyTeam'
import BuyldTeam from './BuyldTeam'

const MyRoutes = () => {
  const { user } = useAuthContext()

  return (
    <div>
      <Routes>
        <Route
          path='/login'
          element={!user ? <Login /> : <Navigate to={'/myteam'} />}
        />
        <Route path='/myteam' element={<MyTeam />} />
        <Route path='/buyldteam' element={<BuyldTeam />} />
      </Routes>
    </div>
  )
}

export default MyRoutes
